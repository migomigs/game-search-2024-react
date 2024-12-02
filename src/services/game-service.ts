import axios from "axios";

class GameService {
  getAllGames() {
    const request = axios.create({
      baseURL: "/api/games",
      headers: {
        "Content-Type": "application/json",
        token: "861a7903b4474782a2c751a0380c02da",
      },
    });

    return request.get("");
  }
}

export default new GameService();
