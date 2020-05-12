<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules" class="form">
      <el-form-item
        prop="seccode"
        class="inputbar"
      >
        <el-input
          class="log-input"
          v-model="form.seccode"
          placeholder="验证码"
          prefix-icon="icon-login_auth"
          @keydown.enter.native="login('form')"
        >
        </el-input>
		<!-- 验证码显示 -->
        <span class="checkCode" @click="createCode">{{ checkCode}}</span>
		<span @click="createCode">换一个</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        seccode: ''
      },
      checkCode: '',
      rules: {
        seccode: [{ required: true, message: '请输验证码', trigger: 'blur' }]
      }
    }
  },
  mounted () {
    this.createCode()
  },
  methods: {
    createCode () {
      var code = ''
      const codeLength = 4
      // 验证码的长度
      var dataArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      const random = [...dataArray]
      // 随机数
      for (let i = 0; i < codeLength; i++) { // 循环操作  
        let index = Math.floor(Math.random() * 36)
        // 取得随机数的索引（0~35）
        code += random[index]
        // 根据索引取得随机数加到code上
      }
      this.checkCode = code
      // 把code值赋给验证码  
    }
     }
     }
</script>
<style>
</style>
