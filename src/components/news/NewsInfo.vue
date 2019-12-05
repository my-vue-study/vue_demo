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
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
//导入 评论子组件
import comment from "../subcomponents/comment.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id, // 将 URL 地址中传递过来的 Id值，挂载到 data上，方便以后调用
      newsInfo: {
        title: "北大博士后“不愿见老母最后一面”，为何网友不再劝他大度了？",
        add_time: "2012-10-12 12:12:12",
        click: "5",
        content:
          "一则“北大博士后出国20年杳无音讯，病危老母亲盼见儿子最后一面”的消息引发关注。热心网友根据家属提供的信息，真的找到了“失联20年”的北大博士后王永强，但王永强只回了七个字“清官难断家务事”。看到回复后，亲人们表示“失望至极”。没想到，大多数网友没有骂王永强不孝，而是对他表示理解——“家家有本难念的经”，“不知全貌不予置评”，“随便劝人大度、天打雷劈”等成了热评。"
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
  },
  components: {
    // 用来注册子组件的节点
    "comment-box": comment
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