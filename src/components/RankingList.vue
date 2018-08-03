<template>
  <div class="ranking-list">
    <div class="rank-nav">
      <div class="woman-rank" @click="handleWomanClick">女神榜</div>
      <div class="man-rank" @click="handleManClick">男神榜</div>
    </div>
    <div class="rank-nav-show" v-show="showWomanRank">
      女神榜女神榜女神榜女神榜女神榜女神榜女神榜女神榜女神榜
    </div>
    <div class="rank-nav-show" v-show="showManRank">
      男神榜男神榜男神榜男神榜男神榜男神榜男神榜男神榜男神榜
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      showWomanRank: true,
      showManRank: false
    }
  },
  created() {
    window.yl.call(
      'setTitleBarText',
      {
        title: '城市活动'
      },
      {
        onSuccess: function(a) {
        },
        onFail: function(a) {
        }
      }
    )
  },
  methods: {
    handleWomanClick() {
      this.showWomanRank = true
      this.showManRank = false
    },
    handleManClick() {
      this.showWomanRank = false
      this.showManRank = true
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.rank-nav {
  .woman-rank {
    display: inline-block;
    height: 100px;
    width: 50px;
    background-color: #ddd;
  }
  .man-rank {
    display: inline-block;
    height: 100px;
    width: 50px;
    background-color: #ddd;
  }
}
</style>
