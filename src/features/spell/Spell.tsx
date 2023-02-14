import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useFetchSpellQuery } from "../../api/dnd-api-slice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectSpell } from "./spellSlice";
import { Spell } from "./spell.interface";
import { updateFavouriteSpells } from "../favouriteSpells/favouriteSpellsSlice";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid/Grid";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function SpellCard() {
  const dispatch = useAppDispatch();
  const spell = useAppSelector(selectSpell);
  const { data, isFetching } = useFetchSpellQuery(spell.index);

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  if (data) {
    const { name, attack_type, casting_time, concentration, ritual } = data;
    const className = data.classes[0].name;
    let subheader = `${attack_type} | ${casting_time}`;
    if (concentration) subheader += ` | ${concentration}`;
    if (ritual) subheader += ` | ${ritual}`;
    subheader += ` | ${data.components.toString()}`;
    return (
      <Card style={{ border: "none", boxShadow: "none" }}>
        <CardHeader
          avatar={
            <Avatar
              sx={{ bgcolor: red[500] }}
              aria-label={className}
              alt={className}
              src={`../../images/${className}.svg`}
            ></Avatar>
          }
          title={name}
          subheader={subheader}
        />

        {data.desc.map((description) => (
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        ))}

        <CardActions disableSpacing>
          <IconButton
            aria-label="add to favorites"
            onClick={() =>
              dispatch(
                updateFavouriteSpells({
                  index: data.index,
                  name: data.name,
                  url: data.url,
                })
              )
            }
          >
            <FavoriteIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={3}>
                <Typography textAlign="center" variant="h6" component="div">
                  Level
                </Typography>
                <Typography textAlign="center" variant="body1" component="div">
                  {data.level}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign="center" variant="h6" component="div">
                  Duration
                </Typography>
                <Typography textAlign="center" variant="body1" component="div">
                  {data.level}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign="center" variant="h6" component="div">
                  Title
                </Typography>
                <Typography textAlign="center" variant="body1" component="div">
                  {data.level}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign="center" variant="h6" component="div">
                  Title
                </Typography>
                <Typography textAlign="center" variant="body1" component="div">
                  {data.level}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign="center" variant="h6" component="div">
                  Title
                </Typography>
                <Typography textAlign="center" variant="body1" component="div">
                  {data.level}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign="center" variant="h6" component="div">
                  Title
                </Typography>
                <Typography textAlign="center" variant="body1" component="div">
                  {data.level}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign="center" variant="h6" component="div">
                  Title
                </Typography>
                <Typography textAlign="center" variant="body1" component="div">
                  {data.level}
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography textAlign="center" variant="h6" component="div">
                  Title
                </Typography>
                <Typography textAlign="center" variant="body1" component="div">
                  {data.level}
                </Typography>
              </Grid>
            </Grid>
            <Typography textAlign="center" variant="h5" mt={5} component="div">
              Higher Level
            </Typography>
            {data.higher_level.map((higherLevel) => (
              <Typography textAlign="center" variant="body1" component="div">
                {higherLevel}
              </Typography>
            ))}
          </CardContent>
        </Collapse>
      </Card>
    );
  } else
    return (
      <Card style={{ border: "none", boxShadow: "none" }}>
        <Typography textAlign="center" variant="h3" component="div">
          Select a Spell!
        </Typography>
        <CardMedia
          component="img"
          image="https://www.dnd5eapi.co/public/favicon.ico"
          alt="DnD"
        />
      </Card>
    );
}
