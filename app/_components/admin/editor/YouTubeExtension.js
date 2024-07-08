// YouTubeAlign.js
import { Node } from "@tiptap/core";
import Youtube from "@tiptap/extension-youtube";
import { mergeAttributes } from "@tiptap/core";

const YouTubeExtension = Youtube.extend({
  name: "youtubeVideo",

  group: "block",

  atom: true,

  addOptions() {
    return {
      HTMLAttributes: {},
      sizes: ["left", "center", "right"],
    };
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      width: {
        default: "640px",
        renderHTML: (attributes) => ({
          style: `width: ${attributes.width};`,
        }),
      },
      height: {
        default: "480px",
        renderHTML: (attributes) => ({
          style: `height: ${attributes.height};`,
        }),
      },
      align: {
        default: "center",
        renderHTML: (attributes) => ({
          class: `align-${attributes.align}`,
        }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div",
        getAttrs: (dom) => {
          const iframe = dom.querySelector("iframe");
          return {
            src: iframe?.getAttribute("src"),
            width: iframe?.getAttribute("width"),
            height: iframe?.getAttribute("height"),
            align:
              dom
                .getAttribute("class")
                ?.replace("youtube-container ", "")
                .replace("align-", "") || "center",
          };
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      {
        class: `youtube-container ${HTMLAttributes.class}`,
        style: `width: ${HTMLAttributes.width}; height: ${HTMLAttributes.height};`,
      },
      ["iframe", mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)],
    ];
  },

  addCommands() {
    return {
      setYoutubeVideo:
        (options) =>
        ({ commands }) => {
          return commands.insertContent({
            type: this.name,
            attrs: options,
          });
        },
    };
  },
});

export default YouTubeExtension;
