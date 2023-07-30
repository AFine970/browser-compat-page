import { BrowserIdEnum } from "./const";

export interface BrowsersOptions {
  id: BrowserIdEnum;
  name: string;
  downloadUrl: string;
  version: string;
}
