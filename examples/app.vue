<template>
  <div class="container">
    <div>
      <div>
        <span><router-link to="/icon">Icon</router-link></span>
      </div>
    </div>
    <div style="margin: 50px">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
module.exports = {
  data: function () {
    return {}
  },
  mounted: function () {

  },
  beforeDestroy: function () {

  },
  methods: {}
}
</script>

