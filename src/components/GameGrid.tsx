import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
