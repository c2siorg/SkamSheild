import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useDropzone } from "react-dropzone";
import { Button, Typography } from "@mui/material";
import CircularProgressWithLabel from "../CircularProgressWithLabel/CircularProgressWithLabel";
import Iframe from "react-iframe";

export default function DropZone(props) {
  const {
    maxFiles,
    // title,
    // dragActiveTitle,
    subtitle,
    files,
    setFiles,
    type,
    progress,
    progressMessage,
    maxSize,
    convert,
    preview
  } = props;
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: type === 1 ? "video/*" : type === 2 ? ".pdf" : type === 3 ? ".zip" : null,
    maxSize: maxSize,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    maxFiles: maxFiles,
  });

  const [err, setErr] = useState(false);

  return (
    <section className="container">
      <div
        style={{
          border: err ? "1px solid red" : "1px solid lightgrey",
          borderRadius: 5,
          width: "100%",
          cursor: "pointer",
          padding: "20px",
          textAlign: "center",
        }}
        {...getRootProps()}
      >
        <input onBlur={() => setErr(files.length === 0)} {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <p>Drag 'n' drop some files here, or click to select files</p>
            <em>{subtitle}</em>
          </>
        )}
      </div>
      <List component="nav" aria-label="main mailbox folders">
        {files.map((file, index) => (
          <ListItem key={index} button>
            <ListItemIcon>
              <AttachFileIcon />
            </ListItemIcon>
            <ListItemText
              primary={
                <Typography style={{ fontStyle: "italic" }}>
                  {`${file.name} (${file.type}) ${(file.size / 1000000).toFixed(
                    2
                  )} MB`}
                </Typography>
              }
              secondary={progressMessage}
            />
            <ListItemSecondaryAction>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: 'row'
                }}
              >
                {type === 1 && <Button style={{ marginRight: 5 }} variant='contained' color='secondary' onClick={convert}>Convert</Button>}
                <CircularProgressWithLabel value={progress} />
              </div>
            </ListItemSecondaryAction>

          </ListItem>
        ))}
      </List>
      {preview ? type === 1 ? <video style={{ width: '33%', height: 100 }} src={preview} controls></video> :
        <Iframe
          url={"//docs.google.com/gview?url=" + preview + "&embedded=true"}
          width="33%"
          height={100}
          id="myId"
          frameBorder={0}
          className="myClassname"
          display="block"
          position="relative"
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          allowFullScreen={true}
          allow="fullscreen"
        />
        : null}
    </section>
  );
}
