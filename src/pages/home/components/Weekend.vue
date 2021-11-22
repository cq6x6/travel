<template>
  <div>
      <div class="title">周末去哪儿</div>
    <ul>
       <li class="item border-bottom" v-for="item of recommendList" :key="item.id" >
        <div class="item-img-wrapper">
            <img class="item-img" :src='item.imgUrl'/>
        </div>
        <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
        </div>
       </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        title: '大千岛湖(AAAAA景区)',
        desc: '杭州市淳安县千岛湖镇梦姑路348号千岛湖中心湖区游船码头'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/1c/1ccff2940b61484ba3.water.jpg_200x200_529bdc6a.jpg',
        title: '大千岛湖(AAAAA景区)',
        desc: '杭州市淳安县千岛湖镇梦姑路348号千岛湖中心湖区游船码头'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2005/1c/1ccff2940b61484ba3.water.jpg_200x200_529bdc6a.jpg',
        title: '大千岛湖(AAAAA景区)',
        desc: '杭州市淳安县千岛湖镇梦姑路348号千岛湖中心湖区游船码头'
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .title
        margin-top: .2rem
        line-height: .8rem
        background: #eee
        text-indent: .2rem
    .item-img-wrapper
        overflow: hidden
        height: 0
        padding-bottom: 33.9%
        .item-img
            width: 100%
    .item-info
        padding: .1rem
        .item-title
            line-height: .54rem
            font-size: .32rem
            ellipsis()
        .item-desc
            line-height: .4rem
            color: #ccc
            ellipsis()
</style>
