import axios from "axios";

export default class HttpService {
  baseUrl = "https://api.rawg.io/api";
  key = "861a7903b4474782a2c751a0380c02da";
  endPoint = "";
  params = new URLSearchParams();
  constructor(endPoint: string) {
    this.params.append("key", this.key);
    this.endPoint = endPoint;
  }

  _createRequest() {
    return axios.create({
      baseURL: this.baseUrl,
      params: this.params,
    });
  }

  get(params?: URLSearchParams) {
    if (params) {
      for (const [key, value] of params?.entries()) {
        this.params.append(key, value);
      }
    }
    return this._createRequest().get(this.endPoint);
  }
}
