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
    };
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "figure",
      { style: HTMLAttributes.style },
      ["img", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)],
    ];
  },
});

export default ImageAlign;
