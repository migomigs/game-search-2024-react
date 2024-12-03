import HttpService from "./http-service";

class GenreService {
  endPoint = "/genres";
  httpService = new HttpService(this.endPoint);

  getAll() {
    return this.httpService.get();
  }
}

export default new GenreService();
