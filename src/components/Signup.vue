<template>
  <div class="signup">
    <div class="contain">
      <div class="message-ban">
        <input type="text" class="nickname" placeholder="昵称（支持英文大小写和中文）" v-model='nicknameValue' />
        <div class="check-sex">
          <!-- <label for="male">我是男神</label>
          <input type="radio" name="sex" id="male" value="male"><br>
          <label for="female">我是女神</label>
          <input type="radio" name="sex" id="female" value="female"><br> -->
          <div class="woman-option" @click="handleWomanClick()" :class="{ active: isActive==='woman' }">我是女神</div>
          <div class="man-option" @click="handleManClick()" :class="{ active: isActive==='man' }">我是男神</div>
        </div>
        <input type="text" class="busline" placeholder="最常乘坐的公交线路（如189）" v-model='buslineValue' style="width:92%">
        <span style="font-family: PingFangSC-Regular;font-size: 0.4rem;color: #333333;">路</span>
        <input type="text" class="phoneNo" placeholder="手机号码（为您保密，仅用于获奖联系哦）" v-model='phoneValue' />
      </div>
      <div class="imgUploading">
        <div class="txt">
          <span>我的靓照（只需上传一张）</span>
        </div>
        <div id="moveinput" style="position: absolute;margin-top: 0">
          <div class="inputcontrol">
            <input @change="readFile($event)" type="file" id="input1" ref="pathClear" accept="image*" capture="camera" class="inputstyle">
          </div>
        </div>
        <div class="picture" v-if="imgs.length>0" v-for='(item ,index ) in imgs' :key="index">
          <div class="imgcont" style="float:left;position:relative">
            <img class="showimg" :src="item" data-preview-src="" data-preview-group="1" />
            <img src="../assets/images/cancel_delete_remove.png" class="delete" @click="del($event)" />
          </div>
        </div>
        <div style="clear:both;"></div>
      </div>
      <div style="text-align:center">
        <button class="sub-btn" :disabled="{disabled: notOk==='notOK'}">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      imgs: [],
      isActive: 'woman',
      notOK: 'notOK',
      nicknameValue: '',
      buslineValue: '',
      phoneValue: ''
    }
  },
  methods: {
    handleWomanClick() {
      this.isActive = 'woman'
      console.log()
    },
    handleManClick() {
      this.isActive = 'man'
    },
    readFile: function(event) {
      var reader = new FileReader()
      console.log(event.target.files[0])
      reader.readAsDataURL(event.target.files[0])
      var that = this
      reader.onload = function() {
        that.imgs.push(reader.result)
        that.$refs.pathClear.value = ''
        console.log(reader.result)
      }
    },
    del: function(e) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode)
      console.log(this.imgs)
      this.imgs.splice(0, 1)
      console.log(this.imgs)
    },
    changeDisable: function() {}
  }
}

mui.previewImage()
</script>

<style>
.mui-preview-image.mui-fullscreen {
  position: fixed;
  z-index: 20;
  background-color: #000;
}

.mui-preview-header,
.mui-preview-footer {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 10;
}

.mui-preview-header {
  height: 44px;
  top: 0;
}

.mui-preview-footer {
  height: 50px;
  bottom: 0px;
}

.mui-preview-image {
  display: none;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.mui-preview-image.mui-preview-in {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
}

.mui-preview-image.mui-preview-out {
  background: none;
  -webkit-animation-name: fadeOut;
  animation-name: fadeOut;
}

.mui-preview-image.mui-preview-out .mui-preview-header,
.mui-preview-image.mui-preview-out .mui-preview-footer {
  display: none;
}

.mui-zoom-scroller {
  position: absolute;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  -webkit-backface-visibility: hidden;
}

.mui-zoom {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}

.mui-slider .mui-slider-group .mui-slider-item img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}

.mui-android-4-1 .mui-slider .mui-slider-group .mui-slider-item img {
  width: 100%;
}

