<template>
  <div class="page-register">
    <nav class="page-nav">
      <a href="javascripit:;" @click="$router.push('/login')" class="fr">登录</a>
    </nav>
    <h1>老表币手机注册</h1>
    <div class="login-name-form">
      <input
        growing-ignore="true"
        name="phone"
        type="tel"
        autocomplate="new-password"
        maxlength="11"
        placeholder="手机号码"
        style="width:96%"
      />
      <div class="check-code">
        <input type="text" id="input" v-model="code" placeholder="验证码" />
        <input type="button" id="checkCode" class="code" v-model="checkCode" οnclick="createCode()" />
        <a href="#" @click="createCode()">看不清楚</a><br>
        <!-- <input type="button" value="验证" @click="validate()" /> -->
      </div>

      <button class="submit">下一步</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
        code: '',
        checkCode: '',
    };
  },
  computed: {},
  created() {
    this.createCode();
  },
  mounted() {},
  watch: {},
  methods: {
    createCode() {
      this.checkCode = ''
      var codeLength = 5; //验证码的长度
      var random = new Array(
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ); //随机数
      for (var i = 0; i < codeLength; i++) {
        //循环操作
        var charIndex = Math.floor(Math.random() * 36); //取得随机数的索引
        this.checkCode += random[charIndex]; //根据索引取得随机数加到code上
      }
    //   this.checkCode = this.code; //把code值赋给验证码
    },
    validate() {
      var inputCode = document.getElementById("input").value.toUpperCase(); //取得输入的验证码并转化为大写
      if (inputCode.length <= 0) {
        //若输入的验证码长度为0
        alert("请输入验证码！"); //则弹出请输入验证码
      } else if (inputCode != this.code) {
        //若输入的验证码与产生的验证码不一致时
        alert("验证码输入错误！"); //则弹出验证码输入错误
        createCode(); //刷新验证码
      } else {
        //输入正确时
        alert("^-^"); //弹出^-^
      }
    }
  },
  components: {}
};
</script>

<style scoped lang="less">
.page-register {
  width: 7.5rem;
  overflow: hidden;
  font-size: 0.28rem;
  text-align: left;
}
.login-name-form {
  margin: 1rem 0 0.6rem;
  padding: 0 0.6rem;
  .check-code{
      display: flex;
      justify-content: space-between;
      align-items: center;
  }
  input{
      border-bottom: 1px solid #c5cfd5;
      margin-bottom: 0.5rem;
      height: .6rem;
  }
  a{
     margin-bottom: 0.5rem; 
     margin-bottom: 0.5rem;
     height: .6rem;
     line-height: 0.6rem;
     padding: 0rem 0.1rem;
    background: #fff;
    border-radius: 0.1rem;
    border: none;
    font-size: 0.3rem;
    font-weight: 400;
    color: #1882d4;
    border: 1px solid #1882d4;
  }
  .code{
      border:none;
      width: 1.3rem;
  }
}
.page-register .page-nav {
  height: 1.1rem;
  padding: 0 0.6rem;
  line-height: 1.1rem;
}

.page-register .page-nav a {
  height: 1.1rem;
  color: #1882d4;
}

.page-register .page-nav a i {
  color: #8c9fad;
}

.page-register h1 {
  padding-top: 0.64rem;
  font-size: 0.6rem;
  height: 0.8rem;
  padding-left: 0.6rem;
}

.page-register h2 {
  padding-left: 0.6rem;
  color: #8c9fad;
  height: 0.28rem;
}

.page-register h2.warning {
  color: #d14b64;
}

.page-register h2.warning i {
  width: 0.28rem;
  vertical-align: unset;
  padding-right: 0.1rem;
}

.page-register button.link {
  color: #1882d4;
  margin: 0.6rem 0;
  font-size: 0.28rem;
  height: 0.28rem;
}

.page-register button.link:disabled {
  color: #c5cfd5;
}

.page-register button.submit {
  width: 100%;
  height: 0.88rem;
  font-size: 0.32rem;
  color: #fff;
  background: #1882d4;
  border-radius: 0.1rem;
}

.page-register button.submit:disabled {
  background: #c5cfd5;
}

.page-register input:focus {
  border-width: 0.02rem;
  border-color: #1882d4;
}

.page-register .to-register {
  margin-left: 0.6rem;
  color: #1882d4;
}

.page-register .inviter {
  margin-top: 0.6rem;
  margin-left: 0.6rem;
  color: #8c9fad;
}

.page-register .inviter em {
  vertical-align: unset;
}
</style>
