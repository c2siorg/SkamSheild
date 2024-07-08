import React from "react";
import { styled } from "@mui/system";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { Backdrop } from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "flex-start",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     flexWrap: "nowrap",
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: "translateZ(0)",
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//   },
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: "#fff",
//   },
// }));

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const itemData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

export default function SingleLineImageList(props) {
  const { itemData } = props;

  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  const onClickImage = (item) => {
    setSelectedItem(item);
    handleToggle();
  };

  return (
    <div className={classes.root}>
      <ImageList rowHeight={160} className={classes.imageList} cols={4}>
        {itemData.map((item) => (
          <ImageListItem key={item.img} style={{ width: 160 }}>
            <img src={item.img} alt={item.title} />
            <ImageListItemBar
              title={item.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <IconButton
                  aria-label={`star ${item.title}`}
                  onClick={() => onClickImage(item)}
                >
                  <VisibilityIcon className={classes.title} />
                </IconButton>
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
        {selectedItem && (
          <img width={300} src={selectedItem.img} alt={selectedItem.title} />
        )}
      </Backdrop>
    </div>
  );
}
