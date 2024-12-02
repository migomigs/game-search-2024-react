import { Flex, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import "./App.css";
import logo from "./assets/logo.webp";
import GamesDisplay from "./components/GamesDisplay";
import GenreSelect from "./components/GenreSelect";
import ModeSelect from "./components/ModeSelect";
import SearchBar from "./components/SearchBar";
import gameService from "./services/game-service";

function App() {
  useEffect(() => {
    gameService.getAllGames().then((res) => {
      console.log("res", res);
    });
  }, []);
  return (
    <Flex direction="column">
      <Flex gap="1" justify="space-between">
        <Flex justify="flex-start">
          <Image src={logo} height="50px" />
        </Flex>
        <Flex flexGrow="1">
          <SearchBar />
        </Flex>
        <Flex justify="flex-end">
          <ModeSelect />
        </Flex>
      </Flex>
      <Flex justify="space-between">
        <Flex flexGrow="1">
          <GenreSelect />
        </Flex>
        <Flex flexGrow="1">
          <GamesDisplay />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default App;
