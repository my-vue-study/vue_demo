<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <img class="mui-media-object mui-pull-left" :src="item.img_url" />
        <div class="mui-media-body">
          <h1>{{item.title}}</h1>
          <p class="mui-ellipsis">
            <span>发表时间：{{item.add_time}}</span>
            <span>点击：{{item.click}}次</span>
          </p>
        </div>
      </li>
      <li class="mui-table-view-cell mui-media">
        <img class="mui-media-object mui-pull-left" src="../../images/cbd.jpg" />
        <div class="mui-media-body">
          <h1>幸福</h1>
          <p class="mui-ellipsis">
            <span>发表时间：2012-12-12 12:12:12</span>
            <span>点击：0次</span>
          </p>
        </div>
      </li>
      <li class="mui-table-view-cell mui-media">
        <img class="mui-media-object mui-pull-left" src="../../images/muwu.jpg" />
        <div class="mui-media-body">
          <h1>幸福</h1>
          <p class="mui-ellipsis">
            <span>发表时间：2012-12-12 12:12:12</span>
            <span>点击：0次</span>
          </p>
        </div>
      </li>
      <li class="mui-table-view-cell mui-media">
        <img class="mui-media-object mui-pull-left" src="../../images/shuijiao.jpg" />
        <div class="mui-media-body">
          <h1>幸福</h1>
          <p class="mui-ellipsis">
            <span>发表时间：2012-12-12 12:12:12</span>
            <span>点击：0次</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("api/getnewslist").then(result => {
        if (result.data.status === 0) {
          this.newsList = result.body.message;
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
  }
};
</script>

<style lang="scss">
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>