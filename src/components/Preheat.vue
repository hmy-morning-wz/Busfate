<template>
  <div class="preheat">
    <div class="contain">
      <div class="bg-ban">
        <div class="title-banner">
          <span class="line1">扫码乘车时代</span>
          <span class="line2">也许你的男神/女神正在与你擦肩而过</span>
          <span class="line3">
            御姐、萝莉or小清新<br>
            萌叔、正太or肌肉男
          </span>
          <span class="line4">
            搜寻杭城男神女神<br>
            邂逅你的公车情缘
          </span>
        </div>
        <div class="prize-banner">
          <div class="heart-title">
            <img src="../assets/images/prize-title.png">
          </div>
          <div class="prize">
            <div class="prize-title">
              <span>第一名奖品</span>
            </div>
            <div class="prizee">
              <div><img src="../assets/images/prize-flp.png"><span class="prize-name">飞利浦剃须刀</span></div>
              <span>or</span>
              <div><img src="../assets/images/prize-kindle.png"><span class="prize-name">kindle电子书阅读器</span></div>
            </div>
            <div style="clear:both"></div>
          </div>
          <div class="prize">
            <div class="prize-title">
              <span>第二名奖品</span>
            </div>
            <div class="prizee">
              <div><img src="../assets/images/prize-bag.png"><span class="prize-name">kanken北极狐背包</span></div>
              <span>or</span>
              <div><img src="../assets/images/prize-ysld.png"><span class="prize-name">雅诗兰黛眼霜</span></div>
            </div>
            <div style="clear:both"></div>
          </div>
          <div class="prize">
            <div class="prize-title">
              <span>第三名奖品</span>
            </div>
            <div class="prizee">
              <div><img src="../assets/images/prize-ddys.png"><span class="prize-name">oral-b电动牙刷</span></div>
              <span>or</span>
              <div><img src="../assets/images/prize-ysh.png"><span class="prize-name">永生花礼盒</span></div>
            </div>
            <div style="clear:both"></div>
          </div>

        </div>
        <div class="rule-banner">
          <div class="heart-title">
            <img src="../assets/images/rule-title.png">
          </div>
          <div class="rule-detail">
          1.8月10日0点-8月16日24点期间，上传本人靓照1张至男神榜或女神榜专区，按要求填写信息；<br>
          2.信息审核通过即完成报名，每人限报名一次；<br>
          3.活动期间每人每天最多投5票，可重复投票；<br>
          4.将于8月17日七夕12点评选出男神榜、女神榜各前三名，最高赢取千元大奖；<br>
          5.本次活动最终解释权在法律允许范围内归通卡联城网络科技有限公司所有。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Preheat',
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped >
.preheat {
  position: relative;
}

.preheat .contain {
  background: url("../assets/images/fate-bg.png") no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  margin: 0 auto;
  padding-bottom: 2rem;
}

.bg-ban {
  padding: 0 0.8rem;
  padding-top: 13.6267rem;
}

.title-banner {
  background: url("../assets/images/theme-bg.png") no-repeat;
  background-size: contain;
  width: 8.5rem;
  height: 8.2rem;
  margin: 0 auto;
  position: relative;
}
.title-banner span {
  display: block;
  text-align: center;
  position: relative;
  top: 1.35rem;
  font-family: PingFangSC-Thin;
  color: #8383dd;
}
.line1 {
  font-size: 0.7rem;
  line-height: 0.8rem;
}
.line2 {
  font-size: 0.4267rem;
  line-height: 0.9rem;
}
.line3 {
  font-size: 0.4267rem;
  line-height: 0.6rem;
}
.line4 {
  font-size: 0.7rem;
  line-height: 1rem;
  letter-spacing: 0.0267rem;
  margin-top: 0.11rem;
}

.heart-title img {
  display: block;
  width: 3.64rem;
  height: 0.55rem;
  margin: 0 auto;
  margin-bottom: 0.5rem;
}
.prize-title {
  width: 2.6667rem;
  height: 0.68rem;
  margin: 0 auto;
  background: #FF6191;
  border-radius: 0.4667rem;
}
.prize-title span{
  display: block;
  font-family: PingFangSC-Medium;
  font-size: 0.4267rem;
  line-height: 0.68rem;
  color: #FFFFFF;
  text-align: center;
}
.prize .prizee {
  width: 8.4rem;
  display: flex;
  align-items: baseline;
  margin: 0 auto;
}
.prize img{
  display: block;
  margin: 0.5rem auto;
  width: 4rem;
  height: 4rem;
  background: #FFFFFF;
  box-shadow: 0 10px 30px 0 rgba(169,58,173,0.20);
  border-radius: 20px;
}
.prizee span{
  font-family: PingFangSC-Regular;
  font-size: 0.3467rem;
  color: #FFFFFF;
  text-align: center;
}
.prizee .prize-name{
  display:block;
  width:4rem; 
  margin-bottom: 0.5rem;
}

.rule-detail {
  font-family: PingFangSC-Regular;
  font-size: 0.3467rem;
  color: #FFFFFF;
  line-height: 0.72rem;
}
</style>
