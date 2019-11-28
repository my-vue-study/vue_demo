<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <!-- <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" alt />
      </mt-swipe-item> -->
    </mt-swipe>
    <h3>HomeContainer</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lunbotuList: [] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbotuData();
  },
  methods: {
    getLunbotuData() {
      this.$http
        .jsonp("http://vue.studyit.io/api/getlunbo", { credentials: true })
        .then(result => {
          if (result.body.status === 0) {
            // 成功了
            this.lunbotuList = result.body.message;
          } else {
            // 失败的
            Toast("加载轮播图失败。。。");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item:nth-child(1) {
    background-color: red;
  }
  .mint-swipe-item:nth-child(2) {
    background-color: blue;
  }
  .mint-swipe-item:nth-child(3) {
    background-color: yellow;
  }
}
</style>