import { Game } from "@/hooks/games-hooks";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

const GamesDisplay = ({ games }: { games: Game[] }) => {
  return (
    <div>
      <h1>Games</h1>

      <Grid templateColumns="repeat(3, 1fr)" gap="4">
        {games.map((game: Game) => {
          return (
            <GridItem key={game.name}>
              <Box>
                <Image src={game.background_image} />
              </Box>
              <Text>{game.name}</Text>
            </GridItem>
          );
        })}
      </Grid>
    </div>
  );
};

export default GamesDisplay;
