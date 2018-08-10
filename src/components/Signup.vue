<template>
  <div class="signup">
    <div class="contain_ban">
      <div class="message-ban">
        <input type="text" class="nickname" placeholder="昵称（支持英文大小写和中文，最多七位）" maxlength="7" v-model='nicknameValue' @input="changeDisable()" />
        <div class="check-sex">
          <div class="woman-option" @click="handleWomanClick()" :class="{ active: isActive==='woman' }">我是女神</div>
          <div class="man-option" @click="handleManClick()" :class="{ active: isActive==='man' }">我是男神</div>
        </div>
        <input type="text" class="busline" placeholder="最常乘坐的公交线路（如189）" v-model='buslineValue' @input="changeDisable()" style="width:80%">
        <span style="font-family: PingFangSC-Regular;font-size: 0.4rem;color: #333333;">路</span>
        <input type="text" class="phoneNo" placeholder="手机号码（为您保密，仅用于获奖联系哦）" maxlength="11" v-model='phoneValue' @input="changeDisable()" />
      </div>
      <div class="imgUploading">
        <div class="txt">
          <span>我的靓照（只需上传一张）</span>
        </div>
        <div id="moveinput" style="position: absolute;margin-top: 0">
          <div class="inputcontrol">
            <input @change="readFile($event)" type="file" id="input1" ref="pathClear" accept="image*" class="inputstyle" @input="changeDisable()">
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
        <button class="sub-btn" :class="{ okBtn: isOk===true }" @click="sub_mes()">提交</button>
      </div>
    </div>
    <ConfirmBan v-show="showDialog" ref="dialog"></ConfirmBan>
  </div>
</template>

