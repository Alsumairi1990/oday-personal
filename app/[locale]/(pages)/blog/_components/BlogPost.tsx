// import { useEffect, useRef } from "react";
// declare global {
//   interface Window {
//     instgrm?: {
//       Embeds: {
//         process: () => void;
//       };
//     };
//   }
// }
// const BlogPost = ({ content }: { content: string }) => {
//   const blogRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     const hasTwitterEmbed = content.includes(`data-tweet="true"`);
//     const loadInstagramScript = () => {
//       if (window.instgrm?.Embeds) {
//         window.instgrm.Embeds.process();
//       } else {
//         const script = document.createElement("script");
//         script.src = "https://www.instagram.com/embed.js";
//         script.async = true;
//         script.onload = () => window.instgrm?.Embeds?.process();
//         document.body.appendChild(script);
//       }
//     };

//     setTimeout(loadInstagramScript, 500);
//     if (hasTwitterEmbed) {
//       const loadTwitterWidgets = () => {
//         if (window.twttr && window.twttr.widgets) {
//           window.twttr.widgets.load();
//         } else {
//           const script = document.createElement("script");
//           script.src = "https://platform.twitter.com/widgets.js";
//           script.async = true;
//           script.charset = "utf-8";
//           script.onload = () => window.twttr?.widgets?.load();
//           document.body.appendChild(script);
//         }
//       };

//       loadTwitterWidgets();

//       // MutationObserver to track changes and reapply tweets
//       const observer = new MutationObserver(() => {
//         if (window.twttr && window.twttr.widgets) {
//           window.twttr.widgets.load();
//         }
//       });

//       if (blogRef.current) {
//         observer.observe(blogRef.current, { childList: true, subtree: true });
//       }

//       return () => observer.disconnect(); // Cleanup observer
//     }

    
//   }, [content]);

//   return (
//     <div
//       ref={blogRef}
//       dangerouslySetInnerHTML={{
//         __html: content.replace(
//           /<div data-tweet="true".*?embedcode="(.*?)".*?>.*?<\/div>/g,
//           (_match, embedCode) => embedCode.replace(/&quot;/g, '"') // Decode escaped quotes
//         ),
//       }}
//     />
//   );
// };

// export default BlogPost;








// import { useEffect, useRef } from "react";

// declare global {
//   interface Window {
//     instgrm?: {
//       Embeds: {
//         process: () => void;
//       };
//     };
//   }
// }

// const decodeHtml = (html: string) => {
//   const txt = document.createElement("textarea");
//   txt.innerHTML = html;
//   return txt.value;
// };

// const BlogPost = ({ content }: { content: string }) => {
//   const blogRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!blogRef.current) return;

//     const hasInstagramEmbed = content.includes(`data-instagram="true"`);

//     // Load Instagram Embed Script
//     const loadInstagramScript = () => {
//       if (window.instgrm?.Embeds) {
//         console.log("Instagram script already loaded, processing embeds...");
//         window.instgrm.Embeds.process();
//       } else {
//         const existingScript = document.querySelector(
//           'script[src="https://www.instagram.com/embed.js"]'
//         );
//         if (!existingScript) {
//           console.log("Loading Instagram embed script...");
//           const script = document.createElement("script");
//           script.src = "https://www.instagram.com/embed.js";
//           script.async = true;
//           script.onload = () => {
//             console.log("Instagram script loaded, processing embeds...");
//             window.instgrm?.Embeds?.process();
//           };
//           script.onerror = () => {
//             console.error("Failed to load Instagram embed script.");
//           };
//           document.body.appendChild(script);
//         } else {
//           console.log("Instagram script already exists, waiting for load...");
//           existingScript.addEventListener("load", () => {
//             console.log("Existing Instagram script loaded, processing embeds...");
//             window.instgrm?.Embeds?.process();
//           });
//         }
//       }
//     };

//     // Clear the blogRef before inserting new content
//     blogRef.current.innerHTML = "";

//     // Parse the content and insert all elements
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(content, "text/html");

//     // Iterate through all child nodes of the parsed content
//     doc.body.childNodes.forEach((node) => {
//       if (node.nodeType === Node.ELEMENT_NODE) {
//         const element = node as HTMLElement;

//         // Check if the element is an Instagram embed
//         if (
//           element.tagName.toLowerCase() === "div" &&
//           element.getAttribute("data-instagram") === "true"
//         ) {
//           const embedCode = element.getAttribute("embedcode");
//           if (embedCode) {
//             const decodedEmbedCode = decodeHtml(embedCode);
//             const tempDiv = document.createElement("div");
//             tempDiv.innerHTML = decodedEmbedCode;
//             blogRef.current?.appendChild(tempDiv);
//           }
//         } else {
//           // Insert other elements as-is
//           blogRef.current?.appendChild(element.cloneNode(true));
//         }
//       } else if (node.nodeType === Node.TEXT_NODE) {
//         // Insert text nodes as-is
//         blogRef.current?.appendChild(node.cloneNode(true));
//       }
//     });

//     // Ensure Instagram re-renders properly
//     if (hasInstagramEmbed) {
//       console.log("Instagram embed detected, loading script...");
//       loadInstagramScript();
//     }
//   }, [content]);

//   return <div ref={blogRef} />;
// };

// export default BlogPost;




// both x and inst work
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

const decodeHtml = (html: string) => {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
};

const BlogPost = ({ content }: { content: string }) => {
  const blogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!blogRef.current) return;

    // Clear previous content
    blogRef.current.innerHTML = "";

    // Parse HTML content
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");

    let hasInstagramEmbed = false;
    let hasTwitterEmbed = false;

    doc.body.childNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;

        // Handle Instagram Embed
        if (element.getAttribute("data-instagram") === "true") {
          hasInstagramEmbed = true;
          const embedCode = element.getAttribute("embedcode");
          if (embedCode) {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = decodeHtml(embedCode);
            blogRef.current?.appendChild(tempDiv);
          }
        }

        // Handle Twitter Embed (Force Reprocessing)
        else if (element.getAttribute("data-tweet") === "true") {
          hasTwitterEmbed = true;
          const embedCode = element.getAttribute("embedcode");
          if (embedCode) {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = decodeHtml(embedCode);
            tempDiv.classList.add("twitter-embed");
            blogRef.current?.appendChild(tempDiv);
          }
        } else {
          blogRef.current?.appendChild(element.cloneNode(true));
        }
      }
    });

    // Load Instagram Embed Script
    if (hasInstagramEmbed) {
      const loadInstagramScript = () => {
        if (window.instgrm?.Embeds) {
          window.instgrm.Embeds.process();
        } else {
          const script = document.createElement("script");
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          script.onload = () => window.instgrm?.Embeds?.process();
          document.body.appendChild(script);
        }
      };
      loadInstagramScript();
    }

    // Load Twitter Embed Script (Force Reload)
    if (hasTwitterEmbed) {
      const loadTwitterScript = () => {
        // Remove old Twitter script
        document
          .querySelectorAll('script[src="https://platform.twitter.com/widgets.js"]')
          .forEach((s) => s.remove());

        // Add new Twitter script
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.onload = () => {
          setTimeout(() => {
            // if (window.twttr?.widgets) {
            //   window.twttr.widgets.load(blogRef.current);
            // }
            if (blogRef.current && window.twttr?.widgets) {
              window.twttr.widgets.load(blogRef.current);
            }
          }, 500);
        };
        document.body.appendChild(script);
      };

      loadTwitterScript();
    }
  }, [content]);

  return <div ref={blogRef} />;
};

export default BlogPost;
