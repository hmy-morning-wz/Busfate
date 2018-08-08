<template>
  <div class="warpper">
    <Preheat :showRankHeader="showRankHeader"></Preheat>
    <div class="rank-list-warpper">
      <div class="ranking-list" @mouse="handleScroll()">
        <div class="rank-nav">
          <div class="woman-rank" @click="handleWomanClick()" :class="{ active: isActive==='woman' }">女神榜</div>
          <div class="man-rank" @click="handleManClick()" :class="{ active: isActive==='man' }">男神榜</div>
        </div>
        <div class="rank-list-top" v-if="list1">
          <div class="top1-icon"></div>
          <div class="top2-icon"></div>
          <div class="top3-icon"></div>
        </div>
        <div class="rank-nav-show">
          <div class="show-list-wrapper">
            <div class="show-list" v-if="list1" v-for="(item,index) in list1" :key="index">
              <div class="image-warpper">
                <img :src="item.phone" alt="" style="width: 2.8rem;height: 3.733333rem;" class="image">
                <div class="sys-number">NO.{{item.id}}</div>
              </div>
              <div class="name">{{item.nickname}}</div>
              <div class="rode">{{item.lineNo}}路{{text}}神</div>
              <div class="ballot">{{item.votes}}票</div>
              <div class="ballot-wrapper" @click="handleBollot(item.id,index, 1)">
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
              <div class="rode">{{item.lineNo}}路{{text}}神</div>
              <div class="ballot">{{item.votes}}票</div>
              <div class="ballot-wrapper" @click="handleBollot(item.id,index,2)">
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
              <div class="rode">{{item.lineNo}}路{{text}}神</div>
              <div class="ballot">{{item.votes}}票</div>
              <div class="ballot-wrapper" @click="handleBollot(item.id,index,3)">
                <span class="icon"></span>
                <span class="text">投票</span>
              </div>
            </div>
          </div>
        </div>
        <div class="footer"></div>
        <button class="footer footer1" :disabled="dis" @click="handleSignUpClick()">我要报名</button>
      </div>
    </div>

  </div>

</template>

<script type="text/ecmascript-6">
import Preheat from './Preheat'
export default {
  data() {
    return {
      isActive: 'woman',
      text: '女',
      showRankHeader: true,
      votes: 0,
      userId: '520',
      status: 0,
      dis: false,
      gender: 2,
      page: 1,
      pageSize: 9,
      lists: [],
      list1: [],
      list2: [],
      list3: [],
      code: 20000
    }
  },
  created() {
    this.getUserStatus()
    this.getParticipanList()
    console.log(this.page)
  },
  methods: {
    handleScroll() {
      // console.log(11111)
      // alert(2222)
      // var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
      // console.log(scrollTop)
      // if (document.body.scrollHeight === scrollTop + window.innerHeight) {
      //   // this.page += 1
      //   console.log(111112)
      //   alert('33333')
      //   this.getParticipanList()
      // }
    },
    handleWomanClick() {
      this.isActive = 'woman'
      this.text = '女'
      this.gender = 2
      this.page = 1
      this.getParticipanList()
    },
    handleManClick() {
      this.isActive = 'man'
      this.text = '男'
      this.gender = 1
      this.page = 1
      this.getParticipanList()
    },
    handleBollot(participantId, index, num) {
      this.getVote(participantId, index, num)
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
        url: `http://10.0.3.116:9234/busLove/participant/getUserStatus?userId=${
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
        url: `http://10.0.3.116:9234/busLove/participant/getParticipantList?gender=${
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
    async getVote(participantId, index, num) {
      let res = await this.$parent.request({
        url: 'http://10.0.3.116:9234/busLove/vote/voteParticipant',
        method: 'post',
        data: {
          userId: this.userId,
          participantId: participantId
        }
      })
      console.log(res)
      this.code = res.code
      if (this.code === '40004') {
        this.$messagebox.alert('', {
          title: '温馨提示',
          message: res.errMsg,
          showCancelButton: false
        })
      } else if (this.code === '20000') {
        // this.newVote = res.data
        let list = `list${num}`
        this[`${list}`][index].votes = res.data
      }
    }
  },
  mounted() {
    document.addEventListener('scroll', function() {
      var scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop
      // console.log(scrollTop)
      if (document.body.scrollHeight === scrollTop + window.innerHeight) {
        console.log(123)
        // this.page += 1
        this.getParticipanList()
      }
    })
  },
  components: {
    Preheat: Preheat
  }
}
</script>

<style scoped lang="scss">
.rank-list-warpper {
  position: relative;
  width: 100%;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin-top: -10px;
  box-shadow: 0 10px 30px 0 rgba(206, 123, 155, 0.3);
}
.ranking-list {
  position: relative;
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
    height: 1.21rem;
    line-height: 1.21rem;
    width: 1.4rem;
    margin-left: 2.573333rem;
    font-family: PingFangSC-Medium;
    font-size: 0.426667rem;
    color: #cacddf;
    text-align: center;
  }
  .man-rank {
    display: inline-block;
    height: 1.21rem;
    line-height: 1.21rem;
    width: 1.4rem;
    margin-left: 1.226667rem;
    font-family: PingFangSC-Medium;
    font-size: 0.426667rem;
    color: #cacddf;
    text-align: center;
  }
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
    border-radius: 5px;
    overflow: hidden;
    // box-shadow: 0 10px 30px 0 rgba(206,123,155,0.30);
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
