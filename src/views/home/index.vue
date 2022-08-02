<template>
  <div class="app-page">
    <!-- 标题 -->
    <div class="header">
      <div class="header-title">
        <span class="title-txt">鲸奇</span>
        <span class="title-en">design</span>
      </div>
      <span class="header-btn" @click.stop="showCode">关注</span>
    </div>
    <div class="fixed-header" v-if="showFixHeader">
      <span>JINGQI  design</span>
      <span class="header-btn" @click.stop="showCode">关注</span>
    </div>
    <!-- 推荐模块 -->
    <recommend />
    <!-- 红包模块 -->
    <div class="block-title" :class="{animte: addAnimation}">
      <span class="main-title">欢迎</span>
      <span class="sub-title">来到数字世界</span>
    </div>
    <blockList />
    <van-popup class="code-pop" v-model="showCodePop">
      <div class="code-content">
        <p>关注公众号领取现金红包</p>
        <img src="../../assets/images/kefu.jpg" alt="">
      </div>
    </van-popup>
  </div>
</template>

<script>
import recommend from "./components/recommend.vue";
import blockList from "./components/block-list.vue";
export default {
  components: { recommend, blockList },
  data() {
    return {
      showFixHeader: false,
      addAnimation: false,
      showCodePop: false,
    };
  },
  methods: {
    showCode() {
      this.showCodePop = true;
    }
  },
  mounted() {
    let that = this;
    window.addEventListener(
      "scroll",
      function() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        // console.log(scrollTop, 'scrollTop');
        if (scrollTop > 100) {
          that.showFixHeader = true;
        } else {
          that.showFixHeader = false;
        }
        if (scrollTop > 500) {
          that.addAnimation = true;
        } else if (scrollTop < 480) {
          that.addAnimation = false;
        }
        // console.log(that.showFixHeader, 'that.showFixHeader');
      }
    );
  },
};
</script>

<style lang="less" scoped>
.app-page {
  max-width: 10rem;
  margin: 0 auto;
  width: 750px;
  overflow: hidden;
}
.header {
  display: flex;
  align-items: center;
  padding: 40px;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #fff;
  .header-title {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 80px;
    line-height: 80px;
    font-weight: 700;
    color: #000000;
    .title-txt {
    }
    .title-en {
      font-size: 48px;
      line-height: 48px;
      color: #8c8c8c;
      font-weight: 400;
    }
  }
  .header-btn {
    display: inline-block;
    width: 174px;
    height: 77px;
    line-height: 77px;
    text-align: center;
    background-color: #facf43;
    color: #080808;
    font-size: 48px;
    border-radius: 12px;
  }
}
.block-title {
  text-align: left;
  margin-top: 40px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  .main-title {
    font-size: 65px;
    line-height: 65px;
    color: #000;
    font-weight: 600;
  }
  .sub-title {
    margin-top: 20px;
    font-size: 48px;
    color: #000;
    font-weight: 600;
    transition: all 2s;
  }
}
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 90px;
  background-color: #DAE1E6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 48px;
  color: #000;
  padding: 0 34px;
  box-sizing: border-box;
  .header-btn {
    display: inline-block;
    width: 167px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #facf43;
    color: #080808;
    font-size: 36px;
    border-radius: 12px;
  }
}
.animte {
  .main-title {
    // transform: translateX(30px) scale(1.1);
  }
  .sub-title {
    transform: translateX(380px) scale(1.1);

  }
}
.code-pop {
  background: transparent;
  .code-content {
    width: 600px;
    padding: 30px;
    background-color: #fff;
    border-radius: 12px;
    p {
      font-size: 36px;
      font-weight: 700;
    }
    img {
      width: 400px;
    }
  }
}
</style>
