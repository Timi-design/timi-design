import Vue from 'vue'
import Button from './button.vue'
import './index.less'

new Vue({
  el: '#app',
  template: `
    <div>=
    <idoButton/>
    </div>
  `,
  components: {
    idoButton: Button,
  },
})
