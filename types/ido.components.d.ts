// @ts-ignore
import Vue from 'vue';

export {Button, ButtonGroup} from './button/button';

interface idoGlobalOptions {
  size?: string;
  transfer?: boolean | string;
  select: {
    arrow: string;
    customArrow: string;
    arrowSize: number | string;
  };
  cell: {
    arrow: string;
    customArrow: string;
    arrowSize: number | string;
  };
  menu: {
    arrow: string;
    customArrow: string;
    arrowSize: number | string;
  };
  tree: {
    arrow: string;
    customArrow: string;
    arrowSize: number | string;
  };
  cascader: {
    arrow: string;
    customArrow: string;
    arrowSize: number | string;
    itemArrow: string;
    customItemArrow: string;
    itemArrowSize: number | string;
  };
  colorPicker: {
    arrow: string;
    customArrow: string;
    arrowSize: number | string;
  };
  datePicker: {
    icon: string;
    customIcon: string;
    iconSize: number | string;
  };
  timePicker: {
    icon: string;
    customIcon: string;
    iconSize: number | string;
  };
  tabs: {
    closeIcon: string;
    customCloseIcon: string;
    closeIconSize: number | string;
  };
  modal: {
    maskClosable: boolean | string;
  };
}

interface IViewInstallOptions extends idoGlobalOptions {
  locale?: any;
  i18n?: any;
}

declare const API: {
  version: string;
  locale: (l: any) => void;
  i18n: (fn: any) => void;
  install: (
    Vue: Vue,
    opts: IViewInstallOptions
  ) => void;
  lang: (code: string) => void;
};

export default API;

declare module 'vue/types/vue' {
  interface Vue {
    $IDO: idoGlobalOptions;
  }
}
