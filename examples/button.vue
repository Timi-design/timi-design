<template>
  <div>
    <idoButton :type="this.type" @click="handleClick" class="test">
      primary
    </idoButton>
    <idoButton @mouseover="handleClick" @mouseout="handleClick">Default</idoButton>
    <idoButton type="dashed">Dashed</idoButton>
    <idoButton type="danger">Danger</idoButton>
    <br />
    <idoButton type="primary" shape="circle" icon="search" />
    <idoButton type="primary" icon="search">Search</idoButton>
    <idoButton shape="circle" icon="search" />
    <idoButton icon="search">Search</idoButton>
    <br />
    <idoButton shape="circle" icon="search" />
    <idoButton icon="search">Search</idoButton>
    <idoButton type="dashed" shape="circle" icon="search" />
    <idoButton type="dashed" icon="search">Search</idoButton>
    <div>
      <idoButton type="primary">Primary</idoButton>
      <idoButton type="primary" disabled>Primary(disabled)</idoButton>
      <br />
      <idoButton>Default</idoButton>
      <idoButton disabled>Default(disabled)</idoButton>
      <br />
      <idoButton>Ghost</idoButton>
      <idoButton disabled>Ghost(disabled)</idoButton>
      <br />
      <idoButton type="dashed">Dashed</idoButton>
      <idoButton type="dashed" disabled>Dashed(disabled)</idoButton>
    </div>
    <div :style="{background: 'rgb(190, 200, 200)', padding: '26px 16px 16px'}">
      <idoButton type="primary" ghost>Primary</idoButton>
      <idoButton ghost>Default</idoButton>
      <idoButton type="dashed" ghost>Dashed</idoButton>
      <idoButton type="danger" ghost>danger</idoButton>
    </div>
    <div>
      <idoButton type="primary" loading>
        Loading
      </idoButton>
      <idoButton type="primary" size="small" loading>
        Loading
      </idoButton>
      <br />
      <idoButton type="primary">
        Click me!
      </idoButton>
      <idoButton type="primary" icon="poweroff">
        Click me!
      </idoButton>
      <br />
      <idoButton shape="circle" loading />
      <idoButton type="primary" shape="circle" loading />
    </div>
    <div>
      <ButtonGroup>
        <idoButton>Cancel</idoButton>
        <idoButton type="primary">OK</idoButton>
      </ButtonGroup>
      <ButtonGroup size="large">
        <idoButton disabled>L</idoButton>
        <idoButton disabled>M</idoButton>
        <idoButton disabled>R</idoButton>
      </ButtonGroup>
      <ButtonGroup size="small">
        <idoButton type="primary">L</idoButton>
        <idoButton>M</idoButton>
        <idoButton>M</idoButton>
        <idoButton type="dashed">R</idoButton>
      </ButtonGroup>
    </div>
  </div>
</template>
<script>
import { Button } from '../components/index'
const ButtonGroup = Button.Group
export default {
  data () {
    return {
      type: 'primary',
    }
  },
  methods: {
    handleClick (event) {
      console.log(event)
      this.type = this.type === 'primary' ? 'danger' : 'primary'
    },
  },
  components: {
    idoButton: Button,
    ButtonGroup,
  },
}
</script>
