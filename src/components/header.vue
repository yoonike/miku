<template>
  <header class="header">
    <span class="title">唐唐影视</span>
    <input class="movieName" type="text" v-model="movieName" placeholder="请输入电影名称">
    <button class="search" @click="searchMovie()">搜索</button>
  </header>
</template>
<script>
export default {
  name: "header",
  data: function() {
    return {
      movieName: ""
    };
  },
  methods: {
    searchMovie: function() {
      if (this.movieName) {
        alert("您搜索的电影名称为：" + this.movieName);
      } else {
        alert("请先输入文字");
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  background: rgba(0, 0, 0, 0.5);
}
.title {
  float: left;
  color: salmon;
}
.movieName {
  outline: none;
  padding: 0 4px;
  border: 1px solid transparent;
  border-radius: 2px;
}
.movieName:focus {
  border: 1px solid salmon;
}
.search {
  float: right;
  width: 100px;
  border: none;
  background: salmon;
  font-size: 20px;
  height: 30px;
  line-height: 30px;
}
</style>


