import { Node } from "@tiptap/core";

const TwitterNode = Node.create({
  name: "tweeterNode",

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
        tag: "div[data-tweet]",
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    const alignClass = `align-${node.attrs.alignment}`;
    return [
      "div",
      { "data-tweet": true, class: alignClass, ...HTMLAttributes },
      0,
    ];
  },

  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement("div");
      dom.setAttribute("data-tweet", "true");
      dom.innerHTML = node.attrs.embedCode;
      dom.className = `align-${node.attrs.alignment}`;

      // Ensure Twitter's widgets.js script runs
      const script = document.createElement("script");
      script.setAttribute("src", "https://platform.twitter.com/widgets.js");
      script.setAttribute("async", "true");
      script.setAttribute("charset", "utf-8");
      dom.appendChild(script);

      return {
        dom,
      };
    };
  },

  addCommands() {
    return {
      setTweeterEmbed:
        (embedCode) =>
        ({ commands }) => {
          return commands.insertContent({
            type: "tweeterNode",
            attrs: { embedCode, alignment: "left" },
          });
        },
      setTweetAlignment:
        (alignment) =>
        ({ commands, state, chain }) => {
          const { selection } = state;
          const { $from, $to } = selection;

          state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
            if (node.type.name === "tweeterNode") {
              chain()
                .focus()
                .updateAttributes("tweeterNode", { alignment })
                .run();
            }
          });

          return true;
        },
    };
  },
});

export default TwitterNode;
