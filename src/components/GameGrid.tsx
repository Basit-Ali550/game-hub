import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platforms } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./gameCardSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenre";
interface Props {
  selectGenre: Genre | null;
  selectPlatform: Platforms | null;
}
const GameGrid = ({ selectGenre, selectPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectGenre, selectPlatform);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}

      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={3}
      >
        {isLoading && (
          <>
            {skeleton.map((s) => (
              <GameCardContainer key={s}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}
          </>
        )}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
