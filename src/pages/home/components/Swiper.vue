<template>
<div class="wrapper">
 <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img"
      :src="item.imgUrl">
    </swiper-slide>
    <!-- <swiper-slide>
      <img class="swiper-img" src="">
    </swiper-slide> -->
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
   </swiper>
   </div>
 </template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'https://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://qimgs.qunarzz.com/piao_qsight_provider_piao_qsight_web/0105e1200047q48rpB98F.jpg_r_800x800_7168edde.jpg'
      }]
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
   overflow: hidden
   width: 100%
   height: 0
   padding-bottom: 66%
   .swiper-img
     width: 100%
</style>
