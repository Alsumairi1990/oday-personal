import { Node, mergeAttributes } from "@tiptap/core";

const CustomImage = Node.create({
  name: "image",

  addOptions() {
    return {
      HTMLAttributes: {},
    };
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      alt: {
        default: null,
      },
      title: {
        default: null,
      },
      width: {
        default: "auto",
      },
      height: {
        default: "auto",
      },
      align: {
        default: "center",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "img[src]",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
  },

  addNodeView() {
    return ({ node, getPos, editor }) => {
      const img = document.createElement("img");
      img.src = node.attrs.src;
      img.alt = node.attrs.alt;
      img.title = node.attrs.title;
      img.style.width = node.attrs.width;
      img.style.height = node.attrs.height;
      img.style.float = node.attrs.align;

      img.addEventListener("click", () => {
        const { state, dispatch } = editor.view;
        const tr = state.tr.setSelection(
          NodeSelection.create(state.doc, getPos()),
        );
        dispatch(tr);
      });

      return {
        dom: img,
      };
    };
  },

  addCommands() {
    return {
      setImage:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
      updateImage:
        (options) =>
        ({ commands }) => {
          return commands.updateAttributes(this.name, options);
        },
    };
  },
});

export default CustomImage;
