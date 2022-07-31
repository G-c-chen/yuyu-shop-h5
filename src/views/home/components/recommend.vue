<!-- 推荐模块 -->
<template>
  <div class="app-component">
   <div class="video-box">
     <video :src="curItem.video" controls></video>
   </div>
    <swiper class="swiper-box" :options="swiperOption" ref="mySwiper">
      <swiper-slide class="slide-item" v-for="(item, index) in list" :key="index">
        <div class="swiper-content" @click="sclectitem(item, index)">
          <img :src="item.cover" alt="">
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import {recommendList} from '../js/json';
export default {
  components: {swiper, swiperSlide},
  data() {
    return {
      curIndex: 0,
      swiperOption: {
        // effect: "fade",
        fadeEffect: {
          crossFade: true,
        },
        speed: 800,
        initialSlide: 0,
        // on: {
        //   slideChangeTransitionStart() {
        //     if (this.activeIndex === 5) {
        //       self.currentIndex = 1;
        //     } else {
        //       self.currentIndex = this.activeIndex;
        //     }
        //   },
        // },
      },
      list: recommendList,
    }
  },
  computed: {
    curItem() {
      return this.list[this.curIndex];
    },
  },
  methods: {
    sclectitem(item, index) {
      this.curIndex = index;
    }
  }
};
</script>

<style lang="less" scoped>
.app-component {
}
.video-box {
  width: 696px;
  height: 520px;
  margin: 0 auto;
}
video {
  width: 696px;
  max-height: 520px;
  object-fit:contain;
}
.swiper-box {
  padding: 20px 480px 20px 27px;
}
.slide-item {
  width: 205px;
  box-shadow: none;
}
.swiper-content {
  background-color: #fff;
  box-shadow: 0px 6px 14px 3px rgba(0, 0, 0, 0.25);
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
  width: 205px;
  img {
    width: 205px - 40px;
    
  }
}

</style>
