<template>
  <div :class="wrapClasses">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'ido-layout';
export default {
  name: 'IdoHeader',
  computed: {
    wrapClasses() {
      return `${prefixCls}-header`;
    }
  }
};
</script>
