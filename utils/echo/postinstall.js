/* eslint-disable max-len */
const emoji = require('node-emoji');

const env = process.env;
const ADBLOCK = is(env.ADBLOCK);
const CI = is(env.CI);
const COLOR = is(env.npm_config_color);
const DISABLE_OPENCOLLECTIVE = is(env.DISABLE_OPENCOLLECTIVE);
const SILENT = !!~['silent', 'error', 'warn'].indexOf(env.npm_config_loglevel);

function is(it) {
  return !!it && it !== '0' && it !== 'false';
}

function log(it) {
  console.log(COLOR ? it : it.replace(/\u001B\[\d+m/g, ''));
}

if (!ADBLOCK && !CI && !DISABLE_OPENCOLLECTIVE && !SILENT) {
  log('\u001B[96m 感谢使用ido-components组件库!' + emoji.get('pray') + '\u001B[0m\n',);
  log('\u001B[0m\u001B[96m 官方网站 ◕‿◕ : \u001B[0m');
  log('\u001B[96m>\u001B[94m http://ido-design.maxiaoqu.com/ \u001B[0m\n');
}
