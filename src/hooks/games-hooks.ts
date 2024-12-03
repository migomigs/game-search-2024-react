import gameService from "@/services/game-service";
import { useEffect, useState } from "react";

export interface Game {
  name: string;
  background_image: string;
}

const useGames = () => {
  const [searchParams, setSearchParams] = useState(new URLSearchParams());

  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    gameService.get(searchParams).then(({ data: gamesInfo }) => {
      setGames(gamesInfo.results);
    });
  }, [searchParams]);

  return { games, searchParams, setSearchParams };
};

export default useGames;
