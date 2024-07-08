import { Node, mergeAttributes } from "@tiptap/core";

const TOCNode = Node.create({
  name: "toc",
  content: "inline*",
  group: "block",
  defining: true,
  draggable: false,

  addAttributes() {
    return {
      title: {
        default: "Table of Contents",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div.toc",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    const tocContent = TOCNode.generateTOCContent();
    const tocElement = TOCNode.createDOMElementFromHTMLString(tocContent);
    return [
      "div",
      mergeAttributes(HTMLAttributes),
      ...Array.from(tocElement.childNodes),
    ];
  },
});

TOCNode.generateTOCContent = () => {
  const headings = window.headings || [];
  if (headings.length > 0) {
    const tocList = headings
      .map(
        (entry) =>
          `<li class="list-none my-1.5 cursor-pointer"><span data-target-id="${entry.id}" onclick="scrollToHeading('${entry.id}');">${entry.title}</span></li>`,
      )
      .join("");

    return `
      <div class="toc">
        <div class="border bg-gray-200 rounded-md p-3">
          <p class="text-base font-bold">Table of Contents</p>
          <ul class="list-none mt-2">${tocList}</ul>
        </div>
      </div>`;
  } else {
    return `
      <div class="toc">
        <p>Table of Contents</p>
        <p>No headings found in the article.</p>
      </div>`;
  }
};

window.scrollToHeading = function (id) {
  if (id) {
    const targetHeading = document.getElementById(id);
    if (targetHeading) {
      targetHeading.scrollIntoView({ behavior: "smooth" });
    }
  }
};

TOCNode.createDOMElementFromHTMLString = (htmlString) => {
  const template = document.createElement("template");
  template.innerHTML = htmlString.trim();
  return template.content.firstChild;
};

export default TOCNode;
