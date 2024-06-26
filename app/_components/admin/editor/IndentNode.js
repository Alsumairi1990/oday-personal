import { Extension } from "@tiptap/core";
import { TextSelection, AllSelection } from "prosemirror-state";
let globalIndent = 0;

export default Extension.create({
  name: "Indent",

  defaultOptions: {
    types: ["listItem", "paragraph"],
    minLevel: 0,
    maxLevel: 8,
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          indent: {
            renderHTML: (attributes) => {
              return { style: `margin-left: ${attributes.indent}px` };
            },
            parseHTML: (element) => {
              const level = Number(element.getAttribute("data-indent"));
              return level && level > this.options.minLevel ? level : null;
            },
          },
        },
      },
    ];
  },

  addCommands() {
    const setNodeIndentMarkup = (tr, pos, delta) => {
      const node = tr.doc.nodeAt(pos);

      if (node) {
        const nextLevel = (node.attrs.indent || 0) + delta;
        const { minLevel, maxLevel } = this.options;
        const indent =
          nextLevel < minLevel
            ? minLevel
            : nextLevel > maxLevel
              ? maxLevel
              : nextLevel;

        if (indent !== node.attrs.indent) {
          const { indent: oldIndent, ...currentAttrs } = node.attrs;
          const nodeAttrs =
            indent > minLevel ? { ...currentAttrs, indent } : currentAttrs;
          return tr.setNodeMarkup(pos, node.type, nodeAttrs, node.marks);
        }
      }
      return tr;
    };

    const updateIndentLevel = (tr, delta) => {
      const { doc, selection } = tr;

      if (
        doc &&
        selection &&
        (selection instanceof TextSelection ||
          selection instanceof AllSelection)
      ) {
        const { from, to } = selection;
        doc.nodesBetween(from, to, (node, pos) => {
          if (this.options.types.includes(node.type.name)) {
            tr = setNodeIndentMarkup(tr, pos, delta);
            return false;
          }

          return true;
        });
      }

      return tr;
    };

    const applyIndent =
      (direction) =>
      () =>
      ({ tr, state, dispatch }) => {
        const { doc } = state;
        const { selection } = state;
        tr = tr.setSelection(selection);
        tr = updateIndentLevel(tr, direction);
        if (direction === 1) {
          globalIndent = globalIndent + 7;
          doc.nodesBetween(selection.from, selection.to, (node, pos) => {
            const node2 = tr.doc.nodeAt(pos);
            if (this.options.types.includes(node.type.name)) {
              node2.attrs.indent = globalIndent;
            }
          });
        } else if (direction === -1) {
          globalIndent = globalIndent - 7;
          doc.nodesBetween(selection.from, selection.to, (node, pos) => {
            const node2 = tr.doc.nodeAt(pos);
            if (this.options.types.includes(node.type.name)) {
              node2.attrs.indent = globalIndent;
            }
          });
        }

        if (tr.docChanged) {
          dispatch && dispatch(tr);
          return true;
        }

        return false;
      };

    return {
      indent: applyIndent(1),
      outdent: applyIndent(-1),
    };
  },

  addKeyboardShortcuts() {
    return {
      Tab: () => {
        return this.editor.commands.indent();
      },
      "Shift-Tab": () => {
        return this.editor.commands.outdent();
      },
    };
  },
});
