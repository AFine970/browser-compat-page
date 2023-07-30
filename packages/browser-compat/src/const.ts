export enum BrowserIdEnum {
  CHROME = "chrome",
  FIREFOX = "firefox",
  EDGE = "edge",
  IE = "ie",
  OTHER = "other",
}

export const DEFAULT_BROWSERS_LIST = [
  {
    id: BrowserIdEnum.CHROME,
    name: "Google Chrome",
    downloadUrl: "",
    version: "",
  },
  {
    id: BrowserIdEnum.FIREFOX,
    name: "Mozilla Firefox",
    downloadUrl: "",
    version: "",
  },
  {
    id: BrowserIdEnum.EDGE,
    name: "Microsoft Edge",
    downloadUrl: "",
    version: "",
  },
  {
    id: BrowserIdEnum.IE,
    name: "Internet Explorer",
    downloadUrl: "",
    version: "",
  },
];

export const FRIENDLY_REMINDER =
  "We're sorry, but we no longer support the current version of your browser. Please install a new browser version as instructed.";
