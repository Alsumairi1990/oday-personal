'use client'
import { useEffect, useState } from "react";
import EditBody from "../_components/EditBody";

const EditorPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch("/api/front/blogs/content/nextjs-performance-features"); // Fetch saved content
        const data = await response.json();
        setContent(data.content);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    }

    fetchContent();
  }, []);

  return content !== "" ? "" : <p>Loading...</p>;
};

export default EditorPage;
