import React from "react";
import { styled } from "@mui/system";
// import clsx from "clsx";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import Avatar from "@mui/material/Avatar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { CircularProgress } from "@mui/material";

// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function CustomCard(props) {
  // const [expanded, setExpanded] = React.useState(false);
  //
  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };
  const { title, subheader, description, children, image, actions } = props;
  return (
    <Card>
      {image ? (
        <CardMedia
          image={image ? image : "https://picsum.photos/500/300"}
          title="Paella dish"
        />
      ) : (
        <CircularProgress />
      )}
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={actions}
        title={title}
        subheader={subheader}
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <Link to={`${url}/${data.name}`}>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Link> */}
        {children}

        {/* <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> */}
      </CardActions>
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
        </CardContent>
      </Collapse> */}
    </Card>
  );
}
