// import { Node, mergeAttributes } from "@tiptap/core";

// const CustomImage = Node.create({
//   name: "image",

//   addOptions() {
//     return {
//       HTMLAttributes: {},
//     };
//   },

//   addAttributes() {
//     return {
//       src: {
//         default: null,
//       },
//       alt: {
//         default: null,
//       },
//       title: {
//         default: null,
//       },
//       width: {
//         default: "auto",
//       },
//       height: {
//         default: "auto",
//       },
//       align: {
//         default: "center",
//       },
//     };
//   },

//   parseHTML() {
//     return [
//       {
//         tag: "img[src]",
//       },
//     ];
//   },

//   renderHTML({ HTMLAttributes }) {
//     return [
//       "img",
//       mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
//     ];
//   },

//   addNodeView() {
//     return ({ node, getPos, editor }) => {
//       const img = document.createElement("img");
//       img.src = node.attrs.src;
//       img.alt = node.attrs.alt;
//       img.title = node.attrs.title;
//       img.style.width = node.attrs.width;
//       img.style.height = node.attrs.height;
//       img.style.float = node.attrs.align;

//       img.addEventListener("click", () => {
//         const { state, dispatch } = editor.view;
//         const tr = state.tr.setSelection(
//           NodeSelection.create(state.doc, getPos()),
//         );
//         dispatch(tr);
//       });

//       return {
//         dom: img,
//       };
//     };
//   },

//   addCommands() {
//     return {
//       setImage:
//         (options) =>
//         ({ commands }) => {
//           return commands.insertContent({
//             type: this.name,
//             attrs: options,
//           });
//         },
//       updateImage:
//         (options) =>
//         ({ commands }) => {
//           return commands.updateAttributes(this.name, options);
//         },
//     };
//   },
// });

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
      src: { default: null },
      alt: { default: null },
      title: { default: null },
      width: { default: "auto" },
      height: { default: "auto" },
      align: { default: "center" },
      borderRadius: { default: "5px" }, // ✅ Ensure borderRadius is an attribute
    };
  },

 parseHTML() {
  return [
    {
      tag: "img",
      getAttrs: (element) => {
        console.log("parseHTML called - Element:", element); // Debugging
        console.log("Parsed borderRadius:", element.style.borderRadius); // Debugging
        return {
          src: element.getAttribute("src"),
          alt: element.getAttribute("alt"),
          title: element.getAttribute("title"),
          width: element.style.width || "auto",
          height: element.style.height || "auto",
          align: element.style.float || "center",
          borderRadius: element.style.borderRadius || "0px", // ✅ Parse borderRadius
        };
      },
    },
  ];
},

  renderHTML({ HTMLAttributes }) {
  console.log("renderHTML called - HTMLAttributes:", HTMLAttributes); // Debugging
  console.log("Rendered borderRadius:", HTMLAttributes.borderRadius); // Debugging
  return [
    "img",
    mergeAttributes(this.options.HTMLAttributes, HTMLAttributes, {
      style: `border-radius: ${HTMLAttributes.borderRadius || "0px"};`, // ✅ Apply borderRadius
    }),
  ];
},

 addNodeView() {
  return ({ node, getPos, editor }) => {
    console.log("addNodeView called - Node attributes:", node.attrs); // Debugging
    const img = document.createElement("img");
    img.src = node.attrs.src;
    img.alt = node.attrs.alt;
    img.title = node.attrs.title;
    img.style.width = node.attrs.width;
    img.style.height = node.attrs.height;
    img.style.float = node.attrs.align;
    img.style.borderRadius = node.attrs.borderRadius; // ✅ Apply borderRadius

    console.log("NodeView borderRadius:", node.attrs.borderRadius); // Debugging

    img.addEventListener("click", () => {
      const { state, dispatch } = editor.view;
      const tr = state.tr.setSelection(
        NodeSelection.create(state.doc, getPos())
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


