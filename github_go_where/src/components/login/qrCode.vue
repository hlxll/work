
<template>
    <div class="div_box">
      <div id="qrCode" ref="qrCodeDiv" class="qr_code"></div>
      <div class="text">扫码登录</div>
      <div ref="codeData"></div>
    </div>
</template>

<script>
  import Vue from 'vue'
  import axios from 'axios'
  import Vueaxios from 'vue-axios'
  Vue.use(Vueaxios, axios)
  import QRCode from 'qrcodejs2';  //在指定页面引入，也可以在main.js里面全局引用
    export default {
        name: "qrcode",
      data() {
        return {}
      },
      mounted: function () {
        this.$nextTick(function () {
          this.bindQRCode()
        })
      },
      methods: {
        bindQRCode: function () {
          new QRCode(this.$refs.qrCodeDiv, {
            text: 'http://127.0.0.1:8081/codeLogin',
            width: 200,
            height: 200,
            colorDark: "#333333", // 二维码颜色
            colorLight: "#ffffff", // 二维码背景色
            correctLevel: QRCode.CorrectLevel.L // 容错率，L/M/H
          })
        }
      }
    }
</script>

<style>
  .div_box{
    width: 300px;
    height: 300px;
    margin: auto;
    margin-top: 100px;
  }
  .qr_code{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text{
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
  }
</style>
