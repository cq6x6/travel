<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <!-- <img src="./assets/logo.png"> -->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
