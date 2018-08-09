<template>
  <div class="warpper">
    <Preheat showRankHeader="true"></Preheat>
    <div class="rank-list-warpper">
      <div class="ranking-list">

        <div class="rank-nav">
          <div class="woman-rank" @click="handleWomanClick" :class="{ active1: isActive==='woman' }">女神榜</div>
          <div class="man-rank" @click="handleManClick" :class="{ active1: isActive==='man' }">男神榜</div>
        </div>

        <div class="rank-nav-show">
          <!-- 女神榜 -->
          <div id="mescroll2" class="mescroll" v-show="this.gender === 2">
            <div class="show-list-wrapper">
               <div class="show-list" v-for="(item,index) in femaleLists" :key="index">
              <div class="rank-list-top" v-show="index === 0||1||2? true:false">
                <div class="top1-icon" v-show="index === 0? true:false"></div>
                <div class="top2-icon" v-show="index === 1? true:false"></div>
                <div class="top3-icon" v-show="index === 2? true:false"></div>
              </div>
              <div class="image-warpper">
                <img :src="item.photo === 'string'||'' ? 'https://sit-img-citytsm.oss-cn-hangzhou.aliyuncs.com/20180808172059542sZGJxo.png' : (item.photo.indexOf('https') > -1 ? item.photo : `https://${item.photo}`)" alt="" class="image">
                <div class="sys-number">NO.{{item.id}}</div>
              </div>
              <div class="name">{{item.nickname}}</div>
              <div class="rode">{{item.lineNo}}路{{text}}神</div>
              <div class="ballot">{{item.votes}}票</div>
              <div class="ballot-wrapper" @click="handleBollot(item.id,index, 2)">
                <span class="icon"></span>
                <span class="text">投票</span>
              </div>
            </div>
            </div>
          </div>

          <!-- 男神榜 -->
          <div id="mescroll1" class="mescroll" v-show="this.gender === 1">
            <div class="show-list-wrapper">
            <div class="show-list" v-if="maleLists" v-for="(item,index) in maleLists" :key="index">
              <div class="rank-list-top" v-show="index === 0||1||2? true:false">
                <div class="top1-icon" v-show="index === 0? true:false"></div>
                <div class="top2-icon" v-show="index === 1? true:false"></div>
                <div class="top3-icon" v-show="index === 2? true:false"></div>
              </div>
              <div class="image-warpper">
                <img :src="item.photo === 'string'||'' ? 'https://sit-img-citytsm.oss-cn-hangzhou.aliyuncs.com/20180808172059542sZGJxo.png' : (item.photo.indexOf('https') > -1 ? item.photo : `https://${item.photo}`)" alt="" class="image">
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
          </div>
        </div>

      </div>
      <div class="footer"></div>
      <button class="footer footer1" :disabled="dis" @click="handleSignUpClick()">我要报名</button>
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
      votes: 0,
      status: 0,
      dis: false,
      gender: 2,
      page: 1,
      pageSize: 3,
      femaleLists: [],
      maleLists: [],
      code: 20000,
      flag: true,
      mescroll2: null,
      mescroll1: null
    }
  },
  created() {
    // 获取用户id
    this.getAlipayUserId()
  },
  methods: {
    // 隐藏菊花
    hideLoading: function() {
      window.yl.call('hideLoading')
    },
    // 菊花
    showLoading: function(opt) {
      // eslint-disable-next-line
      opt = Object.assign({
        title: '加载中...',
        duration: 3000
      }, opt)

      window.yl.call(
        'showLoading',
        {
          content: opt.title,
          duration: opt.duration
        },
        {
          onSuccess: function(a) {
            console.log('success')
          }
        }
      )
    },
    handleWomanClick() {
      this.isActive = 'woman'
      this.text = '女'
      this.gender = 2
      // this.femaleLists = []
      this.page = 1
      // this.mescroll2.clearDataList()
      // this.changeGenderData()
      // this.getParticipanList()
    },
    handleManClick() {
      this.isActive = 'man'
      this.text = '男'
      this.gender = 1
      // this.maleLists = []
      this.page = 1
      // this.mescroll1.clearDataList()
      this.changeGenderData()
      // this.getParticipanList()
    },
    changeGenderData () {
      let that = this
      // eslint-disable-next-line
      this.mescroll1 = new MeScroll('mescroll1', {
        // 第一个参数"mescroll"对应上面布局结构div的id
        down: {
          use: false
        },
        up: {
          htmlNodata: '-- 暂无更新数据 --',
          offset: 80,
          isBounce: false,
          auto: true,
          isBoth: false,
          htmlLoading: '',
          callback: that.getParticipanList // 上拉加载回调,简写callback:function(page){upCallback(page);}
        }
      })
    },
    handleBollot(participantId, index) {
      this.getVote(participantId, index)
    },
    handleSignUpClick() {
      // 获取用户报名状态
      this.getUserStatus()
    },
    async getUserStatus() {
      let res = await this.$parent.request({
        url: `participant/getUserStatus?userId=${window.localStorage.userId}`,
        method: 'post'
        // data: params
      })
      // console.log(res.data)
      this.status = res.data.status
      if (this.status === 1) {
        this.$messagebox.alert('', {
          title: '温馨提示',
          message: '您上传的照片未审核',
          showCancelButton: false
        })
        return
      }
      if (this.status === 2) {
        this.$messagebox.alert('', {
          title: '温馨提示',
          message: '您已参加过活动了',
          showCancelButton: false
        })
        return
      }
      if (this.status === 0 || 3) {
        window.location.href = '#/Signup'
      }
    },
    //  获取男女神榜
    async getParticipanList(page) {
      // this.showLoading()
      console.log(page.num)
      let res = await this.$parent.request({
        url: `participant/getParticipantList?gender=${this.gender}&page=${
          page.num
        }&pageSize=${this.pageSize}`,
        method: 'post'
        // data: params
      })
      // this.hideLoading()
      // console.log(res.data)
      if (res.code === '20000' && res.data) {
        // this.flag = true // 可以请求了
        // this.mescroll.endUpScroll(true)
        if (this.gender === 2) {
          this.mescroll2.endSuccess()
          res.data.forEach(item => {
            this.femaleLists.push(item)
            // this.lists = this.lists
          })
          if (res.totalSize < this.pageSize) this.mescroll2.endUpScroll(true)
        } else {
          this.mescroll1.endSuccess()
          res.data.forEach(item => {
            this.maleLists.push(item)
          })
          if (res.totalSize < this.pageSize) this.mescroll1.endUpScroll(true)
        }
      }
      // if (this.gender === 2 && res.code === '20000' && res.data) {
      //   res.data.forEach(item => {
      //     this.lists2.push(item)
      //     this.lists = this.lists2
      //   })
      // }
      // if (this.lists1.length === 0 && this.lists2.length === 0) {
      //   this.type = false
      // }
    },
    async getVote(participantId, index, type) {
      let res = await this.$parent.request({
        url: 'vote/voteParticipant',
        method: 'post',
        data: {
          userId: window.localStorage.userId,
          participantId: participantId
        }
      })
      // console.log(res)
      this.code = res.code
      if (this.code === '40004') {
        this.$messagebox.alert('', {
          title: '温馨提示',
          message: res.errMsg,
          showCancelButton: false
        })
      } else if (this.code === '20000') {
        // if (type === 2) this.femaleLists[index].votes = res.data
        // this.newVote = res.data
        if (this.gender === 2) this.femaleLists[index].votes = res.data
        else this.maleLists[index].votes = res.data
      }
    },
    async getAlipayUserId() {
      let res = await this.$parent.request({
        url: `access/getAlipayUserId?auth_code=${this.$route.query.auth_code}`,
        method: 'post'
      })
      // console.log(res.data)
      if (res.code === '20000' && res.data) {
        window.localStorage.userId = res.data
      }
    },
    changeGender() {
      // if (this.mescroll2) this.mescroll2.destroy()
      let that = this
      // eslint-disable-next-line
      this.mescroll2 = new MeScroll('mescroll2', {
        // 第一个参数"mescroll"对应上面布局结构div的id
        down: {
          use: false
        },
        up: {
          htmlNodata: '-- 暂无更新数据 --',
          offset: 80,
          isBounce: false,
          auto: true,
          isBoth: false,
          callback: that.getParticipanList // 上拉加载回调,简写callback:function(page){upCallback(page);}
        }
      })
    }
  },
  mounted() {
    // let that = this
    // document.addEventListener('scroll', function() {
    //   var scrollTop =
    //     document.body.scrollTop ||
    //     document.documentElement.scrollTop ||
    //     window.pageYOffset
    //   // console.log(document.body.scrollHeight)
    //   // console.log(window.innerHeight)
    //   // console.log(scrollTop)
    //   if (
    //     document.body.scrollHeight ===
    //     Math.round(scrollTop) + window.innerHeight
    //   ) {
    //     // console.log(true)
    //     that.page++
    //     // console.log(that.page)
    //     if (that.flag) {
    //       that.flag = false
    //       that.getParticipanList()
    //     }
    //   } else {
    //     // console.log(false)
    //   }
    // })

    this.changeGender()
    // this.getParticipanList()
  },
  components: {
    Preheat: Preheat
  }
}
</script>

<style scoped lang="scss">
.mescroll-hardware{
  display: none!important;
}
.warpper {
  width: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
}
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
.active1 {
  border-bottom: solid 2px #8383dd;
  color: #8383dd !important;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}

.rank-list-top {
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
  justify-content: space-around;
  flex-wrap: wrap;
  overflow: hidden;
  .show-list {
    margin-bottom: 0.333333rem;
    // margin-left: 10px;
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    overflow: hidden;
    // box-shadow: 0 10px 30px 0 rgba(206,123,155,0.30);
    .image-warpper {
      position: relative;
      width: 2.8rem;
      height: 3.733333rem;
      .image {
        width: 2.8rem;
        height: 3.733333rem;
        border: 0;
        object-fit: contain;
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
      font-size: 0.373333rem;
      color: #000000;
      text-align: center;
      margin-top: 0.066667rem;
      overflow: hidden;
    }
    .rode {
      font-family: PingFangSC-Regular;
      font-size: 11px;
      color: #999999;
      text-align: center;
      margin-top: 0.066667rem;
    }
    .ballot {
      font-family: PingFangSC-Regular;
      font-size: 11px;
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
  height: 50px;
}
.footer1 {
  width: 100%;
  height: 50px;
  line-height: 50px;
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
