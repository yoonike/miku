<template>
  <ul class="moveList">
    <li
      v-for="(movie,index) in movieList"
      :key="movie.id"
      class="movieItem"
      @click="goMovieDetail(movie.id,index)"
    >
      <img :src="movie.src" :alt="movie.title">
      <div class="movieTitle" :title="movie.title">{{movie.title}}</div>
      <div class="actor" :title="movie.actor.join(' ')">{{movie.actor.join(' ')}}</div>
    </li>
  </ul>
</template>
<script>
export default {
  name: "movieList",
  props: ["movieList"],
  data: function() {
    return {};
  },
  methods: {
    goMovieDetail: function(movieId, index) {
      let herf = "/movieDetail";
      this.$emit("goDetail", index);
      this.$router.push(herf,function(){
        alert('stop')
      })
      // 用 class="movieItem" 添加锚点
      let movieItem = document.querySelectorAll(".movieItem");
      let total = movieItem[index].offsetTop;
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      // 平滑滚动，时长500ms，每10ms一跳，共50跳
      let step = total / 50;
      if (total > distance) {
        smoothDown();
      } else {
        let newTotal = distance - total;
        step = newTotal / 50;
        smoothUp();
      }
      function smoothDown() {
        if (distance < total) {
          distance += step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothDown, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
      function smoothUp() {
        if (distance > total) {
          distance -= step;
          document.body.scrollTop = distance;
          document.documentElement.scrollTop = distance;
          setTimeout(smoothUp, 10);
        } else {
          document.body.scrollTop = total;
          document.documentElement.scrollTop = total;
        }
      }
    },
    onScroll() {
      let scrolled =
        document.documentElement.scrollTop || document.body.scrollTop; // 586、1063分别为第二个和第三个锚点对应的距离
      if (scrolled >= 1063) {
        console.log("数量的空间");
      } else if (scrolled < 1063 && scrolled >= 586) {
        console.log("数量");
      } else {
        // console.log(scrolled);
      }
    }
  },
  mounted: function() {
    this.$nextTick(function() {
      window.addEventListener("scroll", this.onScroll);
    });
  }
};
</script>
<style lang="less" scoped>
.movieHeader a {
  float: right;
}
.moveList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  padding: 0.1rem;
  background: url(../../static/images/image10.jpg);
}
/* 解决justify-content: space-between;一行3列排版时最后一行2个元素时中间留空 */
.moveList:after {
  content: "";
  width: 30%;
}
.moveList li {
  width: 30%;
  max-height: 6rem;
  margin-top: 0.1rem;
  background: rgba(14, 160, 220, 0.4);
  border-radius: 0.06rem;
  overflow: hidden;
}
.moveList li img {
  width: 100%;
  height: 2.5rem;
}

.moveList li .movieTitle,
.moveList li .actor {
  padding: 0.04rem;
  height: 0.2rem;
  line-height: 0.2rem;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.moveList li .movieTitle {
  color: gold;
  font-weight: bold;
  font-size: 0.14rem;
}
.moveList li .actor {
  font-size: 0.12rem;
  font-style: italic;
  color: #ff9800;
}
</style>
