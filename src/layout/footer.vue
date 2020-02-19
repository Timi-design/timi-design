<template>
  <div :class="wrapClasses">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'ido-layout';
export default {
  name: 'IdoFooter',
  computed: {
    wrapClasses() {
      return `${prefixCls}-footer`;
    }
  }
};
</script>
