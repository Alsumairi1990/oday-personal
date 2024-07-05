import { Node } from "@tiptap/core";

const TikTokNode = Node.create({
  name: "tiktokNode",

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
        tag: "div[data-tiktok]",
      },
    ];
  },

  renderHTML({ node, HTMLAttributes }) {
    const alignClass = `align-${node.attrs.alignment}`;
    return [
      "div",
      { "data-tiktok": true, class: alignClass, ...HTMLAttributes },
      0,
    ];
  },

  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement("div");
      dom.setAttribute("data-tiktok", "true");
      dom.innerHTML = node.attrs.embedCode;
      dom.className = `align-${node.attrs.alignment}`;

      // Ensure TikTok's embed script runs
      const script = document.createElement("script");
      script.setAttribute("src", "https://www.tiktok.com/embed.js");
      script.setAttribute("async", "true");
      dom.appendChild(script);

      return {
        dom,
      };
    };
  },

  addCommands() {
    return {
      setTikTokEmbed:
        (embedCode) =>
        ({ commands }) => {
          return commands.insertContent({
            type: "tiktokNode",
            attrs: { embedCode, alignment: "left" },
          });
        },
      setTikTokAlignment:
        (alignment) =>
        ({ commands, state, chain }) => {
          const { selection } = state;
          const { $from, $to } = selection;

          state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
            if (node.type.name === "tiktokNode") {
              chain()
                .focus()
                .updateAttributes("tiktokNode", { alignment })
                .run();
            }
          });

          return true;
        },
    };
  },
});

export default TikTokNode;
