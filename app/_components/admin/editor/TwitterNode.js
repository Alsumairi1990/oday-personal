// import { Node } from "@tiptap/core";

// const TwitterNode = Node.create({
//   name: "tweeterNode",
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
//         tag: "div[data-tweet]",
//       },
//     ];
//   },

//   renderHTML({ node, HTMLAttributes }) {
//     const alignClass = `align-${node.attrs.alignment}`;
//     return [
//       "div",
//       { "data-tweet": true, class: alignClass, ...HTMLAttributes }
//     ]; 
//   },
//   addNodeView() {
//   return ({ node }) => {
//     const dom = document.createElement("div");
//     dom.setAttribute("data-tweet", "true");
//     dom.innerHTML = node.attrs.embedCode;
//     dom.className = `align-${node.attrs.alignment}`;

//     const runTwitterScript = () => {
//       if (window.twttr && window.twttr.widgets) {
//         window.twttr.widgets.load(dom);
//       } else {
//         const script = document.createElement("script");
//         script.setAttribute("src", "https://platform.twitter.com/widgets.js");
//         script.setAttribute("async", "true");
//         script.setAttribute("charset", "utf-8");
//         script.onload = () => window.twttr?.widgets?.load(dom);
//         document.body.appendChild(script);
//       }
//     };
//     setTimeout(runTwitterScript, 500);
//     return { dom };
//   };
// },

//   addCommands() {
//     return {
//       setTweeterEmbed:
//         (embedCode) =>
//         ({ commands }) => {
//           return commands.insertContent({
//             type: "tweeterNode",
//             attrs: { embedCode, alignment: "left" },
//           });
//         },
//       setTweetAlignment:
//         (alignment) =>
//         ({ commands, state, chain }) => {
//           const { selection } = state;
//           const { $from, $to } = selection;
//           state.doc.nodesBetween($from.pos, $to.pos, (node, pos) => {
//             if (node.type.name === "tweeterNode") {
//               chain()
//                 .focus()
//                 .updateAttributes("tweeterNode", { alignment })
//                 .run();
//             }
//           });

//           return true;
//         },
//     };
//   },
// });

// export default TwitterNode;

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
        default: "center",
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
    return [
      "div",
      {
        "data-tweet": true,
        class: `tweet-wrapper align-${node.attrs.alignment}`,
        ...HTMLAttributes,
      },
    ];
  },

  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement("div");
      dom.setAttribute("data-tweet", "true");
      dom.innerHTML = node.attrs.embedCode;
      dom.className = `tweet-wrapper align-${node.attrs.alignment}`;

      const runTwitterScript = () => {
        if (window.twttr && window.twttr.widgets) {
          window.twttr.widgets.load(dom);
        } else {
          const script = document.createElement("script");
          script.setAttribute("src", "https://platform.twitter.com/widgets.js");
          script.setAttribute("async", "true");
          script.setAttribute("charset", "utf-8");
          script.onload = () => window.twttr?.widgets?.load(dom);
          document.body.appendChild(script);
        }
      };

      setTimeout(runTwitterScript, 500);

      return { dom };
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

