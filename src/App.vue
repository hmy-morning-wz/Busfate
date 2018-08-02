<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { request } from './utils/request'
export default {
  name: 'App',
  data () {
    return {
      request: request
    }
  }
}
</script>

<style>
#app {

}
</style>
