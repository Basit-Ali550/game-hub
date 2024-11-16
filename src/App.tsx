import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
      >
        <GridItem area={"nav"} bg="coral">
          <Navbar />
        </GridItem>

        <Show above="lg">
          <GridItem area={"aside"} bg="gold">
            aside
          </GridItem>
        </Show>
        <GridItem area={"main"} bg="red">
          main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
