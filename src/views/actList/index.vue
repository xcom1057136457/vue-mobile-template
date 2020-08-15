<template>
  <div class="login">
    <van-nav-bar title="Act List" left-arrow @click-left="onClickLeft" />
    <van-sticky>
      <van-search placeholder="Please Input Something" shape="round"></van-search>
    </van-sticky>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="Load SUccess">
      <van-list
        v-model="loading"
        :finished="finished"
        finished-text="Nothing to Load"
        @load="onLoad"
      >
        <div class="detailWrapper">
          <div
            v-for="(item,index) in postersData"
            :key="index"
            :style="{ 'animation': 'bounceInRight ' + ((index + 1) * 0.2 + 1) + 's 1' }"
          >
            <div>
              <van-image :src="item.pic" fit="cover"></van-image>
            </div>
            <div>
              <div class="title">{{ item.title }}</div>
              <div class="des">{{ item.preferential }}</div>
              <div class="date">{{ item.date }}</div>
            </div>
          </div>
        </div>
      </van-list>
    </van-pull-refresh>
    <div
      :class=" filterBoxShow ? 'filterBox animate__animated animate__bounceInRight' : 'filterBox animate__animated animate__bounceOutRight' "
      @touchmove="onTouchMove"
      @click="openPop"
    >
      <span>Filter</span>
      <van-icon name="filter-o" />
    </div>
    <van-popup
      v-model="popShow"
      position="right"
      :style="{ height: '100%', width: '90%' }"
      closeable
      @closed="showFilter"
      :overlay-style="{ 'background-color': 'rgba(255,255,255,.6)' }"
    >
      <div class="filterWrapper">
        <div class="title">Filter</div>
        <div>
          <div class="topText">Time Range</div>
          <div class="timeSelect">
            <van-row>
              <van-col span="11">
                <van-field label="文本" placeholder="Start Time" left-icon="debit-pay" />
              </van-col>
              <van-col span="2">····</van-col>
              <van-col span="11">
                <van-field label="文本" placeholder="End Time" left-icon="debit-pay" />
              </van-col>
            </van-row>
          </div>
        </div>

        <div>
          <div class="topText">Type</div>
          <div class="timeSelect">
            <qk-check-box 
              :baseData="typeData" 
              :model="typeCheckData"
              @checkConfirm="typeHandler"
            ></qk-check-box>
          </div>
        </div>

        <div>
          <div class="topText">Status</div>
          <div class="timeSelect">
            <qk-check-box 
              :baseData="statusData" 
              :model="statusCheckData"
              @checkConfirm="statusHandler"
            ></qk-check-box>
          </div>
        </div>

        <div class="btnsWrapper">
          <van-row>
            <van-col span="12">
              <van-button block @click="resetHandler">Reset</van-button>
            </van-col>
            <van-col span="12">
              <van-button block color="#DF4D57">Determine</van-button>
            </van-col>
          </van-row>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import {
  Button,
  Search,
  NavBar,
  Sticky,
  Image,
  PullRefresh,
  List,
  Icon,
  Popup,
  Row,
  Col,
  Field,
} from "vant";
import CheckBox from './checkbox'
export default {
  data() {
    return {
      isLoading: false,
      postersData: [
        {
          pic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=15812971,3978629317&fm=26&gp=0.jpg",
          title: "Happy Cat Shop",
          preferential: "越花越会花",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3166264142,2280838940&fm=26&gp=0.jpg",
          title: "Global Discounts",
          preferential: "最高笔笔返13%",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3900635106,3686702160&fm=26&gp=0.jpg",
          title: "Bank of gift certificates",
          preferential: "天天半价日日享",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=15812971,3978629317&fm=26&gp=0.jpg",
          title: "Happy Cat Shop",
          preferential: "越花越会花",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3166264142,2280838940&fm=26&gp=0.jpg",
          title: "Global Discounts",
          preferential: "最高笔笔返13%",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3900635106,3686702160&fm=26&gp=0.jpg",
          title: "Bank of gift certificates",
          preferential: "天天半价日日享",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=15812971,3978629317&fm=26&gp=0.jpg",
          title: "Happy Cat Shop",
          preferential: "越花越会花",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3166264142,2280838940&fm=26&gp=0.jpg",
          title: "Global Discounts",
          preferential: "最高笔笔返13%",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3900635106,3686702160&fm=26&gp=0.jpg",
          title: "Bank of gift certificates",
          preferential: "天天半价日日享",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=15812971,3978629317&fm=26&gp=0.jpg",
          title: "Happy Cat Shop",
          preferential: "越花越会花",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3166264142,2280838940&fm=26&gp=0.jpg",
          title: "Global Discounts",
          preferential: "最高笔笔返13%",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3900635106,3686702160&fm=26&gp=0.jpg",
          title: "Bank of gift certificates",
          preferential: "天天半价日日享",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=15812971,3978629317&fm=26&gp=0.jpg",
          title: "Happy Cat Shop",
          preferential: "越花越会花",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3166264142,2280838940&fm=26&gp=0.jpg",
          title: "Global Discounts",
          preferential: "最高笔笔返13%",
          date: "2020.6.1-2020.8.1",
        },
        {
          pic:
            "https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3900635106,3686702160&fm=26&gp=0.jpg",
          title: "Bank of gift certificates",
          preferential: "天天半价日日享",
          date: "2020.6.1-2020.8.1",
        },
      ],
      finished: true,
      loading: false,
      popShow: false,
      filterBoxShow: true,
      typeData: [
        {
          label: 'All',
          data: 0
        },
        {
          label: 'Domestic',
          data: 1
        },
        {
          label: 'Overseas',
          data: 2
        }
      ],
      statusData: [
        {
          label: 'All',
          data: 0
        },
        {
          label: 'Not Begin',
          data: 1
        },
        {
          label: 'ongoing',
          data: 2
        },
        {
          label: 'End',
          data: 3
        }
      ],
      typeCheckData: 0,
      statusCheckData: 0
    };
  },
  components: {
    "van-button": Button,
    "van-search": Search,
    "van-nav-bar": NavBar,
    "van-sticky": Sticky,
    "van-image": Image,
    "van-pull-refresh": PullRefresh,
    "van-list": List,
    "van-icon": Icon,
    "van-popup": Popup,
    "van-row": Row,
    "van-col": Col,
    "van-field": Field,
    "qk-check-box": CheckBox
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
        this.count++;
      }, 1000);
    },
    onLoad() {},
    onClickLeft() {},
    onTouchMove(e) {
      let filterBox = document.getElementsByClassName("filterBox")[0];
      let html = document.getElementsByTagName("html")[0];
      let topCount = e.touches[0].clientY;
      let htmlHeight = html.clientHeight;
      let filterBoxHeight = filterBox.clientHeight;

      if (topCount > 75 && topCount < htmlHeight - 54) {
        topCount = topCount - filterBoxHeight / 2;
        filterBox.style.top = topCount + "px";
      }
      e.preventDefault();
    },
    openPop() {
      this.filterBoxShow = false;
      setTimeout(() => {
        this.popShow = true;
      }, 500);
    },
    showFilter() {
      this.filterBoxShow = true;
    },
    resetHandler(){
      this.typeCheckData = 0;
      this.statusCheckData = 0;
    },
    typeHandler(val){
      this.typeCheckData = val
    },
    statusHandler(val){
      this.statusCheckData = val
    }
  },
};
</script>

