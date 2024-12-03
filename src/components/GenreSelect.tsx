import useGames from "@/hooks/games-hooks";
import genreService from "@/services/genre-service";
import { Box, Flex, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Genre {
  name: string;
  image_background: string;
}

const GenreSelect = () => {
  const { selectedGenre, setSelectedGenre } = useGames();
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    genreService.getAll().then(({ data: genresInfo }) => {
      setGenres(genresInfo.results);
    });
  }, []);

  return (
    <div>
      <h1>Genres</h1>
      {genres.map((genre: Genre) => {
        return (
          <Flex
            key={genre.name}
            gap="0.5"
            onClick={() => {
              setSelectedGenre(genre.name.toLowerCase());
            }}
          >
            <Box
              bg={
                genre.name.toLocaleLowerCase() === selectedGenre
                  ? "red.500"
                  : "teal.900"
              }
            >
              <Image height="20px" src={genre.image_background} />
              <span>{genre.name}</span>
            </Box>
          </Flex>
        );
      })}
    </div>
  );
};

export default GenreSelect;
