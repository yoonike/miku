<template>
  <div class="carouse">
    <swiper :options="swiperOption">
      <swiper-slide v-for="img in imgList" :key="img.id">
        <img :src="img.src" alt>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="hot">
      <span>热门搜索：</span>
      <router-link v-for="hot in hotList" :to="hot.href" :key="hot.id">{{hot.title}}</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "carouse",
  data: function() {
    return {
      imgUrls: [
        { src: "../../static/images/image1.jpg" },
        { src: "../../static/images/image2.jpg" },
        { src: "../../static/images/image3.jpg" },
        { src: "../../static/images/image4.jpg" },
        { src: "../../static/images/image5.jpg" }
      ],
      hotList: [
        {
          id: "video1",
          href: "../../static/video.mp4",
          title: "那年花开月正圆"
        },
        { id: "video2", href: "../../static/video.mp4", title: "猩球崛起3" },
        { id: "video3", href: "../../static/video.mp4", title: "神偷奶爸3" },
        { id: "video4", href: "../../static/video.mp4", title: "速度与激情8" },
        {
          id: "video5",
          href: "../../static/video.mp4",
          title: "轩辕剑之汉之云"
        },
        { id: "video6", href: "../../static/video.mp4", title: "缝纫机乐队" }
      ],
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationClickable: true,
        autoplay: true,
        autoplayDisableOnInteraction: true,
        loop: true,
        coverflow: {
          rotate: 30,
          stretch: 10,
          depth: 60,
          modifier: 2,
          slideShadows: true
        }
      }
    };
  },
  computed: {
    imgList: function() {
      return this.imgUrls.reverse();
    }
  }
};
</script>
<style lang="less" scoped>
.swiper-slide {
  width: 100% !important;
  min-height:3.5rem;
  position: relative;
}
.swiper-slide img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
}

.hot {
  background: rgba(170, 160, 150, 0.7);
  display: flex;
  justify-content: start;
  white-space: nowrap;
  overflow: auto;
}
.hot span {
  color: #152bd4f0;
}
.hot a {
  display: inline-block;
  text-decoration: none;
  color: rgba(15, 5, 25, 0.8);
  margin: 0 0.04rem;
}
</style>

