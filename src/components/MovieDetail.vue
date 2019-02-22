<template>
  <div class="movieDetail">
    <div class="content">
      <img :src="imgUrl" alt>
      <div class="info">
        <div class="name">{{name}}</div>
        <div class="type">{{type}}</div>
        <div class="actor">{{actor}}</div>
        <div class="intro">{{intro}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "movieDetail",
  data: function() {
    return {
      name: "血腥兄弟会",
      type: "惊悚，恐怖",
      actor: "扎切里·伯德，菲利普·安德烈·博特洛",
      intro:
        "一群大学新生承诺要加入一个排外的兄弟会，但很快他们就意识到这其中的利害关系比他们想象的要大得多。",
      imgUrl: "../../static/video/image10.jpg"
    };
  }
};
</script>
<style lang="less" scoped>
.content {
  display: flex;
  justify-content: center;
  background: rgba(20, 200, 155, 0.7);
  text-align: left;
  height:3rem;
}
.content .name {
  color: #fff;
}
.content img {
  height: 100%;
}
.info{
  padding:.1rem;
}
.info div+div {
  margin-top: 0.1rem;
}
</style>

