<template>
  <div class="homePage">
    <div class="movieHeader">
      <h4>最新电影</h4>
      <router-link to="/moviePage">更多 ></router-link>
    </div>
    <MovieList :movieList="movieList" v-on:goDetail="jump($event)"></MovieList>
  </div>
</template>

<script>
import MovieList from "@/components/MovieList.vue";
export default {
  name: "HomePage",
  components: { MovieList },
  data: function() {
    return {
      movieList: [
        {
          id: "movie1",
          src: "../../static/video/image1.jpg",
          title: "无双",
          actor: ["周润发", "郭富城"]
        },
        {
          id: "movie2",
          src: "../../static/video/image2.jpg",
          title: "冰海陷落",
          actor: ["杰拉德·巴特勒", "加里·奥德曼"]
        },
        {
          id: "movie3",
          src: "../../static/video/image3.jpg",
          title: "古墓丽影：源起之战",
          actor: ["艾丽西亚·维坎德", "多米尼克·威斯特"]
        },
        {
          id: "movie4",
          src: "../../static/video/image4.jpg",
          title: "海王",
          actor: ["杰森·莫玛", "艾梅柏·希尔德"]
        },
        {
          id: "movie5",
          src: "../../static/video/image5.jpg",
          title: "环太平洋：雷霆再起",
          actor: ["约翰·博耶加", "斯科特·伊斯特伍德"]
        },
        {
          id: "movie6",
          src: "../../static/video/image6.jpg",
          title: "毒液：致命守护者",
          actor: ["汤姆·哈迪", "米歇尔·威廉姆斯"]
        },
        {
          id: "movie7",
          src: "../../static/video/image7.jpg",
          title: "王牌保镖",
          actor: ["瑞恩·雷诺兹", "塞缪尔·杰克逊"]
        },
        {
          id: "movie8",
          src: "../../static/video/image8.jpg",
          title: "西游记女儿国",
          actor: ["郭富城", "冯绍峰"]
        },
        {
          id: "movie9",
          src: "../../static/video/image9.jpg",
          title: "超人总动员2",
          actor: ["格雷格·T·尼尔森", "霍利·亨特"]
        },
        {
          id: "movie10",
          src: "../../static/video/image10.jpg",
          title: "铁血战士/铁血战士4",
          actor: ["波伊德·霍布鲁克", "奥立薇娅·玛恩"]
        }
      ]
    };
  },

  methods: {
    jump: function() {}
  },
  mounted: function() {}
};
</script>
<style lang="less" scoped>
.movieHeader {
  padding: 0.1rem;
  height: 0.3rem;
  line-height: 0.3rem;
  color: rgba(95, 125, 135, 1);

  background: rgba(95, 125, 135, 0.5);
}
.movieHeader h4 {
  float: left;
}
.movieHeader a {
  text-decoration: none;
  cursor: pointer;
  color: rgba(95, 125, 135, 1);
}
</style>

