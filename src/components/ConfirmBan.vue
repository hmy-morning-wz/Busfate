<template>
<div class="dialog">
	<div class="mask"></div>
	<div class="dialog-content">
		<h3 class="title">{{ modal.title }}</h3>
		<p class="text">{{ modal.text }}</p>
		<div class="btn-group">
			<div class="btn_confirm" @click="submit">{{ modal.confirmButtonText }}</div>
			<div class="btn_cancel" @click="cancel">{{ modal.cancelButtonText }}</div>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: "dialog",
  props: {
    dialogOption: Object,
    showDialog: false
  },
  data() {
    return {
      resolve: "",
      reject: "",
      promise: "", // 保存promise对象
      modal: {
        title: "",
        text: "",
        cancelButtonText: "",
        confirmButtonText: "OK~"
      }
    };
  },
  computed: {
    modal: function() {
      let options = this.dialogOption;
      return {
        title: options.title || "",
        text: options.text,
        cancelButtonText: options.cancelButtonText
          ? options.cancelButtonText
          : "取消",
        confirmButtonText: options.confirmButtonText
          ? options.confirmButtonText
          : "确定"
      };
    }
  },
  methods: {
    //确定,将promise断定为完成态
    submit() {
      this.resolve("submit");
    },
    // 取消,将promise断定为reject状态
    cancel() {
      this.reject("cancel");
    },
    //显示confirm弹出,并创建promise对象，给父组件调用
    confirm() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
      });
      return this.promise; //返回promise对象,给父级组件调用
    }
  }
};
</script>

<style lang="scss">
.dialog {
  position: relative;
  .dialog-content {
    position: fixed;
    box-sizing: border-box;
    padding: 20px;
    width: 7rem;
    height: 5.2rem;
    min-height: 140px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -55%);
    border-radius: 10px;
    border: none;
    background: url("../assets/images/dialog_box_error@2x.png") no-repeat;
    background-size: contain;
    z-index: 50002;
    .title {
      text-align: center;
      margin-top: 2rem;
      font-family: PingFangSC-Regular;
      font-size: 0.4267rem;
      color: #333333;
    }
    .text {
      font-family: PingFangSC-Regular;
      font-size: 0.35rem;
      color: #333333;
      text-align: center;
      line-height: 0.8rem;
    }
    .btn-group {
      .btn_confirm {
        width: 2.333rem;
        height: 0.9rem;
        margin: 0.65rem auto;
		margin-bottom: 0.9rem;
        line-height: 0.85rem;
        text-align: center;
        font-family: PingFangSC-Regular;
        font-size: 0.3733rem;
        color: #ffffff;
        border-radius: 0.5867rem;
        background: #ff6191;
        box-shadow: 0 0.1333rem 0.2667rem 0 rgba(255, 97, 145, 0.4);
      }
      .btn_cancel {
		width: 0.9333rem;
		height: 0.9333rem;
    	background: url("../assets/images/close@2x.png") no-repeat;
		background-size: contain;
        margin: 0 auto;
		text-align: center;
      }
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 50001;
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>