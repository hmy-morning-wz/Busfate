<template>
  <div class="ranking-list">
    <div class="rank-nav">
      <div class="woman-rank" @click="handleWomanClick()" :class="{ active: isActive==='woman' }">女神榜</div>
      <div class="man-rank" @click="handleManClick()" :class="{ active: isActive==='man' }">男神榜</div>
    </div>
    <div class="rank-list-top">
      <div class="top1-icon"></div>
      <div class="top2-icon"></div>
      <div class="top3-icon"></div>
    </div>
    <div class="rank-nav-show woman" v-show="showWomanRank">
      <div class="show-list">
        <img src="" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
        <div class="name">昵称</div>
        <div class="rode">125路女神</div>
        <div class="ballot">222票</div>
        <div class="bollot-wrapper" @click="handleBollot()">
          <span class="icon"></span>
          <span class="text">投票</span>
        </div>
      </div>
      <div class="show-list">
        <img src="" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
        <div class="name">昵称</div>
        <div class="rode">125路女神</div>
        <div class="ballot">222票</div>
        <div class="bollot-wrapper" @click="handleBollot()">
          <span class="icon"></span>
          <span class="text">投票</span>
        </div>
      </div>
      <div class="show-list">
        <img src="" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
        <div class="name">昵称</div>
        <div class="rode">125路女神</div>
        <div class="ballot">222票</div>
        <div class="bollot-wrapper" @click="handleBollot()">
          <span class="icon"></span>
          <span class="text">投票</span>
        </div>
      </div>
    </div>
    <div class="rank-nav-show man" v-show="showManRank">
      <div class="show-list">
        <img src="" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
        <div class="name">昵称</div>
        <div class="rode">125路女神</div>
        <div class="ballot">222票</div>
        <div class="bollot-wrapper" @click="handleBollot()">
          <span class="icon"></span>
          <span class="text">投票</span>
        </div>
      </div>
      <div class="show-list">
        <img src="" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
        <div class="name">昵称</div>
        <div class="rode">125路女神</div>
        <div class="ballot">222票</div>
        <div class="bollot-wrapper" @click="handleBollot()">
          <span class="icon"></span>
          <span class="text">投票</span>
        </div>
      </div>
      <div class="show-list">
        <img src="" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
        <div class="name">昵称</div>
        <div class="rode">125路女神</div>
        <div class="ballot">222票</div>
        <div class="bollot-wrapper" @click="handleBollot()">
          <span class="icon"></span>
          <span class="text">投票</span>
        </div>
      </div>
    </div>
    <div class="footer"></div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      showWomanRank: true,
      showManRank: false,
      isActive: 'woman'
    }
  },
  created() {},
  methods: {
    handleWomanClick() {
      this.showWomanRank = true
      this.showManRank = false
      this.isActive = 'woman'
    },
    handleManClick() {
      this.showWomanRank = false
      this.showManRank = true
      this.isActive = 'man'
    }
  },
  components: {}
}
</script>

<style scoped lang="scss">
.ranking-list {
  width: 90%;
  margin: 0 auto;
}
.active {
  border-bottom: solid 2px #8383dd;
  color: #8383dd !important;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rank-list-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.266667rem;
  .top1-icon {
    width: 2.8rem;
    height: 20px;
    background: url('../assets/images/tag_top1@2x.png') no-repeat center;
    background-size: 34px 20px;
  }
  .top2-icon {
    width: 2.8rem;
    height: 20px;
    background: url('../assets/images/tag_top2@2x.png') no-repeat center;
    background-size: 34px 20px;
  }
  .top3-icon {
    width: 2.8rem;
    height: 20px;
    background: url('../assets/images/tag_top3@2x.png') no-repeat center;
    background-size: 34px 20px;
  }
}

.rank-nav {
  height: 1.24rem;
  // opacity: 0.5;
  border-bottom: solid 1px #e7e7e7;
  border-radius: 3px;
  .woman-rank {
    display: inline-block;
    height: 1.2rem;
    line-height: 1.2rem;
    width: 1.4rem;
    margin-left: 2.573333rem;
    font-family: PingFangSC-Medium;
    font-size: 0.213333rem;
    color: #cacddf;
    text-align: center;
  }
  .man-rank {
    display: inline-block;
    height: 1.2rem;
    line-height: 1.2rem;
    width: 1.4rem;
    margin-left: 1.226667rem;
    font-family: PingFangSC-Medium;
    font-size: 0.213333rem;
    color: #cacddf;
    text-align: center;
  }
}
.rank-nav-show {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .show-list {
    margin-bottom: 0.333333rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .image {
      background-color: yellow;
    }
    .name {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #000000;
      text-align: center;
      margin-top: 0.066667rem;
    }
    .rode {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      text-align: center;
      margin-top: 0.066667rem;
    }
    .ballot {
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #999999;
      text-align: center;
      margin-top: 0.066667rem;
    }
    .bollot-wrapper {
      width: 2.8rem;
      height: 0.8rem;
      margin-top: 0.2rem;
      background-color: #ff6191;
      font-family: PingFangSC-Regular;
      font-size: 13px;
      color: #ffffff;
      text-align: center;
      .icon {
        display: inline-block;
        width: 18px;
        height: 15px;
        vertical-align: middle;
        background: url('../assets/images/icon_xin@2x.png') no-repeat;
        background-size: 18px 15px;
      }
      .text {
        display: inline-block;
        height: 0.8rem;
        line-height: 0.8rem;
      }
    }
  }
}
.footer {
  width: 100%;
  height: 1.333333rem;
}
.footer::after {
  content: '我要报名';
  width: 100%;
  height: 1.333333rem;
  line-height: 1.333333rem;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #FFFFFF;
  background: rgba(255,97,145,0.95);
  border: 1px solid #979797;
}
</style>
