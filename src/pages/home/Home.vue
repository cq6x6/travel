<template>
    <div>
      <home-header></home-header>
      <home-swiper></home-swiper>
      <home-Icons></home-Icons>
      <home-Recommend></home-Recommend>
      <home-Weekend></home-Weekend>
    </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  }
}
</script>

<style>
</style>
