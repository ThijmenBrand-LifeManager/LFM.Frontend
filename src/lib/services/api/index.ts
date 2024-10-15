import { Axios } from "axios";

class BaseApi extends Axios {
  constructor(baseUrl: string) {
    super({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}

export default BaseApi;