<style lang="less" scoped>
.van-nav-bar {
  color: black;
  /deep/ .van-icon,
  /deep/ .van-nav-bar__text,
  /deep/ .van-nav-bar__title {
    color: black;
    font-size: 18px;
  }
}

.van-pull-refresh {
  padding: 10px;
}

/deep/ .van-list__finished-text {
  line-height: unset;
}

.detailWrapper {
  .van-image {
    width: 85px;
    height: 85px;
  }
  > div {
    background-color: #fff;
    box-shadow: 0px 4px 18px 0px #ebf1ff;
    padding: 10px;
    display: flex;
    margin-bottom: 10px;
    // border-radius: 10px;
    > div {
      &:first-child {
        margin-right: 15px;
      }
      &:last-child {
        display: flex;
        flex-direction: column;
        > div {
          flex: 1;
          &:first-child {
            font-size: 17px;
            color: #333;
            // font-weight: bold;
          }
          &:nth-child(2) {
            font-size: 15px;
            color: #666666;
          }
          &:last-child {
            display: flex;
            font-size: 15px;
            align-items: flex-end;
            color: #666666;
          }
        }
      }
    }
  }
}

.filterBox {
  position: fixed;
  top: 110px;
  right: -20px;
  background-color: #fff;
  font-size: 16px;
  padding: 10px 15px;
  padding-right: 35px;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: 0px 4px 12px 0px #ebf1ff;
  display: flex;
  align-items: center;
  color: #666;
  > span {
    display: inline-block;
    margin-right: 5px;
  }
}

.filterWrapper {
  padding: 20px 20px 0 20px;
  height: 100%;
  position: relative;
  /deep/ .van-cell__title.van-field__label {
    display: none;
  }
  /deep/ .van-cell.van-field {
    border: 1px solid #DEDEDE;
    padding: 5px 10px;
  }
  /deep/ .van-cell.van-field {
    display: flex;
    align-items: center;
  }
  .topText {
    font-size: 14px;
    margin-bottom: 15px;
  }
  > .title {
    font-size: 18px;
  }
  > div:nth-child(2) {
    margin-top: 30px;
  }
  > div:not(:first-child) {
    margin-top: 20px;
    margin-bottom: 35px;
  }
  .timeSelect {
    > .van-row {
      display: flex;
      align-items: center;
      > .van-col {
        &:nth-child(2) {
          display: flex;
          justify-content: center;
        }
      }
    }
  }
  .btnsWrapper {
    position: absolute;
    bottom: 0;
    right: 10px;
    left: 10px;
  }
}
</style>