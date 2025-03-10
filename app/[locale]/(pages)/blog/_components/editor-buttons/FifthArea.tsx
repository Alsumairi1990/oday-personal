'use client'
import { Editor } from "@tiptap/react";
import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaSquareXTwitter, FaXTwitter } from "react-icons/fa6";
import { IoLogoTiktok, IoLogoYoutube } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { MdBrokenImage } from "react-icons/md";
import { PiFacebookLogoBold, PiImagesSquareDuotone, PiInstagramLogoFill } from "react-icons/pi";
import { RiImageEditFill } from "react-icons/ri";
import { SiYoutubestudio } from "react-icons/si";

interface Props {
    editor : Editor
}
const FifthArea = ({editor}: Props) => {
    const [imageModelVisible, setImageModelVisible] = useState(false);
    const [imageOptionsVisible, setImageOptionsVisible] = useState(false);
    const [imageWidthVisible, setImageWidthVisible] = useState(false);
    const [imageWidth, setImageWidth] = useState<number | null>(null);
    const [height, setHeight] = useState<string>("400");
    const [width, setWidth] = useState<string>("640");
    
    
      const toggleImageWidth = () => {
        setImageWidthVisible(!imageWidthVisible);
      };
      const toggleImageOptions = () => {
        setImageOptionsVisible(!imageOptionsVisible);
      };
      const toggleImageModelVisible = () => {
        setImageModelVisible(!imageModelVisible);
      };
      const [imageRadiusVisible, setImageRadiusVisible] = useState(false);
        const toggleImageRadius = () => {
          setImageRadiusVisible(!imageRadiusVisible);
        };
      const [youtubeVisible, setYoutubeVisible] = useState(false);
       const toggleYoutube = () => {
         setYoutubeVisible(!youtubeVisible);
       };
       const [xMenu, setXMenu] = useState(false);
         const toggleXMenu = () => {
           setXMenu(!xMenu);
         };
      const handleSetWidth = (width: number) => {
        setImageWidth(width); // Update state with new width
        resizeImage(width); // Call function to resize image
      };
      const resizeImage = (width: number) => {
        const { state, view, schema } = editor!;
        const { from } = state.selection;
    
        // Find the image node in the current selection
        const imageNode = state.doc.nodeAt(from);
    
        if (imageNode && imageNode.type === schema.nodes.image) {
          const transaction = state.tr.setNodeMarkup(from, null, {
            ...imageNode.attrs,
            width: `${width}%`, // Set new width percentage
          });
          view.dispatch(transaction);
        }
      };
      const handleAlign = (align: string) => {
        const { state, view, schema } = editor!;
        const { from, to } = state.selection;
    
        // Find the image node in the current selection
        const imageNode = state.doc.nodeAt(from);
    
        if (imageNode && imageNode.type === schema.nodes.image) {
          const transaction = state.tr.setNodeMarkup(from, null, {
            ...imageNode.attrs,
            align,
          });
          view.dispatch(transaction);
        }
      };
      const handleSetBorderRadius = (borderRadius: string) => {
        const { state, view, schema } = editor!;
        const { from } = state.selection;
    
        const imageNode = state.doc.nodeAt(from);
        if (imageNode && imageNode.type === schema.nodes.image) {
          const transaction = state.tr.setNodeMarkup(from, null, {
            ...imageNode.attrs,
            borderRadius,
          });
          view.dispatch(transaction);
        }
      };

      const addYoutubeVideo = () => {
        const url: any = prompt("Enter YouTube URL");
    
        if (url) {
          editor.commands.setYoutubeVideo({
            src: url,
            width: Math.max(320, parseInt(width, 10)) || 640,
            height: Math.max(180, parseInt(height, 10)) || 480,
          });
        }
      };
      const insertTweeterEmbed = () => {
        const embedCode = `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">BREAKING:<br><br>Morocco granted permission for an Israeli warship to dock after Spain refused. <a href="https://t.co/m8dCldb6A5">pic.twitter.com/m8dCldb6A5</a></p>&mdash; Globe Eye News (@GlobeEyeNews) <a href="https://twitter.com/GlobeEyeNews/status/1806928208509464915?ref_src=twsrc%5Etfw">June 29, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
        editor.chain().focus().setTweeterEmbed(embedCode).run();
      };
    
      const insertFacebookEmbed = () => {
        const embedCode = `
        <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02cYcYzohPUoGzt3putU7rWhPEDcjjTJYhG6a7dvtb8crRNcCL72FYw2xJsRCGhfGel%26id%3D100012157083018&show_text=true&width=500" width="500" height="155" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        `;
        editor.chain().focus().setFacebookEmbed(embedCode).run();
      };
      const insertInstagramEmbed = () => {
        const embedCode = `
         <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C8zs9EdxmVP/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/C8zs9EdxmVP/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/C8zs9EdxmVP/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by قناة الجزيرة مباشر (@aljazeeramubasher)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>
        `;
        editor.chain().focus().setInstagramEmbed(embedCode).run();
      };
      const insertTikTokEmbed = () => {
        const embedCode = `
        <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@vantoan___/video/7369984110682508576" data-video-id="7369984110682508576" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@vantoan___" href="https://www.tiktok.com/@vantoan___?refer=embed">@vantoan___</a> I didn’t expect all these people 🤯😍 I met @zoeclauzure the winner of Junior Eurovision again but this time she decided to surprise me with a choir!!  <a title="piano" target="_blank" href="https://www.tiktok.com/tag/piano?refer=embed">#piano</a> <a title="pianocover" target="_blank" href="https://www.tiktok.com/tag/pianocover?refer=embed">#pianocover</a> <a title="sing" target="_blank" href="https://www.tiktok.com/tag/sing?refer=embed">#sing</a> <a title="taylorswift" target="_blank" href="https://www.tiktok.com/tag/taylorswift?refer=embed">#taylorswift</a> <a title="choir" target="_blank" href="https://www.tiktok.com/tag/choir?refer=embed">#choir</a> <a title="prank" target="_blank" href="https://www.tiktok.com/tag/prank?refer=embed">#prank</a> <a target="_blank" title="♬ original sound - Van" href="https://www.tiktok.com/music/original-sound-7369984160565447457?refer=embed">♬ original sound - Van</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
        `;
        editor.chain().focus().setTikTokEmbed(embedCode).run();
      };
    
    
    return (
        <>

                {/* Start of  fifth - 5   Area */}
                <button
                    type="button"
                    onClick={toggleImageModelVisible}
                    className="flex-15 px-1 items-center flex"
                >
                    <span className="flex pt-0.5">
                    {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                    <LuImagePlus className="text-xl text-gray-600" />
                    </span>
                </button>

                <div className="relative flex edit-btn flex-col flex-20 items-center">
                    <button
                    type="button"
                    className="text-md text-gray-600  items-center flex  rounded"
                    onClick={toggleImageOptions}
                    >
                    <span className=" flex pt-0.5">
                        <RiImageEditFill className="text-xl text-gray-600" />
                    </span>
                    <FaCaretDown className="text-base pt-1 text-gray-500" />
                    </button>
                    {imageOptionsVisible && (
                    <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                        <div
                        className="pl-1 py-2 flex flex-col w-32 gap-y-1 items-start rounded"
                        style={{
                            boxShadow:
                            "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                        }}
                        >
                        <button
                            className="text-sm py-1 text-gray-600 hover:bg-gray-200 px-2 rounded"
                            onClick={() => handleAlign("left")}
                        >
                            Align Left
                        </button>
                        <button
                            onClick={() => handleAlign("center")}
                            className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                        >
                            Align center
                        </button>
                        <button
                            onClick={() => handleAlign("right")}
                            className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                        >
                            Aign Right
                        </button>
                        </div>
                    </div>
                    )}
                </div>

                <div className="relative flex edit-btn flex-col flex-20 items-center">
                    <button
                    type="button"
                    className="text-md text-gray-600  items-center flex  rounded"
                    onClick={toggleImageWidth}
                    >
                    <span className=" flex pt-0.5">
                        <PiImagesSquareDuotone className="text-xl text-gray-600" />
                    </span>
                    <FaCaretDown className="text-base pt-1 text-gray-500" />
                    </button>
                    {imageWidthVisible && (
                    <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                        <div
                        className="pl-1 py-2 flex flex-col w-36 gap-y-1 items-start rounded"
                        style={{
                            boxShadow:
                            "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                        }}
                        >
                        <label className="">
                            Width:
                            <input
                            type="range"
                            min="10"
                            max="100"
                            onChange={(e) =>
                                handleSetWidth(parseInt(e.target.value))
                            }
                            />
                        </label>
                        </div>
                    </div>
                    )}
                </div>

                <div className="relative flex edit-btn flex-col flex-20 items-center">
                    <button
                    type="button"
                    className="text-md text-gray-600  items-center flex  rounded"
                    onClick={toggleImageRadius}
                    >
                    <span className=" flex pt-0.5">
                        <MdBrokenImage className="text-xl text-gray-600" />
                    </span>
                    <FaCaretDown className="text-base pt-1 text-gray-500" />
                    </button>
                    {imageRadiusVisible && (
                    <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                        <div
                        className="pl-1 py-2 flex flex-col w-36 gap-y-1 items-start rounded"
                        style={{
                            boxShadow:
                            "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                        }}
                        >
                        <label>
                            Border Radius:
                            <input
                            type="text"
                            placeholder="e.g., 10px"
                            className="w-[90%]"
                            onBlur={(e) => handleSetBorderRadius(e.target.value)}
                            />
                        </label>
                        </div>
                    </div>
                    )}
                </div>

                <button
                    type="button"
                //   onClick={toggleTOC}
                    // onClick={() => setHeadings([...headings, "New Heading"])}
                    className="flex-15 px-1 items-center flex"
                >
                    <span className="flex pt-0.5">
                    <svg
                        className="ck ck-icon ck-reset_all-excluded w-5 h-5 fill-gray-600 ck-icon_inherit-color ck-button__icon"
                        viewBox="0 0 20 20"
                    >
                        <path d="M3 19a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8.022a6.47 6.47 0 0 0-1.5-.709V2a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h6.313c.173.534.412 1.037.709 1.5H3Z"></path>
                        <path d="M9.174 14a6.489 6.489 0 0 0-.155 1H6v-1h3.174Z"></path>
                        <path d="M10.022 12c-.202.316-.378.65-.524 1H4v-1h6.022Z"></path>
                        <path d="M12.034 10c-.448.283-.86.62-1.224 1H6v-1h6.034Z"></path>
                        <path d="M12 4v1H4V4h8Z"></path>
                        <path d="M14 7V6H6v1h8Z"></path>
                        <path d="M15 9V8H7v1h8Z"></path>
                        <path
                        clip-rule="evenodd"
                        d="M20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM15.5 13a.5.5 0 0 0-.5.5V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5a.5.5 0 0 0-.5-.5Z"
                        ></path>
                    </svg>
                    </span>
                </button>

                <button
                    type="button"
                    onClick={addYoutubeVideo}
                    className="flex-15 px-1 items-center flex"
                >
                    <span className="flex pt-0.5">
                    {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                    <IoLogoYoutube className="text-xl text-gray-600" />
                    </span>
                </button>

                <div className="relative flex edit-btn flex-col flex-20 items-center">
                    <button
                    type="button"
                    className="text-md text-gray-600  items-center flex  rounded"
                    onClick={toggleYoutube}
                    >
                    <span className=" flex pt-0.5">
                        <SiYoutubestudio className="text-lg text-gray-600" />
                    </span>
                    <FaCaretDown className="text-base pt-1 text-gray-500" />
                    </button>
                    {youtubeVisible && (
                    <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                        <div
                        className="pl-1 py-2 flex flex-col w-40 gap-y-1 items-start rounded"
                        style={{
                            boxShadow:
                            "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                        }}
                        >
                        <div className="p-2 w-full">
                            <label className="inline-block ">Video Size</label>

                            <div className="flex gap-x-2 border rounded-md border-gray-200 p-1 w-full">
                            <input
                                id="width"
                                type="number"
                                className="flex-48 border-r border-r-gray-200"
                                min="320"
                                max="1024"
                                placeholder="width"
                                value={width}
                                onChange={(event) => setWidth(event.target.value)}
                            />
                            <input
                                id="height"
                                className="flex-48"
                                type="number"
                                min="180"
                                max="720"
                                placeholder="height"
                                value={height}
                                onChange={(event) => setHeight(event.target.value)}
                            />
                            </div>
                        </div>
                        </div>
                    </div>
                    )}
                </div>

                <button
                    type="button"
                    onClick={insertTweeterEmbed}
                    className="flex-15 px-1 items-center flex"
                >
                    <span className="flex pt-0.5">
                    {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                    <FaXTwitter className="text-lg text-gray-600" />
                    </span>
                </button>

                <div className="relative flex edit-btn flex-col flex-20 items-center">
                    <button
                    type="button"
                    className="text-md text-gray-600  items-center flex  rounded"
                    onClick={toggleXMenu}
                    >
                    <span className=" flex pt-0.5">
                        <FaSquareXTwitter className="text-lg text-gray-600" />
                    </span>
                    <FaCaretDown className="text-base pt-1 text-gray-500" />
                    </button>
                    {xMenu && (
                    <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                        <div
                        className="pl-1 py-2 flex flex-col w-40 gap-y-1 items-start rounded"
                        style={{
                            boxShadow:
                            "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                        }}
                        >
                        <div className="p-2 w-full">
                            <button
                            onClick={() =>
                                editor
                                .chain()
                                .focus()
                                .setTweetAlignment("center")
                                .run()
                            }
                            className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                            >
                            Aign Center
                            </button>
                        </div>
                        </div>
                    </div>
                    )}
                </div>
                <button
                    type="button"
                    onClick={insertFacebookEmbed}
                    className="flex-15 px-1 items-center flex"
                >
                    <span className="flex pt-0.5">
                    {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                    <PiFacebookLogoBold className="text-lg text-gray-600" />
                    </span>
                </button>

                <button
                    type="button"
                    onClick={insertInstagramEmbed}
                    className="flex-15 px-1 items-center flex"
                >
                    <span className="flex pt-0.5">
                    {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                    <PiInstagramLogoFill className="text-xl text-gray-600" />
                    </span>
                </button>
                <button
                    type="button"
                    onClick={insertTikTokEmbed}
                    className="flex-15 px-1 items-center flex"
                >
                    <span className="flex pt-0.5">
                    {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                    <IoLogoTiktok className="text-xl text-gray-600" />
                    </span>
                </button>
               
        </>
    )
}
export default FifthArea