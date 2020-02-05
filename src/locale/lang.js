// using with vue-i18n in CDN
/*eslint-disable */
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

export default function (lang) {
    if (!isServer) {
        if (typeof window.iadAbc !== 'undefined') {
            if (!('langs' in iadAbc)) {
                iadAbc.langs = {};
            }
            iadAbc.langs[lang.i.locale] = lang;
        }
    }
};
/*eslint-enable */