<script>
import ConfirmBan from './ConfirmBan.vue'
// import axios from 'axios'
export default {
  name: 'Signup',
  components: {
    ConfirmBan
  },
  data() {
    return {
      imgs: [],
      files: [],
      isActive: 'woman',
      isOk: false,
      nicknameValue: '',
      buslineValue: '',
      phoneValue: '',
      showDialog: false,
      // dialogOption: object,
      tiptitle: '您有信息未填写正确哦~',
      tipContent: '报名成功，我们会尽快审核哦',
      photoLink: '',
      gender: 2,
      isUpload: false
    }
  },
  methods: {
    handleWomanClick() {
      this.isActive = 'woman'
      this.gender = 2
    },
    handleManClick() {
      this.isActive = 'man'
      this.gender = 1
    },
    readFile: function(event) {
      var reader = new FileReader()
      // console.log(event.target.files[0]);
      this.files.push(event.target.files[0])
      // console.log(this.files[0])
      reader.readAsDataURL(event.target.files[0])
      var that = this
      reader.onload = function() {
        that.imgs.push(reader.result)
        that.$refs.pathClear.value = ''
        // console.log(reader.result);
        // if (
        //   that.nicknameValue !== '' &&
        //   that.phoneValue !== '' &&
        //   that.buslineValue !== '' &&
        //   that.imgs.length !== 0
        // ) {
        //   that.isOk = true
        // } else {
        //   that.isOk = false
        // }
        var formData = new FormData()
        formData.append('file', that.files[0])
        // var tmp = formData.getAll('file');
        // axios.post('http://10.0.3.116:9234/busLove/uploadFile/uploadOne', formData)
        that.$parent
          .request({
            baseURL:
              'https://operation.allcitygo.com/buslove/uploadFile/uploadOne',
            headers: { 'Content-type': 'multipart/form-data' },
            method: 'POST',
            data: formData,
            timeout: 60000
          })
          .then(res => {
            if (res.code === '20000') {
              that.photoLink = res.data
              console.log(that.photoLink)
              that.isUpload = true
              if (
                that.nicknameValue !== '' &&
                that.phoneValue !== '' &&
                that.buslineValue !== '' &&
                that.imgs.length !== 0
              ) {
                that.isOk = true
              }
              that.$refs.dialog.isError = true
              that.showDialog = true
              that.$refs.dialog.modal.title = ''
              that.$refs.dialog.modal.text = '图片上传成功'
              that.$refs.dialog
                .confirm()
                .then(() => {
                  that.showDialog = false
                  // next();
                })
                .catch(() => {
                  that.showDialog = false
                  // next();
                })
            } else {
              that.isOk = false
              that.$refs.dialog.isError = false
              that.showDialog = true
              that.$refs.dialog.modal.title = ''
              that.$refs.dialog.modal.text = '图片上传失败'
              that.$refs.dialog
                .confirm()
                .then(() => {
                  that.showDialog = false
                  // next();
                })
                .catch(() => {
                  that.showDialog = false
                  // next();
                })
            }
          })
          .catch(e => {
            console.log(e)
            that.isOk = false
            that.$refs.dialog.isError = false
            that.showDialog = true
            that.$refs.dialog.modal.title = ''
            that.$refs.dialog.modal.text = '图片上传失败'
            that.$refs.dialog
              .confirm()
              .then(() => {
                that.showDialog = false
                // next();
              })
              .catch(() => {
                that.showDialog = false
                // next();
              })
          })
      }
    },
    del: function(e) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode)
      console.log(this.imgs)
      this.imgs.splice(0, 1)
      this.files.splice(0, 1)
      console.log(this.imgs)
      this.photoLink = ''
      this.isUpload = false
      if (
        this.nicknameValue !== '' &&
        this.phoneValue !== '' &&
        this.buslineValue !== '' &&
        this.imgs.length !== 0
      ) {
        this.isOk = true
      } else {
        this.isOk = false
      }
    },
    changeDisable: function() {
      if (
        this.nicknameValue !== '' &&
        this.phoneValue !== '' &&
        this.buslineValue !== '' &&
        this.imgs.length !== 0
      ) {
        this.isOk = true
      } else {
        this.isOk = false
      }
    },
    async uploadMes() {
      let res = await this.$parent.request({
        // url: `http://sit-operation.allcitygo.com:9109/prefer/icons`,
        url: 'participant/apply',
        method: 'post',
        data: {
          gender: this.gender,
          lineNo: this.buslineValue,
          nickname: this.nicknameValue,
          photo: this.photoLink,
          telephone: this.phoneValue,
          userId: window.localStorage.userId
        }
      })
      if (res.code === '20000') {
        this.$refs.dialog.isError = true
        this.showDialog = true
        this.$refs.dialog.modal.title = ''
        this.$refs.dialog.modal.text = this.tipContent
        this.$refs.dialog
          .confirm()
          .then(() => {
            this.showDialog = false
            this.$router.go(-1)
            // next();
          })
          .catch(() => {
            this.showDialog = false
            this.$router.go(-1)
            // next();
          })
      } else if (res.code === '40004') {
        this.$refs.dialog.isError = false
        this.showDialog = true
        this.$refs.dialog.modal.title = ''
        this.$refs.dialog.modal.text = '该用户已报名'
        this.$refs.dialog
          .confirm()
          .then(() => {
            this.showDialog = false
            // next();
          })
          .catch(() => {
            this.showDialog = false
            // next();
          })
      } else {
        this.$refs.dialog.isError = false
        this.showDialog = true
        this.$refs.dialog.modal.title = ''
        this.$refs.dialog.modal.text = '网络繁忙'
        this.$refs.dialog
          .confirm()
          .then(() => {
            this.showDialog = false
            // next();
          })
          .catch(() => {
            this.showDialog = false
            // next();
          })
      }
    },
    sub_mes: function() {
      var phoneReg = /1[3|4|5|7|8][0-9](\d|\*){4}\d{4}/
      var nameReg = /^[0-9a-zA-Z\u4E00-\u9FA5]{1,20}$/
      if (
        !phoneReg.test(this.phoneValue) ||
        !nameReg.test(this.nicknameValue)
      ) {
        this.$refs.dialog.isError = false
        this.showDialog = true
        // this.tiptitle = "您有信息未填写正确哦~";
        this.$refs.dialog.modal.text = ''
        this.$refs.dialog.modal.title = this.tiptitle
        this.$refs.dialog
          .confirm()
          .then(() => {
            this.showDialog = false
            // next();
          })
          .catch(() => {
            this.showDialog = false
            // next();
          })
      } else {
        if (this.isUpload === false) {
          this.isOk = false
          this.$refs.dialog.isError = false
          this.showDialog = true
          // this.tiptitle = "您有信息未填写正确哦~";
          this.$refs.dialog.modal.text = ''
          this.$refs.dialog.modal.title = '图片还没上传成功哦'
          this.$refs.dialog
            .confirm()
            .then(() => {
              this.showDialog = false
              // next();
            })
            .catch(() => {
              this.showDialog = false
              // next();
            })
        } else if (this.isOk) {
          console.log(this.gender)
          this.uploadMes()
        } else {
          this.$refs.dialog.isError = false
          this.showDialog = true
          // this.tiptitle = "您有信息未填写正确哦~";
          this.$refs.dialog.modal.text = ''
          this.$refs.dialog.modal.title = this.tiptitle
          this.$refs.dialog
            .confirm()
            .then(() => {
              this.showDialog = false
              // next();
            })
            .catch(() => {
              this.showDialog = false
              // next();
            })
        }
      }
    }
  },
  created() {
    // console.log(this.$axios)
  }
}
// eslint-disable-next-line
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
  padding-top: 0.1rem;
  width: -webkit-fill-available;
  height: -webkit-fill-available;
  min-height: 10.6667rem;
  max-height: 18rem;
  background: url('../assets/images/BG@2x.png') no-repeat;
  background-size: cover;
}
.contain_ban {
  margin: 0 auto;
  width: -webkit-fill-available;
  max-height: 15rem;
  padding: 1rem;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  overflow: hidden;
  background-color: white;
  background: url('../assets/images/BG2@2x.png') no-repeat;
  background-size: cover;
  border-radius: 35px;
}

@media (device-height: 812px) and (-webkit-min-device-pixel-ratio: 2) {
  .signup {
    padding-top: 1.5rem;
    width: -webkit-fill-available;
    height: -webkit-fill-available;
    min-height: 10.6667rem;
    max-height: 22rem;
    background: url('../assets/images/BG@2x.png') no-repeat;
    background-size: cover;
  }
}

.message-ban input {
  border: 1px solid white;
  border-bottom: 1px solid #e7e7e7;
  padding: 0;
  font-family: PingFangSC-Regular;
  font-size: 0.4rem;
  color: #333333;
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
  border: 1px solid white;
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

.contain_ban .sub-btn {
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

.contain_ban .okBtn {
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
  background: #ff6191;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(187, 187, 187, 0.4);
  opacity: 1;
}

/* .signup /deep/ .dialog .dialog-content{
  background: url('../assets/images/dialog_box_success@2x.png') no-repeat;
  background-size: contain;
} */
</style>
