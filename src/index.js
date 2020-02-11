import Icon from './icon'

const idoDesign = {
  Icon
};

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  Object.keys(idoDesign).forEach(key => {
    Vue.component(key, idoDesign[key]);
  });

  Vue.prototype.$IDO = {
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
  const langObject = window['ido/locale'].default;
  if (code === langObject.i.locale) locale.use(langObject);
  else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
