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
    <div class="rank-nav-show" onscroll="handleScroll">
      <div class="show-list-wrapper">
        <div class="show-list" v-if="list1" v-for="(item,index) in list1" :key="index">
          <div class="image-warpper">
            <img :src="item.phone" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
            <div class="sys-number">NO.{{item.id}}</div>
          </div>
          <div class="name">{{item.nickname}}</div>
          <div class="rode">{{item.lineNo}}路女神</div>
          <div class="ballot">{{item.votes}}票</div>
          <div class="ballot-wrapper" @click="handleBollot(item.id)">
            <span class="icon"></span>
            <span class="text">投票</span>
          </div>
        </div>
      </div>
      <div class="show-list-wrapper">
        <div class="show-list" v-if="list2" v-for="(item,index) in list2" :key="index">
          <div class="image-warpper">
            <img :src="item.phone" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
            <div class="sys-number">NO.{{item.id}}</div>
          </div>
          <div class="name">{{item.nickname}}</div>
          <div class="rode">{{item.lineNo}}路女神</div>
          <div class="ballot">{{item.votes}}票</div>
          <div class="ballot-wrapper" @click="handleBollot(item.id)">
            <span class="icon"></span>
            <span class="text">投票</span>
          </div>
        </div>
      </div>
      <div class="show-list-wrapper">
        <div class="show-list" v-if="list3" v-for="(item,index) in list3" :key="index">
          <div class="image-warpper">
            <img :src="item.phone" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
            <div class="sys-number">NO.{{item.id}}</div>
          </div>
          <div class="name">{{item.nickname}}</div>
          <div class="rode">{{item.lineNo}}路女神</div>
          <div class="ballot">{{item.votes}}票</div>
          <div class="ballot-wrapper" @click="handleBollot(item.id)">
            <span class="icon"></span>
            <span class="text">投票</span>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
    <button class="footer footer1" :disabled="dis" @click="handleSignUpClick()">我要报名</button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      isActive: 'woman',
      votes: 0,
      userId: 1,
      status: 0,
      dis: false,
      gender: 2,
      page: 1,
      pageSize: 9,
      lists: [],
      list1: [],
      list2: [],
      list3: []
    }
  },
  created() {
    this.getUserStatus()
    this.getParticipanList()
  },
  methods: {
    handleScroll() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      if (document.body.scrollHeight === scrollTop + window.innerHeight) {
        this.page += 1
      }
    },
    handleWomanClick() {
      this.isActive = 'woman'
      this.gender = 2
      this.page = 1
      this.getParticipanList()
    },
    handleManClick() {
      this.isActive = 'man'
      this.gender = 1
      this.page = 1
      this.getParticipanList()
    },
    handleBollot(participantId) {
      this.getVote(participantId)
    },
    handleSignUpClick() {
      if (this.status === 1 || 2) {
        this.dis = true
      }
      if (this.status === 0 || 3) {
        this.dis = false
      }
      console.log('111')
    },
    async getUserStatus() {
      let res = await this.$parent.request({
        url: `http://10.0.2.190:9234/busLove/participant/getUserStatus?userId=${
          this.userId
        }`,
        method: 'post'
        // data: params
      })
      console.log(res.data)
      this.status = res.data.status
    },
    async getParticipanList() {
      let res = await this.$parent.request({
        url: `http://10.0.2.190:9234/busLove/participant/getParticipantList?gender=${
          this.gender
        }&page=${this.page}&pageSize=${this.pageSize}`,
        method: 'post'
        // data: params
      })
      console.log(res.data)
      this.lists = res.data
      this.list1 = res.data[0]
      this.list2 = res.data[1]
      this.list3 = res.data[2]
    },
    async getVote(participantId) {
      let res = await this.$parent.request({
        url: `http://10.0.2.190:9234/busLove/vote?userId=${
          this.userId
        }&participantId=${participantId}`,
        method: 'post'
        // data: params
      })
      console.log(res.data)
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
    font-size: 0.426667rem;
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
    font-size: 0.426667rem;
    color: #cacddf;
    text-align: center;
  }
}
.rank-nav-show {
}
.show-list-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .show-list {
    margin-bottom: 0.333333rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .image-warpper {
      position: relative;
      background-color: yellow;
      width: 2.8rem;
      height: 3.733333rem;
      .image {
        width: 2.8rem;
        height: 3.733333rem;
        background-color: yellowgreen;
      }
      .sys-number {
        position: absolute;
        width: 1.066667rem;
        height: 0.533333rem;
        line-height: 0.533333rem;
        top: 0.266667rem;
        left: 0;
        font-family: DINAlternate-Bold;
        font-size: 9px;
        color: #ffffff;
        background: url('../assets/images/tag_NO@2x.png') no-repeat center;
        background-size: 1.066667rem 0.533333rem;
      }
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
    .ballot-wrapper {
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
.footer1 {
  width: 100%;
  height: 1.333333rem;
  line-height: 1.333333rem;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #ffffff;
  background: rgba(255, 97, 145, 0.95);
  border: 0;
}
</style>
