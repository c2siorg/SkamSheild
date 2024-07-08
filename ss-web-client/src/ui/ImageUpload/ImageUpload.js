import { Typography } from "@mui/material";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function ImageUpload(props) {
  const { width, height, image, setImageFiles, maxSize, maxFiles } = props;
  const [preview, setPreview] = useState(null);
  const [dropError, setDropError] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    maxSize: maxSize,
    onDrop: (acceptedFiles) => {
      setDropError(null);
      // console.log(
      //   acceptedFiles.map((file) =>
      //     Object.assign(file, {
      //       preview: URL.createObjectURL(file),
      //     })
      //   )
      // );
      const imageFiles = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setPreview(imageFiles);
      setImageFiles(imageFiles);
      console.log(imageFiles);
    },
    maxFiles: maxFiles,
    onDropRejected: (e) => setDropError(e[0].errors[0].message),
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid lightgrey",
        borderRadius: 5,
        width: width,
        height: height,
        marginBottom: 10,
        outline: "none",
      }}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <img
        alt="upload"
        src={
          preview && preview.length > 0
            ? preview[0].preview
            : image
              ? image
              : "https://via.placeholder.com/150?text=Click+here"
        }
        width={width}
        height={"100%"}
        style={{ borderRadius: 5 }}
      />
      {dropError && (
        <Typography
          style={{ color: "red", textAlign: "center" }}
          variant="body1"
          gutterBottom
        >
          {dropError}
        </Typography>
      )}
    </div>
  );
}
