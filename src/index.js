import Icon from './components/icon'

const idoComponents = {
  Icon
};

const install = function (Vue, opts = {}) {
  if (install.installed) return;
  locale.use(opts.locale);
  locale.i18n(opts.i18n);

  Object.keys(idoComponents).forEach(key => {
    Vue.component(key, idoComponents[key]);
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

const IDOAPI = {
  version: process.env.VERSION, // eslint-disable-line no-undef
  locale: locale.use,
  i18n: locale.i18n,
  install,
  ...components
};

IDOAPI.lang = (code) => {
  const langObject = window['ido/locale'].default;
  if (code === langObject.i.locale) locale.use(langObject);
  else console.log(`The ${code} language pack is not loaded.`); // eslint-disable-line no-console
};

module.exports.default = module.exports = IDOAPI;   // eslint-disable-line no-undef
