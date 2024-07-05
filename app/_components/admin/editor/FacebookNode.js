import { Node } from "@tiptap/core";

const FacebookNode = Node.create({
  name: "facebookNode",

  group: "block",

  atom: true,

  addAttributes() {
    return {
      embedCode: {
        default: null,
      },
      alignment: {
        default: "left",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-facebook]",
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    const alignClass = `align-${node.attrs.alignment}`;
    return [
      "div",
      { "data-facebook": true, class: alignClass, ...HTMLAttributes },
      0,
    ];
  },

  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement("div");
      dom.setAttribute("data-facebook", "true");
      dom.innerHTML = node.attrs.embedCode;
      dom.className = `align-${node.attrs.alignment}`;

      // Ensure Facebook's SDK script runs
      const script = document.createElement("script");
      script.setAttribute(
        "src",
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2",
      );
      script.setAttribute("async", "true");
      dom.appendChild(script);

      return {
        dom,
      };
    };
  },

  addCommands() {
    return {
      setFacebookEmbed:
        (embedCode) =>
        ({ commands }) => {
          return commands.insertContent({
            type: "facebookNode",
            attrs: { embedCode, alignment: "left" },
          });
        },
      setFacebookAlignment:
        (alignment) =>
        ({ commands, state, chain }) => {
          const { selection } = state;
          const { $from, $to } = selection;

          state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
            if (node.type.name === "facebookNode") {
              chain()
                .focus()
                .updateAttributes("facebookNode", { alignment })
                .run();
            }
          });

          return true;
        },
    };
  },
});

export default FacebookNode;
