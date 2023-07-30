import type { BrowsersOptions } from "./types";
import { DEFAULT_BROWSERS_LIST, FRIENDLY_REMINDER } from "./const";
import { parseHTMLString } from "./utils";

const browserInfo = DEFAULT_BROWSERS_LIST;
export function setup(options?: BrowsersOptions) {
  Object.assign(browserInfo, options);
}

export function render() {
  const element = document.getElementById("browser-compat-app");
  const fragment = document.createDocumentFragment();
  const browserInfoString = browserInfo
    .map((item) => {
      return `<div>
        <img src=""></img>
        <div>
            <a href="${item.downloadUrl}">${item.name}</a>
            <p>${item.version}</p>
        </div>
    </div>`;
    })
    .join("\n");

  const htmlString = `
        <div class="">
            <div>
                <div>😿</div>
                <div>${FRIENDLY_REMINDER}</div>
            </div>
            <div>${browserInfoString}</div>
        </div>
    `;
  const nodes = parseHTMLString(htmlString);
  fragment.appendChild(nodes!);
  element?.appendChild(fragment);
}
