import axios, { AxiosInstance } from 'axios';
import Student from './schema/student';
import Item from './schema/item';
import { Language } from './types';

const BASE_URL_SCHALE_GG = 'https://schale.gg';

export default class SchaleDBApi {
  baseURL: string;

  axios: AxiosInstance;

  lang: Language;

  constructor({ baseURL = BASE_URL_SCHALE_GG, lang = Language.Chinese }) {
    this.baseURL = baseURL;
    this.lang = lang;
    this.axios = axios.create({});
  }

  async get<D>(uri: string): Promise<D> {
    const url = `${this.baseURL}${uri}`;
    const resp = await this.axios.get<D>(url, {});
    if (resp.status !== 200) {
      throw new Error(
        `访问 ${url} 发生错误，状态码${resp.status}(${resp.statusText})`,
      );
    }
    return resp.data;
  }

  async getData<D>(lang: string, fileName: string, useMin = true): Promise<D> {
    const extName = useMin ? '.min.json' : '.json';
    const uri = `/data/${lang}/${fileName}${extName}`;
    return this.get(uri);
  }

  async getStudents({ lang = this.lang }: { lang?: Language }) {
    return this.getData<Student[]>(lang, 'students', true);
  }

  async getItems({ lang = this.lang }: { lang?: Language }) {
    return this.getData<Item[]>(lang, 'items', true);
  }
}
