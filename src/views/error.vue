<template>
  <div class="flex-container">
    <p class="error-msg">{{errMsg}}</p>
    <button class="btn-submit" round @click="errBack">返回</button>
  </div>

</template>

<script>
export default {
  data () {
    return {
      errMsg: this.$route.query.errMsg || '哎呀，出错了，请看看是不是网路不好，或者问问客服该咋办'
    }
  },
  computed: {
  },
  methods: {
    errBack () {
      history.back()
    }
  }
}
</script>
<style scoped>
.flex-container{
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding: 1rem 0.6rem;
}
.error-pic{
  display: block;
  width: 6rem;
  height: 6rem;
}
.error-msg{
  line-height: 28px;
  font-size: 14px;
}
.btn-submit{
    position: fixed;
    bottom: 1rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    line-height: 1rem;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    background-color: #FF9528;
    border: solid 1px #FF9528;
    color: #fff;
}
</style>
