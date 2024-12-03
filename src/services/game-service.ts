import HttpService from "./http-service";

class GameService {
  endPoint = "/games";
  httpService = new HttpService(this.endPoint);

  get(params?: URLSearchParams) {
    return this.httpService.get(params);
  }
}

export default new GameService();
