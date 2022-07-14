import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
  styled,
} from "@mui/material";

const CustomCard = styled(Card)(({ theme }) => ({
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "40%",
  },
}));
const Post = () => {
  return (
    <CustomCard sx={{ margin: 4 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            FA
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Fractal Analytics"
        subheader="July 15, 2022"
      />
      <CardMedia
        component="img"
        image="https://cdn.pixabay.com/photo/2018/05/11/08/55/technology-3389885__340.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Fractal Analytics is a multinational artificial intelligence company
          that provides services in consumer packaged goods, insurance,
          healthcare, life sciences, retail and technology, and the financial
          sector. Headquartered in New York, it has a presence in the United
          States,[1] United Kingdom, and India along with fifteen other
          locations.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </CustomCard>
  );
};

export default Post;
