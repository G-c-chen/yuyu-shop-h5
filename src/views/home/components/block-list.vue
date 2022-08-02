<template>
  <div class="app-component">
    <div class="list">
      <div
        class="item"
        @click="targetClick(item, index)"
        v-for="(item, index) in list"
        :key="index"
      >
        <van-image v-if="item.cover" lazy-load class="item-img" :src="item.cover" alt="" />
      </div>
      <!-- <div class="item-content" :class="[`content-${curIndex%4}`]" v-if="insertPos === index && ishowContent">
          <div class="content-header">
            <div class="header-title">
              <span class="title-txt">{{curItem.title}}</span>
              <span class="title-en">红包祝福语</span>
            </div>
            <span class="header-btn" @click="exchangeClick(curItem)">确认兑换</span>
          </div>
          <div class="content-video">
            <video v-if="curItem.video" :src="curItem.video" controls></video>
            <span v-else>暂无视频展示</span>
          </div>
        </div> -->
    </div>
    <van-popup v-model="showContentPop" class="content-pop">
      <div class="item-content">
        <div class="content-header">
          <div class="header-title">
            <span class="title-txt">{{ curItem.title }}</span>
            <span class="title-en">{{curItem.sub_title || ''}}</span>
          </div>
          <span class="header-btn" @click="exchangeClick(curItem)"
            >确认兑换</span
          >
        </div>
        <div class="content-video">
          <video v-if="curItem.video" :src="curItem.video" controls></video>
          <span v-else>暂无视频展示</span>
        </div>
      </div>
    </van-popup>
    <van-popup class="exchange-pop" v-model="showPop">
      <div class="pop-content">
        <p class="pop-title">兑换步骤</p>
        <p class="row-txt">1、关注公众号</p>
        <img class="code-img" src="../../../assets/images/kefu.jpg" alt="" />
        <p class="row-txt">2、发送抖音订单号和兑换的款式名称</p>
        <img class="send-img" src="../../../assets/images/send.jpg" alt="" />
      </div>
    </van-popup>
  </div>
</template>

<script>
import ClipboardJS from "clipboard";
import { Toast } from "vant";
import { HomeList } from "../js/json";
export default {
  data() {
    return {
      ishowContent: false,
      showPop: false,
      curItem: {},
      curIndex: 0,
      insertPos: 0,
      list: HomeList,
      showContentPop: false,
    };
  },
  methods: {
    // foramtImg(title) {
    //   if (!title) {
    //     return false;
    //   }
    //   let cover = require(`../../../assets/七夕红包/${title}/cover.jpg`) || '';
    //   return cover ? cover : false;
    // },
    // formatVideo(title) {
    //   if (!title) {
    //     return false;
    //   }
    //   let video = require(`../../../assets/七夕红包/${title}/video.mp4`);
    //   return video ? video : false;
    // },
    targetClick(item, index) {
      this.curItem = item;
      this.showContentPop = true;
      return;
      let pos = parseInt(index / 3) * 3 + 3;
      if (this.curItem && this.curItem.showContent) {
        console.log("再次选中");
        this.curItem.showContent = false;
      }
      if (!item.showContent) {
        item.showContent = true;
        this.ishowContent = true;
        console.log("显示");
        // this.list.splice(pos, 0, { type: "content" });
      } else {
        item.showContent = false;
        this.ishowContent = false;
        console.log("隐藏");
      }
      this.curIndex = index;
      this.curItem = item;
      this.insertPos = pos;
      console.log(index, "index", pos, "pos", item.showContent, "show");
      // if (this.insertPos) {
      //   this.list.splice(this.insertPos, 1);
      // }
      // if (index > this.insertPos) {
      //   this.curIndex--;
      // }
      // if (item.showContent) {
      //   item.showContent = false;
      //   this.insertPos = 0;
      // } else {
      //   if (this.curIndex !== index) {
      //     this.curItem.showContent = false;
      //   }
      //   item.showContent = true;
      //   this.ishowContent = true;
      //   this.list.splice(pos, 0, { type: "content", showContent: true });
      // }
      // console.log(this.ishowContent, "item.showContent", pos, this.curIndex);

      // index/4 * 4 + 4;
    },
    exchangeClick(info) {
      let text = info.title;
      let clipboard = new ClipboardJS(".header-btn", {
        text: () => text,
      });
      clipboard.on("success", () => {
        Toast("复制名称成功");
      });
      clipboard.on("error", () => {});
      this.showPop = true;
    },
  },
};
</script>

<style lang="less" scoped>
.app-component {
  width: 750px;
  overflow: hidden;
}
.list {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 19px 0;
  .item {
    margin: 12px;
    font-size: 0;
    .item-img {
      width: 154px;
      border-radius: 22px;
      box-shadow: 0px 6px 14px 3px rgba(0, 0, 0, 0.25);
      overflow: hidden;
    }
  }
}
.exchange-pop {
  background: transparent;
  .pop-content {
    width: 600px;
    background-color: #fff;
    padding: 30px;
    border-radius: 12px;
    .pop-title {
      font-size: 38px;
      color: #333;
      font-weight: 800;
    }
    .row-txt {
      font-size: 32px;
      color: #333;
      text-align: left;
    }
    .code-img {
      width: 500px;
    }
    .send-img {
      width: 500px;
      margin-top: 20px;
    }
  }
}
.content-pop {
  background: transparent;
}
.item-content {
  width: 660px;
  // height: 917px;
  min-height: 500px;
  background-color: #e8e6e6;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  // margin-bottom: 10px;
  // padding-bottom: 30px;
  // margin-top: 20px;
  // &::before {
  //   content: '';
  //   width: 0;
  //   height: 0;
  //   border-bottom: 40px solid #e8e6e6;
  //   border-right: 20px solid transparent;
  //   border-left: 20px solid transparent;
  //   position: absolute;
  //   top: -30px;
  // }
  &.content-0 {
    &::before {
      left: 12%;
    }
  }
  &.content-1 {
    &::before {
      left: 36%;
    }
  }
  &.content-2 {
    &::before {
      right: 36%;
    }
  }
  &.content-3 {
    &::before {
      right: 12%;
    }
  }
  .content-header {
    display: flex;
    align-items: center;
    padding: 0 0 40px;
    justify-content: space-between;
    align-items: center;
    .header-title {
      display: flex;
      flex-direction: column;
      font-size: 38px;
      font-weight: 600;
      color: #000000;
      text-align: left;
      .title-txt {
      }
      .title-en {
        font-size: 26px;
        text-align: left;
        color: #666;
        font-weight: 400;
      }
    }
    .header-btn {
      display: inline-block;
      width: 190px;
      height: 71px;
      line-height: 71px;
      text-align: center;
      background-color: #1aad19;
      color: #fff;
      font-size: 36px;
      border-radius: 12px;
    }
  }
}
.content-video {
  width: 683px;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 676px;
  margin: 0 auto;
  video {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
  video:focus {
    outline: none;
  }
}
</style>
