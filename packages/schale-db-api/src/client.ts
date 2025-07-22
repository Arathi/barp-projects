import type { Student } from "./schemas";

const DEFAULT_BASE_URL = "https://schaledb.com";
const DEFAULT_LANG = "cn";
const DEFAULT_SERVER = "jp";

export type Options = {
  baseURL?: string;
  lang?: string;
  server?: string;
};

abstract class Client {
  baseURL: string;
  lang: string;
  server: string;

  constructor({ baseURL = DEFAULT_BASE_URL, lang = DEFAULT_LANG, server = DEFAULT_SERVER }: Options) {
    this.baseURL = baseURL;
    this.lang = lang;
    this.server = server;
  }

  async getStudents(): Promise<Record<number, Student>> {
    const fileName = "students.min.json";
    const url = `${this.baseURL}/data/${this.lang}/${fileName}`;
    return this.getData(url);
  }

  abstract getData<D>(url: string): Promise<Record<number, D>>;
}

export default Client;
