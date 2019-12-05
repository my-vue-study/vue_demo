<template>
  <div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsInfo.title===''?'大标题':newsInfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsInfo.add_time===''?'2012-10-12 12:12:12':newsInfo.add_time | dateFormat }}</span>
      <span>点击：{{ newsInfo.click===''?'5':newsInfo.click }}次</span>
    </p>
    <!-- 分割线 -->
    <hr />
    <!-- 内容区域 -->
    <div class="content" v-html="newsInfo.content===''?'54567896543244567':newsInfo.content"></div>

    <!-- 评论区域 -->
    <div>评论</div>
    <div>评论</div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsInfo: {
        title: "大标题",
        add_time: "2012-10-12 12:12:12",
        click: "5",
        content:
          "123456789809-98765456787909-9876543567890-0098756432454657890987654322456789809876546789708"
      } // 新闻对象
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsInfo = result.body.message[0];
        } else {
          Toast("获取新闻失败！");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
</style>