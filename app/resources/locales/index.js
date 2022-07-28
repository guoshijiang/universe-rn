import IntlPolyfill from "intl";
import "intl/locale-data/jsonp/en.js";
import "intl/locale-data/jsonp/zh.js";
global.Intl = IntlPolyfill;

import Intl from "react-intl-universal";
import zh from "./zh.json";

export const SUPPORT_LOCALES = [
    {
        name: "简体中文",
        value: "zh-CN",
    }
];

const locales = {
    'zh-CN': zh,
}


// intl init
export const intlInit = (currentLocale) => {
    return Intl.init({
        currentLocale,
        locales,
    });
};
// change init
export const setIntl = locale => {
    Intl.load(locales[locale]);
}

global.t = (message, values) => {
    // check zh message
    const check = zh[message];
    if (!check) {
        return message;
    }
    return Intl.get(message, { ...values }) || '';
};
