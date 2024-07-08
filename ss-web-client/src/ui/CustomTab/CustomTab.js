import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Root = styled("div")(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: theme.palette.background.paper,
}));

export default function CustomTab(props) {
  const { children, labels } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {labels &&
            labels.map((label, index1) => (
              <Tab label={label} {...a11yProps(index1)} />
            ))}
        </Tabs>
      </Box>
      {children &&
        children.map((content, index2) => (
          <div
            role="tabpanel"
            hidden={value !== index2}
            id={`simple-tabpanel-${index2}`}
            aria-labelledby={`simple-tab-${index2}`}
          >
            {value === index2 && <Box p={3}>{content}</Box>}
          </div>
        ))}
    </Box>
  );
}

CustomTab.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
