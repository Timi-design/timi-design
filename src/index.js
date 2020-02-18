import Icon from './icon'
import locale from '../utils/locale/index';

const components = {
  Icon
};

const idodesign = {
  ...components,
  idoIcon: Icon,
};

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  Object.keys(idodesign).forEach(key => {
    Vue.component(key, idodesign[key]);
  });

  Vue.prototype.$IDODESIGN = {
    size: opts.size || '',
    transfer: 'transfer' in opts ? opts.transfer : '',
    capture: 'capture' in opts ? opts.capture : true
  };
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const API = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  locale: locale.use,
  i18n: locale.i18n,
  install,
  ...components
};

API.lang = (code) => {
  const langObject = window['idodesign/locale'].default;
  if (code === langObject.i.locale) locale.use(langObject);
  else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
