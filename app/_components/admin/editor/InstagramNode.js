// import { Node } from "@tiptap/core";

// const InstagramNode = Node.create({
//   name: "instagramNode",
//   group: "block",
//   atom: true,
//   addAttributes() {
//     return {
//       embedCode: {
//         default: null,
//       },
//       alignment: {
//         default: "left",
//       },
//     };
//   },

//   parseHTML() {
//     return [
//       {
//         tag: "div[data-instagram]",
//       },
//     ];
//   },

//   renderHTML({ node, HTMLAttributes }) {
//     const alignClass = `align-${node.attrs.alignment}`;
//     return [
//       "div",
//       { "data-instagram": true, class: alignClass, ...HTMLAttributes },
//       0,
//     ];
//   },

//   addNodeView() {
//     return ({ node }) => {
//       const dom = document.createElement("div");
//       dom.setAttribute("data-instagram", "true");
//       dom.innerHTML = node.attrs.embedCode;
//       dom.className = `align-${node.attrs.alignment}`;

//       const script = document.createElement("script");
//       script.setAttribute("src", "https://www.instagram.com/embed.js");
//       script.setAttribute("async", "true");
//       dom.appendChild(script);

//       return {
//         dom,
//       };
//     };
//   },

//   addCommands() {
//     return {
//       setInstagramEmbed:
//         (embedCode) =>
//         ({ commands }) => {
//           return commands.insertContent({
//             type: "instagramNode",
//             attrs: { embedCode, alignment: "left" },
//           });
//         },
//       setInstagramAlignment:
//         (alignment) =>
//         ({ commands, state, chain }) => {
//           const { selection } = state;
//           const { $from, $to } = selection;

//           state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
//             if (node.type.name === "instagramNode") {
//               chain()
//                 .focus()
//                 .updateAttributes("instagramNode", { alignment })
//                 .run();
//             }
//           });

//           return true;
//         },
//     };
//   },
// });

// export default InstagramNode;


import { Node } from "@tiptap/core";

const InstagramNode = Node.create({
  name: "instagramNode",
  group: "block",
  atom: true, 

  addAttributes() {
    return {
      embedCode: { default: null },
      alignment: { default: "left" },
    };
  },

  parseHTML() {
    return [{ tag: "div[data-instagram]" }];
  },

  renderHTML({ node, HTMLAttributes }) {
    return [
      "div",
      { "data-instagram": "true", class: `align-${node.attrs.alignment}`, ...HTMLAttributes }
    ]; // ❌ Removed `0` (content hole issue)
  },

  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement("div");
      dom.setAttribute("data-instagram", "true");
      dom.innerHTML = node.attrs.embedCode;
      dom.className = `align-${node.attrs.alignment}`;

      // Function to reload Instagram embed script
      const loadInstagramScript = () => {
        if (window.instgrm && window.instgrm.Embeds) {
          window.instgrm.Embeds.process();
        } else {
          const script = document.createElement("script");
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          script.onload = () => window.instgrm?.Embeds?.process();
          document.body.appendChild(script);
        }
      };

      setTimeout(loadInstagramScript, 500);
      return { dom };
    };
  },

  addCommands() {
    return {
      setInstagramEmbed:
        (embedCode) =>
        ({ commands }) => {
          return commands.insertContent({
            type: "instagramNode",
            attrs: { embedCode, alignment: "left" },
          });
        },
      setInstagramAlignment:
        (alignment) =>
        ({ commands, state, chain }) => {
          const { selection } = state;
          const { $from, $to } = selection;

          state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
            if (node.type.name === "instagramNode") {
              chain()
                .focus()
                .updateAttributes("instagramNode", { alignment })
                .run();
            }
          });

          return true;
        },
    };
  },
});

export default InstagramNode;
