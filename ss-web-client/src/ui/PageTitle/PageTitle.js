import React from "react";
import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { CloudDownload } from "@mui/icons-material";
// import AddBoxIcon from "@mui/icons-material/AddBox";

const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
  overflow: "auto",
  flexDirection: "row",
  borderRadius: 0,
  height: "auto",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const Title = styled(Typography)(({ theme }) => ({
  padding: theme.spacing(1),
  display: "flex",
}));

export default function PageTitle(props) {
  const history = useNavigate();
  const { title, back, children } = props;

  return (
    <PaperStyled>
      {back && (
        <IconButton
          style={{ marginRight: 10 }}
          onClick={() => history.goBack()}
          edge="end"
          aria-label="back"
        >
          <ArrowBackIcon />
        </IconButton>
      )}
      <Title component="h3" variant="h5" color="textPrimary">
        {title}
      </Title>
      {children}
    </PaperStyled>
  );
}
