// import { Extension } from '@tiptap/core';

// declare module '@tiptap/core' {
//   interface Commands<ReturnType> {
//     lineHeight: {
//       setLineHeight: (value: string) => ReturnType;
//     };
//   }
// }

// const LineHeight = Extension.create({
//   name: 'lineHeight',

//   addOptions() {
//     return {
//       types: ['paragraph', 'heading'], // Apply to paragraphs and headings
//     };
//   },

//   addCommands() {
//     return {
//       setLineHeight:
//         (value: string) =>
//         ({ commands }) => {
//           return commands.updateAttributes('paragraph', { style: `line-height: ${value};` });
//         },
//     };
//   },

//   addGlobalAttributes() {
//     return [
//       {
//         types: this.options.types,
//         attributes: {
//           style: {
//             default: null,
//             renderHTML: (attributes) => {
//               if (!attributes.style) return {};
//               return { style: attributes.style };
//             },
//             parseHTML: (element) => ({
//               style: element.style.lineHeight || null,
//             }),
//           },
//         },
//       },
//     ];
//   },
// });

// export default LineHeight;

import { Extension } from '@tiptap/core';

declare module '@tiptap/core' {
  interface Commands<ReturnType> {
    lineHeight: {
      setLineHeight: (value: string) => ReturnType;
    };
  }
}

const LineHeight = Extension.create({
  name: 'lineHeight',

  addOptions() {
    return {
      types: ['paragraph', 'heading'], // Apply to paragraphs and headings
    };
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          lineHeight: {
            default: '2', // Default line height
            parseHTML: (element) => element.style.lineHeight || '1.5',
            renderHTML: (attributes) => {
              return attributes.lineHeight ? { style: `line-height: ${attributes.lineHeight};` } : {};
            },
          },
        },
      },
    ];
  },

  addCommands() {
    return {
      setLineHeight:
        (value: string) =>
        ({ commands }) => {
          return commands.updateAttributes('paragraph', { lineHeight: value });
        },
    };
  },
});

export default LineHeight;

