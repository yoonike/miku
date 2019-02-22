<template>
  <div id="app">
    <!-- header头部 -->
    <div class="header">
      <router-link class="logo" to="/home">唐唐影视</router-link>
      <input class="movieName" type="text" v-model="movieName" placeholder="请输入电影名称">
      <button class="search" @click="searchMovie()">搜索</button>
    </div>
    <!-- 轮播 -->
    <router-view name="carouse"></router-view>
    <!-- 默认视图 -->
    <router-view></router-view>
    <footer>本网站为非赢利性站点，所有内容均由机器人采集于互联网，视频内容请查看播放源，本站不存储任何内容！</footer>
    <!-- 全局提示框 -->
    <transition name="fade">
      <div id="toast" v-if="isToast" @click="offToast">
        <div class="title">{{tipText}}</div>
      </div>
    </transition>
  </div>
</template>

<script>
//为防止页面加载时的跳动建议将此代码加在页面的head部分/
(function(doc, win) {
  var docEle = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function() {
      var clientWidth = docEle.clientWidth;
      var scale = clientWidth / 750;
      docEle.style.fontSize = 100 * scale + "px";
    };
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
export default {
  name: "App",
  data: function() {
    return {
      isToast: false, //显示提示框
      tipText: "sfdad", //提示文本
      movieName: "" //搜索电影名
    };
  },
  methods: {
    searchMovie: function() {
      if (this.movieName) {
        this.isToast = true;
        this.tipText = "您搜索的电影名称为：" + this.movieName;
        this.movieName = "";
      } else {
        this.$router.push("/moviePage");
      }
    },
    offToast: function() {
      this.isToast = false;
      this.tipText = "";
    }
  },
  created: function() {
    var isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      this.$router.push("/login");
    }
  }
};
</script>

<style>
/* 通用样式 */
* {
  padding: 0;
  margin: 0;
}
ul,
ol,
li {
  list-style-type: none;
}
#toast {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}
#toast .title {
  color: rgb(255, 255, 255);
  font-size: 0.3rem;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;
  font-size: 0.14rem;
}

.header {
  height: 0.5rem;
  line-height: 0.5rem;
  position: relative;
  padding: 0 0.1rem;
  background: rgba(0, 0, 0, 0.5);
}
.logo {
  float: left;
  color: salmon;
}
.movieName {
  outline: none;
  padding: 0 0.04rem;
  border: 1px solid transparent;
  border-radius: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0.3rem;
  line-height: 0.3rem;
  font-size: 0.2rem;
}
.movieName:focus {
  border: 1px solid salmon;
}
.search {
  position: absolute;
  top: 50%;
  right: 0.1rem;
  transform: translateY(-50%);
  border: none;
  font-size: 0.2rem;

  background: salmon;
  height: 0.3rem;
  line-height: 0.3rem;
}
</style>
