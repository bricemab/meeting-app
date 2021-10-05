import i18next from "i18next";
import messagesFR from "./fr/translations.json";
import messagesEN from "./en/translations.json";

const language = sessionStorage.getItem("language") || "fr";
i18next.init({
  lng: language, // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    en: {
      translation: messagesEN
    },
    fr: {
      translation: messagesFR
    }
  }
});

export default class Translator {
  static t(text: string): string {
    return i18next.t(text)
  }
}


// const t = (text: string): string => {
//   return i18next.t(text)
// }
// module.exports = t;
