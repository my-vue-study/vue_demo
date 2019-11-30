<template>
  <div>
    <ul class="mui-table-view">
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
export default {};
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