import { ServerIndex } from './schema';

export enum Language {
  Japanese = 'jp',
  English = 'en',
  Chinese = 'cn',
}

export enum Server {
  Japan = 'jp',
  Global = 'global',
  China = 'cn',
}

export function toServerIndex(server: Server): ServerIndex {
  switch (server) {
    case Server.Global:
      return 1;
    case Server.China:
      return 2;
    default:
      return 0;
  }
}
