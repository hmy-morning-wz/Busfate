<template>
    <div class="card-detail">
        <div class="bg-banner">

        </div>
        <div class="detail">
            <div class="header">
                <div class="top-icon">
                    <img src="../assets/images/top.png">
                </div>
            </div>
            <div class="content">
                <div class="content-header">
                    <div class="con-header-item" v-for="(item, index) in zone0FirstIconList" :key="index">
                        <img class="top-icon" :src="item.superscriptImg" v-show="item.superscriptImg">
                        <img class="con-header-icon" :src="item.iconImg" @click="handleClick(item.linkUrl)">
                        <div class="con-header-text">{{item.iconName}}</div>
                    </div>
                </div>
                <div class="content-header content-header2">
                    <div class="con-header-item" v-for="(item, index) in zone0SecondIconList" :key="index">
                        <img class="top-icon" :src="item.superscriptImg" v-show="item.superscriptImg">
                        <img class="con-header-icon" :src="item.iconImg" @click="handleClick(item.linkUrl)">
                        <div class="con-header-text">{{item.iconName}}</div>
                    </div>
                </div>
                <div class="content-title">
                    <div class="line-left" style=""></div>
                    <div class="line-title">伴你乘车</div>
                    <div class="line-right"></div>
                </div>
                <div class="content-header">
                    <div class="con-header-item" v-for="(item, index) in detail.zone_1.iconList" :key="index">
                        <img class="top-icon" :src="item.superscriptImg" v-show="item.superscriptImg">
                        <img class="con-header-icon" :src="item.iconImg" @click="handleClick(item.linkUrl)">
                        <div class="con-header-text">{{item.iconName}}</div>
                    </div>
                </div>
                <div class="content-title">
                    <div class="line-left" style=""></div>
                    <div class="line-title">特惠购</div>
                    <div class="line-right"></div>
                </div>
                <div class="content-header">
                    <div class="con-header-item" v-for="(item, index) in zone2FirstIconList" :key="index">
                        <img class="top-icon" :src="item.superscriptImg" v-show="item.superscriptImg">
                        <img class="con-header-icon" :src="item.iconImg" @click="handleClick(item.linkUrl)">
                        <div class="con-header-text">{{item.iconName}}</div>
                    </div>
                </div>
                <div class="content-header content-header2">
                    <div class="con-header-item" v-for="(item, index) in zone2SecondIconList" :key="index">
                        <img class="top-icon" :src="item.superscriptImg" v-show="item.superscriptImg">
                        <img class="con-header-icon" :src="item.iconImg" @click="handleClick(item.linkUrl)">
                        <div class="con-header-text">{{item.iconName}}</div>
                    </div>
                </div>
                <div class="content-title">
                    <div class="line-left" style=""></div>
                    <div class="line-title">城市活动</div>
                    <div class="line-right"></div>
                </div>
                <div class="content-header">
                    <div class="con-header-item" v-for="(item, index) in detail.zone_3.iconList" :key="index">
                        <img class="top-icon" :src="item.superscriptImg" v-show="item.superscriptImg">
                        <img class="con-header-icon" :src="item.iconImg">
                        <div class="con-header-text">{{item.iconName}}</div>
                    </div>
                </div>
            </div>
            <div class="footer">
                <p class="footer-text">杭州市民卡与通卡联城联合运营</p>
                <p class="footer-text">客服电话：0571-87113360</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      url: '../../../static/images/chengchema@2x.png',
      detail: {
        zone_0: {
          name: '',
          iconList: []
        },
        zone_1: {
          name: '',
          iconList: []
        },
        zone_2: {
          name: '',
          iconList: []
        },
        zone_3: {
          name: '',
          iconList: []
        }
      },
      zone0FirstIconList: [],
      zone0SecondIconList: [],
      zone2FirstIconList: [],
      zone2SecondIconList: []
    }
  },
  components: {},
  created () {
    if (window.AlipayJSBridge) {
        AlipayJSBridge.call('setTransparentTitle', { //eslint-disable-line
        transparentTitle: 'auto'})
        AlipayJSBridge.call('hideOptionMenu') //eslint-disable-line
    }
    this.getIconList()
  },
  computed: {},
  methods: {
    async getIconList () {
      let res = await this.$parent.request({
        // url: `http://sit-operation.allcitygo.com:9109/prefer/icons`,
        url: `http://10.0.3.116:9234/prefer/icons`,
        method: 'post'
        // data: params
      })
      this.detail = JSON.parse(JSON.stringify(res.data))
      this.zone2FirstIconList = this.detail.zone_2.iconList.slice(0, 4)
      this.zone2SecondIconList = this.detail.zone_2.iconList.slice(4)
      this.zone0FirstIconList = this.detail.zone_0.iconList.slice(0, 4)
      this.zone0SecondIconList = this.detail.zone_0.iconList.slice(4)
    },
    handleClick (link) {
      window.location.href = link
    }
  },
  mounted () {},
  watch: {}
}
</script>
<style lang="scss" scoped >
.card-detail{
    position: relative;
}
.content {
  margin: 0 1.08rem;
}
.bg-banner {
  background: url('../assets/images/banner.jpeg') no-repeat;
  background-size: cover;
  width: 100% /* 620/75 */;
  height: 7.146667rem /* 536/75 */;
  margin: 0 auto;
}
.detail{
    position: absolute;
    left: 0;
    right: 0;
    top:3.2rem;
}
.header {
  background: url('../assets/images/card.png') no-repeat;
  background-size: cover;
  width: 8.266667rem /* 620/75 */;
  height: 5.733333rem /* 430/75 */;
  margin: 0 auto;
  .top-icon {
    width: 1.466667rem /* 110/75 */;
    height: 0.4rem /* 30/75 */;
    float: right;
    margin: 0.35rem 0.3rem 0 0;
  }
  img {
    width: 1.466667rem /* 110/75 */;
    height: 0.4rem /* 30/75 */;
  }
}
.content-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content-header2 {
  margin-top: 0.813333rem /* 61/75 */;
}
.con-header-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  .con-header-icon {
    flex: 1;
    width: 0.586667rem /* 44/75 */;
    height: 0.586667rem /* 44/75 */;
  }
  .top-icon{
      width: 1.2rem /* 90/75 */;
      height: .573333rem /* 43/75 */;
      position: absolute;
      top: -.533333rem /* 40/75 */;
      right: -.266667rem /* 20/75 */;
  }
  .con-header-text {
    flex: 1;
    height: 0.493333rem /* 37/75 */;
    line-height: 0.493333rem /* 37/75 */;
    margin-top: 0.133333rem /* 10/75 */;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #333333;
    letter-spacing: 0;
    text-align: center;
  }
}
.content-title {
  position: relative;
  margin: 0.666667rem /* 50/75 */ auto 0.8rem /* 60/75 */ auto;
  .line-left {
    position: absolute;
    left: 0;
    top: 50%;
    width: 3rem /* 225/75 */;
    border-top: 1px solid #e8e8e8;
  }
  .line-right {
    position: absolute;
    right: 0;
    top: 50%;
    width: 3rem /* 225/75 */;
    border-top: 1px solid #e8e8e8;
  }
  .line-title {
    margin: auto;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-size: 13px;
    color: #999999;
    letter-spacing: 0;
    height: 0.493333rem /* 37/75 */;
    line-height: 0.493333rem /* 37/75 */;
  }
}
.footer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2.413333rem /* 181/75 */;
  background-color: #f5f5f5;
  margin-top: 1.013333rem /* 76/75 */;
  .footer-text {
    height: 0.44rem /* 33/75 */;
    line-height: 0.44rem /* 33/75 */;
    font-size: 12px;
    color: #b8b8b8;
    text-align: center;
  }
}
</style>
