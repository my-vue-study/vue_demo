<template>
  <div>
    <mt-swipe :auto="4000">
      <!-- 在组件中，使用v-for循环的话，一定要使用 key -->
      <mt-swipe-item v-for="item in lunbotuList" :key="item">
        <img :src="item" alt />
      </mt-swipe-item>
    </mt-swipe>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" alt />
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photoList">
          <img src="../../images/menu2.png" alt />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu3.png" alt />
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" alt />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" alt />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" alt />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      lunbotuList: [
        "http://www.itcast.cn/images/slidead/BEIJING/2017440109442800.jpg",

        "http://www.itcast.cn/images/slidead/BEIJING/2017511009514700.jpg",

        "http://www.itcast.cn/images/slidead/BEIJING/2017421414422600.jpg"
      ] // 保存轮播图的数组
    };
  },
  created() {
    this.getLunbotuData();
  },
  methods: {
    getLunbotuData() {
      this.$http.get("api/getlunbo").then(result => {
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
  .mint-swipe-item {
    img {
      width: 100%;
      height: 100%;
    }
  }
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

.mui-grid-view.mui-grid-9 {
  background-color: white;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
.mui-table-view.mui-grid-view .mui-table-view-cell {
  border: 0px;
}
</style>