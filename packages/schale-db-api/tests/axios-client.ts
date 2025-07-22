import axios from "axios";
import Client, { type Options as ClientOption } from "../src/client";

class AxiosClient extends Client {
  constructor(options: ClientOption) {
    super(options);
    console.info("options = ", options);
  }

  async getData<D>(url: string): Promise<Record<number, D>> {
    const response = await axios.get(url, {
      proxy: {
        host: "127.0.0.1",
        port: 8118,
        protocol: "http",
      }
    });
    const json: Record<number, D> = await response.data;
    return json;
  }
}

export default AxiosClient;
