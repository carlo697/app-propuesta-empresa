import { fonts } from "db";

export const loadFont = (name) => {
  const fontData = fonts.find((item) => item.name === name);

  if (fontData) {
    if (!fontData.loaded) {
      var newStyle = document.createElement("style");
      newStyle.appendChild(document.createTextNode(fontData.rule));
      document.head.appendChild(newStyle);
      fontData.loaded = true;
    }

    return true;
  }

  return false;
};

export const copyToClipboard = (text) => {
  const el = document.createElement("textarea");
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};
