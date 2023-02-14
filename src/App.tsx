import logo from "./logo.svg";
import Spells from "./features/spells/Spells";
import Spell from "./features/spell/Spell";
import "./App.css";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Favourites from "./features/favouriteSpells/Favourites";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>5th Edition</h1>
      </header>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h2>All Spells</h2>
              <Spells />
            </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h2>Spell</h2>
              <Spell />
            </Item>
          </Grid>
          <Grid item xs={2} sm={4} md={4}>
            <Item>
              <h2>Favourites</h2>
              <Favourites />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
