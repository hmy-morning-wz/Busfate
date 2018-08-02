<template>
    <div class="select-exchange">
        <div class="bg">
            <div class="count">{{busTimes}}</div>
            <div class="exchange-number">
                <div>可兑换权益的乘车次数</div>
                <!-- <div></div> -->
            </div>
        </div>
        <div class="select-content">
            <div class="select-exchange">精选兑换</div>
            <div class="my-select">
                <div @click="handlMyExchange">我的兑换</div>
                <div></div>
            </div>
        </div>
        <div class="volume-list" v-for="(item, index) in volumeList" :key="index">
            <div class="content-left">
                <div class="circle">
                    <img :src="item.logo" >
                </div>
                <div class="volumet-detail">
                    <div>{{item.name}}</div>
                    <div>{{item.needBusNumber}}次即可兑换</div>
                </div>
            </div>
            <div class="content-right">
                <div @click="handleInExchange(item.id,item.canExchangeFlag)">立即兑换</div>
                <div>{{item.provider}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  count: '',
  data () {
    return {
      msg: '',
      authCode: '',
      userId: 0,
      busTimes: 0,
      volumeList: []
    }
  },
  components: {

  },
  created () {
    const that = this
    window.yl.call('getAuthcode', {}, {
      onSuccess: function (a) {
        that.authCode = a.param.authCode
        that.getUserId(that.authCode)
      },
      onFail: function (a) {
      }
    })
    window.yl.call('setTransparentTitle', {
      transparentTitle: 'auto'
    })
    // this.getfindVoucherLis()
  },
  methods: {
    handlMyExchange () {
      if (this.userId) {
        const router = `/VolumeList?userId=${this.userId}`
        this.$router.push(router)
      }
    },
    handleInExchange (id, canExchangeFlag) {
      if (this.userId) {
        this.getjudgeExchangeBusTime(id)
      }
    },
    async getfindVoucherLis () {
      let res = await this.$parent.request({
        url: `benefitCenter/voucher/findVoucherListAndBusTimes?userId=${this.userId}`,
        method: 'post'
        // data: params
      })
      this.busTimes = res.data.busTimes
      this.volumeList = res.data.voucherResponseList
    },
    async getUserId (authCode) {
      let res = await this.$parent.request({
        url: `benefitCenter/appUser/getAppUserByAuthCode/${authCode}`,
        method: 'get'
        // data: params
      })
      localStorage.setItem('useId', res.data)
      this.userId = res.data
      this.getfindVoucherLis()
    },
    // 判断用户是否可以兑换优惠卷
    async getjudgeExchangeBusTime (voucherId) {
      let res = await this.$parent.request({
        url: `benefitCenter/userVoucher/judgeExchangeBusTime?userId=${this.userId}&voucherId=${voucherId}`,
        method: 'post'
        // data: params
      })
      if (res.code === '20000') {
        const router = `/ImmediateUse?voucherId=${voucherId}`
        this.$router.push(router)
      } else {
        this.$messagebox.alert('', {
          title: '提示',
          message: res.sub_msg,
          showCancelButton: false
        }).then(action => {
          this.getfindVoucherLis()
        })
      }
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
.select-exchange {
  .bg {
    background: url("../assets/images/quanyi_BG.png") no-repeat;
    background-size: cover;
    width: 100%;
    height: 164px;
    overflow: hidden;
    background-position: center;
    .count {
      font-family: DINAlternate-Bold;
      font-size: 48px;
      color: #ffffff;
      letter-spacing: 0;
      text-align: center;
      height: 56px;
      line-height: 56px;
      margin-top: 69px;
    }
    .exchange-number {
      text-align: center;
      opacity: 0.5;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 160px;
      margin: 0 auto;
      div:nth-child(2) {
        background: url("../assets/images/symbol.png") no-repeat;
        background-size: contain;
        width: 14px;
        height: 14px;
        margin-left: 5px;
      }
    }
  }
  .select-content {
    margin: 24px 9px 10px 16px;
    display: flex;
    align-items: center;
    .select-exchange {
      font-family: PingFangSC-Medium;
      font-size: 20px;
      color: #000000;
      flex: 3;
    }
    .my-select {
      font-family: PingFangSC-Regular;
      font-size: 14px;
      color: #666666;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      margin-right: 5px;
      div:nth-child(2) {
        background: url("../assets/images/arrow.png") no-repeat;
        background-size: contain;
        width: 7px;
        height: 13px;
        margin-left: 5px;
      }
    }
  }
  .volume-list {
    background: url("../assets/images/jingxuanduihuan.png") no-repeat;
    background-size: cover;
    width: 10rem;
    height: 3.3rem;
    background-position: center;
    margin: 0 auto;
    display: flex;
    .content-left {
      flex: 2.5;
      display: flex;
      align-items: center;
      margin: 0rem 0rem 0rem 0.69rem;
      .circle {
        height: 1.6rem;
        width: 1.6rem;
        background-color: #bed2f1;
        border-radius: 1.6rem;
        img{
            height: 1.6rem;
            width: 1.6rem;
        }
      }
      .volumet-detail {
        height: 1.6rem;
        margin-left: 0.14rem;
        div:nth-child(1) {
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #000000;
          margin-top: 0.14rem;
        }
        div:nth-child(2) {
          font-family: PingFangSC-Regular;
          font-size: 13px;
          color: #999999;
          letter-spacing: 0;
          margin-top: 0.14rem;
        }
      }
    }
    .content-right {
      flex: 1;
      text-align: center;
      margin: .266667rem .346667rem .266667rem .48rem;
      div:nth-child(1) {
        background: #5491f2;
        border-radius: 0.53rem;
        width: 1.97rem;
        height: 0.69rem;
        line-height: 0.69rem;
        margin: 0 auto;
        font-size: 13px;
        color: #fff;
        margin-top: 0.64rem;
      }
      div:nth-child(2) {
        margin: 0 auto;
        font-family: PingFangSC-Light;
        font-size: 10px;
        color: #999999;
        margin-top: 0.16rem;
        width: 2.13rem;
      }
    }
  }
}
</style>
