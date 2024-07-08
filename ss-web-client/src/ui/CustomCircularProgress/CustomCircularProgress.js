import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function CustomCircularProgress(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress />
    </div>
  );
}
