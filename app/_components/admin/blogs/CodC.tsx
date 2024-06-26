import React from "react";
import { ReactSVG } from "react-svg";
import { common, createLowlight } from "lowlight";
import xml from "highlight.js/lib/languages/xml";
// const AddingBtn =(title:any,svgUrl:any)=> {

const CodC = () => {
  const lowlight = createLowlight();

  lowlight.register({ xml });

  // Note: `html` is an alias for `xml`.
  console.log(lowlight.highlight("html", "<em>Emphasis</em>"));

  return (
    <div
      className=" px-2 bg-white  border-b-2 border-b-red-700"
      style={{ boxShadow: "rgb(82 63 104 / 12%) 0px 0px 10px 0px" }}
    >
      <h1>eijfi-------------------------jr</h1>
    </div>
  );
};
export default CodC;
