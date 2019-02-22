<template>
  <div class="moviePage">
    <div class="title">
      <span>电影</span>
      <div class="info">
        共有
        <span>{{movieMessage}}</span>部影片
      </div>
      <div class="movieType" v-for="type in movieTypes" :key="type.id">
        <span class="typeTitle">{{type.title}}：</span>
        <ul>
          <li
            v-for="item in type.list"
            :class="{active:movieClassAry.indexOf(item.id) != -1}"
            @click="addClass(item.id)"
            :key="item.id"
          >{{item.title}}</li>
        </ul>
      </div>
    </div>
    <MovieList :movieList="movieList"></MovieList>
  </div>
</template>
<script>
import MovieList from "@/components/MovieList.vue";

export default {
  name: "moviePage",
  components: { MovieList },
  data: function() {
    return {
      movieClassAry: [],
      movieTypes: [
        {
          title: "频道",
          list: [
            {
              title: "电影",
              id: "movie1"
            },
            {
              title: "电视剧",
              id: "movie2"
            },
            {
              title: "动漫",
              id: "movie3"
            },
            {
              title: "综艺",
              id: "movie4"
            }
          ]
        },
        {
          title: "类型",
          list: [
            {
              title: "喜剧",
              id: "movie5"
            },
            {
              title: "爱情",
              id: "movie6"
            },
            {
              title: "恐怖",
              id: "movie7"
            },
            {
              title: "动作",
              id: "movie8"
            },
            {
              title: "科幻",
              id: "movie9"
            }
          ]
        },
        {
          title: "地区",
          list: [
            {
              title: "内地"
            },
            {
              title: "美国"
            },
            {
              title: "香港"
            },
            {
              title: "台湾"
            },
            {
              title: "韩国"
            },
            {
              title: "日本"
            },
            {
              title: "泰国"
            },
            {
              title: "内地"
            },
            {
              title: "美国"
            },
            {
              title: "香港"
            },
            {
              title: "台湾"
            },
            {
              title: "韩国"
            },
            {
              title: "日本"
            },
            {
              title: "泰国"
            }
          ]
        },
        {
          title: "年代",
          list: [
            {
              title: "2019"
            },
            {
              title: "2018"
            },
            {
              title: "2017"
            },
            {
              title: "2016"
            },
            {
              title: "2015"
            },
            {
              title: "2014"
            }
          ]
        },
        {
          title: "资源",
          list: [
            {
              title: "正片"
            },
            {
              title: "预告片"
            },
            {
              title: "花絮"
            }
          ]
        }
      ],
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
        },
        {
          id: "movie11",
          src: "../../static/video/image10.jpg",
          title: "铁血战士/铁血战士4",
          actor: ["波伊德·霍布鲁克", "奥立薇娅·玛恩"]
        }
      ]
    };
  },
  methods: {
    addClass: function(itemId) {
      this.movieClassAry.push(itemId);
    }
  },
  computed: {
    movieMessage: function() {
      return this.movieList.length;
    }
  }
};
</script>
<style lang="less" scoped>
.info,
.info span,
.movieType ul,
.movieType li {
  display: inline-block;
}
.moviePage {
  background: rgba(0, 0, 0, 0.1);
}
.title {
  text-align: left;
}
.info span {
  color: seagreen;
  font-weight: bold;
  margin: 0 0.04rem;
}
.movieType {
  text-align: left;
  margin: 0.1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
}
.typeTitle {
  color: salmon;
  padding: 0.04rem;
  width: 0.5rem;
  white-space: nowrap;
}
.movieType ul {
  overflow: auto;
  white-space: nowrap;
}
.movieType li {
  border: 1px solid salmon;
  margin: 0 0.04rem;
  padding: 0.04rem;
  cursor: pointer;
}
.movieType li.active {
  background: salmon;
}
</style>

