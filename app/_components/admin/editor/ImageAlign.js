import { Image } from "@tiptap/extension-image";
import { mergeAttributes } from "@tiptap/core";

const ImageAlign = Image.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      HTMLAttributes: {},
      sizes: ["inline", "block", "left", "right"],
    };
  },

  addAttributes() {
    return {
      ...this.parent?.(),
      align: {
        default: "center",
        renderHTML: (attributes) => {
          return {
            class: `align-${attributes.align}`,
          };
        },
      },
      width: {
        default: "auto",
        renderHTML: (attributes) => {
          return {
            style: `width: ${attributes.width};`,
          };
        },
      },
      borderRadius: {
        default: "0",
        renderHTML: (attributes) => {
          return {
            style: `border-radius: ${attributes.borderRadius};`,
          };
        },
      },
      selected: {
        default: false,
        renderHTML: (attributes) => {
          return {
            class: attributes.selected ? "selected" : "",
          };
        },
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "img",
      mergeAttributes(this.options.HTMLAttributes, HTMLAttributes),
    ];
    // return [
    //   "figure",
    //   { style: HTMLAttributes.style },
    //   ["img", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)],
    // ];
  },
});

export default ImageAlign;
