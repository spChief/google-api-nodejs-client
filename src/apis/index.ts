import * as calendar from './calendar';
import * as oauth2 from './oauth2';

export interface APIList {
  // tslint:disable-next-line: no-any
  [index: string]: {[index: string]: any};
}

export const APIS: APIList = {
  calendar: calendar.VERSIONS,
  oauth2: oauth2.VERSIONS,
};

export class GeneratedAPIs {
  calendar = calendar.calendar;
  oauth2 = oauth2.oauth2;
}
