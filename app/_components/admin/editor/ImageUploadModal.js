import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const ImageUploadModal = ({ onClose, onInsertImage }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [previewImage, setPreviewImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [imageName, setImageName] = useState("");
  const [imageSize, setImageSize] = useState(0);
  const [imageControl, setImageControl] = useState(false);
  const [imageHeight, setImageHeight] = useState("");
  const [imageWidth, setImageWidth] = useState("");

  const clearUpload = () => {
    onClose();
  };

  const showAdjust = () => {
    setImageControl(true);
  };

  const cancelImage = () => {
    setImageHeight("");
    setImageWidth("");
    setImageControl(false);
  };

  const adjustImage = () => {
    const img = new Image();
    img.src = previewImage;
    img.onload = () => {
      img.width = imageWidth;
      img.height = imageHeight;

      if (fileName && fileName.type) {
        const canvas = document.createElement("canvas");
        canvas.width = imageWidth;
        canvas.height = imageHeight;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, imageWidth, imageHeight);

        canvas.toBlob((blob) => {
          const adjustedFile = new File([blob], imageName, {
            type: fileName.type,
          });
          updateImage(adjustedFile);
        }, fileName.type);
      } else {
        console.error("File name or type is missing.");
      }
    };
  };

  const openFilePicker = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/jpeg, image/png";
    input.onchange = (event) => {
      const file = event.target.files[0];
      setFileName(file);
      if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
        setImageName(file.name);
        setImageSize((file.size / 1024).toFixed(2));
        setPreviewImage(URL.createObjectURL(file));
      }
    };
    input.click();
  };

  const insertImage = () => {
    onInsertImage(fileName);
  };

  const updateImage = (file) => {
    onInsertImage(file);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setFileName(file);
    if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="image-upload-modal flex justify-center items-center fixed top-0 left-0 w-full h-full bg-[#0000008c] p-3 z-[50]">
      <div
        className="p-2 rounded-md bg-white w-50"
        style={{ boxShadow: "rgb(51, 51, 51) 4px 4px 10px" }}
      >
        <div className="py-1 bg-[#138eb3] flex items-center">
          <div className="pl-2">
            <i className="fas fa-cloud-upload-alt mr-2 text-gray-100 text-xl"></i>
            <span className="text-white text-md">Image Upload Options</span>
          </div>
          <div className="ml-auto p-2">
            <span
              className="bg-white rounded h-6 w-6 items-center justify-center flex cursor-pointer"
              onClick={clearUpload}
            >
              <IoMdCloseCircle className="text-lg text-gray-800 " />
            </span>
          </div>
        </div>
        <div className="p-2 flex-justify-center">
          <p className="text-grey-600 font-bold my-2 text-lg text-center">
            Uploading Images panel
          </p>
        </div>
        <div className="p-2 flex gap-x-2">
          <button
            type="button"
            className="text-base px-2 py-1.5 bg-[#138eb3] border-x border-y border-x-[#138eb3] border-y-[#138eb3] text-white rounded-md"
          >
            Upload (Drag and Drop)
          </button>
          <button
            type="button"
            className="text-base px-2 py-1.5 border-x border-y border-x-[#138eb3] border-y-[#138eb3] text-grey-600 rounded-md"
          >
            URL
          </button>
        </div>
        <div
          className="drag-area border-x border-y h-52 p-3 overflow-y-auto border-x-gray-400 border-y-gray-400 rounded-lg flex justify-center"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {previewImage ? (
            <div className="image-preview flex flex-col items-center w-52 max-w-full rounded-md">
              <div className="relative w-52">
                <img src={previewImage} alt="Image Preview" />
                <div className="absolute bottom-0 left-0 w-full h-full pl-2 pb-2 flex flex-col justify-end bg-[#00000061]">
                  <span className="text-white text-sm">
                    Size: {imageSize} KB
                  </span>
                  <span className="text-white text-sm">Name: {imageName}</span>
                </div>
                {imageControl && (
                  <div className="fixed top-0 left-0 w-full h-full z-[88888] bg-[#00000061] flex justify-center items-center">
                    <div className="px-3 pb-3 bg-white border rounded-md">
                      <div className="py-2 border-b border-b-gray-300 flex items-center">
                        <i className="fas fa-tools mr-2 text-gray-500 text-base"></i>
                        <p className="mb-0 text-[#4b7b98] capitalized font-semibold text-md">
                          Update Image
                        </p>
                      </div>
                      <div className="p-2 mt-2">
                        <label className="mb-0 text-md inline-block w-14">
                          Width:
                        </label>
                        <input
                          type="number"
                          className="rounded-md border-x border-y border-x-gray-300 border-y-gray-300 pl-2.5 ml-1.5 py-0.5"
                          value={imageWidth}
                          onChange={(e) => setImageWidth(e.target.value)}
                        />
                      </div>
                      <div className="p-2">
                        <label className="mb-0 text-md inline-block w-14">
                          Height:
                        </label>
                        <input
                          type="number"
                          className="rounded-md border-x border-y border-x-gray-300 border-y-gray-300 pl-2.5 ml-1.5 py-0.5"
                          value={imageHeight}
                          onChange={(e) => setImageHeight(e.target.value)}
                        />
                      </div>
                      <div className="flex justify-center gap-x-3 border-t border-t-gray-300 mt-3 pt-3">
                        <button
                          type="button"
                          className={`py-0.5 rounded-lg shadow-lg w-28 text-white ${imageWidth > 0 && imageHeight > 0 && imageWidth !== "" && imageHeight !== "" ? "bg-blue-500" : "bg-gray-300"}`}
                          onClick={adjustImage}
                          disabled={
                            imageWidth === "" ||
                            imageHeight === "" ||
                            imageWidth === 0 ||
                            imageHeight === 0
                          }
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="text-base text-gray-800 bg-gray-300 rounded-md shadow-lg w-28 py-0.5"
                          onClick={cancelImage}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="mt-2 flex py-1 justify-center gap-x-2">
                <button
                  type="button"
                  className="text-sm font-semibold text-[#138eb3] px-1.5 py-1 border border-[#138eb3] rounded-md"
                  onClick={openFilePicker}
                >
                  Change
                </button>
                <button
                  type="button"
                  className="text-sm text-white bg-[#138eb3] border-[#138eb3] px-1.5 font-semibold py-1 rounded-md"
                  onClick={showAdjust}
                >
                  Edit Size
                </button>
              </div>
            </div>
          ) : (
            <div className="drop-here p-8 flex flex-col items-center">
              <i className="fas fa-cloud-upload-alt text-gray-300 text-5xl"></i>
              <div className="mt-2 flex flex-col items-center mb-2">
                <p className="mb-0">Drop image here</p>
                <p className="mb-0">Or</p>
              </div>
              <button
                type="button"
                className="text-md text-blue-600 border mt-0 px-2 py-1 rounded-md"
                onClick={openFilePicker}
              >
                Browse
              </button>
            </div>
          )}
        </div>
        <div className="p-2 my-3 flex justify-center gap-x-3">
          <button
            type="button"
            className="py-1.5 bg-blue-500 rounded-lg shadow-lg w-32 text-white"
            onClick={insertImage}
          >
            Add Image
          </button>
          <button
            type="button"
            className="text-base text-white bg-red-600 rounded-md shadow-lg w-32 py-1.5"
            // onClick={clearUpload}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageUploadModal;