.mui-android-4-1
  .mui-slider.mui-preview-image
  .mui-slider-group
  .mui-slider-item {
  display: inline-table;
}

.mui-android-4-1 .mui-slider.mui-preview-image .mui-zoom-scroller img {
  display: table-cell;
  vertical-align: middle;
}

.mui-preview-loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: none;
}

.mui-preview-loading.mui-active {
  display: block;
}

.mui-preview-loading .mui-spinner-white {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -25px;
  margin-top: -25px;
  height: 50px;
  width: 50px;
}

.mui-preview-image img.mui-transitioning {
  -webkit-transition: -webkit-transform 0.5s ease, opacity 0.5s ease;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

body {
  width: 100%;
  height: 100%;
}
.signup {
  padding-bottom: 1rem;
  padding-top: 0.7rem;
  height: 100vh;
  background: url('../assets/images/BG@2x.png') no-repeat;
  background-size: cover;
}
.contain {
  margin: 0;
  height: 100vh;
  padding: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  overflow: hidden;
  background-color: white;
  background: url('../assets/images/BG2@2x.png') no-repeat;
  background-size: contain;
  border-radius: 35px;
}

.message-ban {
}

.message-ban input {
  border: 1px solid white;
  border-bottom: 1px solid #e7e7e7;
  padding: 0;
  font-family: PingFangSC-Regular;
  font-size: 0.4rem;
  color: #bbbbbb;
  margin-bottom: 0.2rem;
}

.check-sex {
  width: 100%;
  display: flex;
  margin: 0.3rem 0;
}
.woman-option,
.man-option {
  width: 2.333rem;
  height: 0.9rem;
  margin-right: 0.3rem;
  line-height: 0.8rem;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 0.3733rem;
  color: #333333;
  border: 1px solid #e7e7e7;
  border-radius: 0.5867rem;
}
.active {
  width: 2.333rem;
  height: 0.9rem;
  margin-right: 0.3rem;
  line-height: 0.8rem;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-size: 0.3733rem;
  color: #ffffff;
  border: 1px solid #e7e7e7;
  border-radius: 0.5867rem;
  background: #ff6191;
}
.imgUploading {
  height: 5.7333rem;
  width: 100%;
  /* padding-left: 0.4267rem; */
  background-color: white;
}

.imgUploading .inputcontrol {
  height: 3.7333rem;
  width: 3.7333rem;
  margin-top: 0.3rem;
  margin-right: 0.24rem;
  background: url('../assets/images/addpic.png');
  background-size: 100% 100%;
  position: relative;
  float: left;
  left: 0px;
}

.imgUploading .txt {
  margin: 0;
  padding-top: 0.32rem;
  font-size: 0.56rem;
  color: rgb(116, 116, 114);
}

.imgUploading .txt span {
  font-family: PingFangSC-Regular;
  font-size: 0.4rem;
  color: #7a7a7a;
}

.inputstyle {
  height: 3.7333rem;
  width: 3.7333rem;
  overflow: hidden;
  font-size: 30px;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  filter: alpha(opacity=0);
  cursor: pointer;
}

.showimg {
  height: 3.7333rem;
  width: 3.7333rem;
  background-size: 100% 100%;
  float: left;
  margin-top: 0.3rem;
  margin-right: 0.24rem;
}

.delete {
  position: absolute;
  height: 0.7rem;
  width: 0.7rem;
  top: 5px;
  right: 5px;
  cursor: pointer;
}

.contain .sub-btn {
  overflow: hidden;
  width: 6.9333rem;
  height: 1.4667rem;
  color: white;
  font-size: 0.5rem;
  font-family: PingFangSC-Regular;
  letter-spacing: 0.3rem;
  /* background-color: #0079c5; */
  border: none;
  border-radius: 100px;
  margin: 0 auto;
  background: #bbbbbb;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(187, 187, 187, 0.4);
  opacity: 1;
}
</style>
