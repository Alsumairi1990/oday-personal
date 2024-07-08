// CustomHeading.js
import { Heading } from "@tiptap/extension-heading";

const CustomHeading = Heading.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      id: {
        default: null,
        parseHTML: (element) => element.getAttribute("id"),
        renderHTML: (attributes) => {
          const { level, id } = attributes;
          if (!id) {
            // Generate a new id based on the heading level
            attributes.id = `heading-${level}-${Math.floor(Math.random() * 1000000)}`;
          }
          return {
            id: attributes.id,
          };
        },
      },
    };
  },
});

export default CustomHeading;
