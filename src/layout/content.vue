<template>
  <div :class="wrapClasses">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'ido-layout';
export default {
  name: 'IdoContent',
  computed: {
    wrapClasses() {
      return `${prefixCls}-content`;
    }
  }
};
</script>
