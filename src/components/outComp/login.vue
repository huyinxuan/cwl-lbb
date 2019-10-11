<template>
  <div class="login" id="login">
    <div class="user-top">
      <a href="javascript:;" @click="$router.push('/register')" class="fr">注册</a>
    </div>
    <dl class="user-title">
      <h1 style="font-size:0.68rem">登录老表币</h1>
    </dl>
    <div class="user-form">
      <div class="user-input-group">
        <input growing-ignore="true" name="login_name" placeholder="手机号码" />
      </div>
      <div class="user-input-group">
        <input growing-ignore="true" name="password" placeholder="密码" type="password" />
      </div>
      <div id="captcha_wrap"></div>
      <div class="user-submit-group">
        <button class="user-submit" disabled>
          <span>登录</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
.login{
    font-size: 0.28rem;
    text-align: left;
}
.user-top {
    height: 1.1rem;
    line-height: 1.1rem;
    padding: 0 0.6rem
}

.user-top a {
    color: #1882d4
}

.user-title {
    padding: 0.8rem 0.6rem 0;
    height: 1.84rem
}

.user-title dt {
    height: 0.8rem;
    font-size: 0.6rem
}

.user-title dd {
    color: #c5cfd5;
    font-size: 0.32rem
}

.user-input-group {
    height: .52rem;
    padding: 0.6rem 0.6rem 0
}

.user-input-group.captcha {
    position: relative
}

.user-input-group.captcha .captcha-image {
    position: absolute;
    top: 0.6rem;
    right: 0.6rem;
    width: 1.18rem;
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: center
}

.user-input-group.captcha .captcha-image img {
    height: 100%;
    float: right
}

.user-input-group.captcha .captcha-image .loading {
    display: inline-block;
    float: none;
    height: 0.32rem
}

.user-input-group input {
    border: 0 none;
    border-bottom: 0.01rem solid #c5cfd5;
    width: 6.3rem;
    height: 0.32rem;
    font-size: 0.32rem;
    color: #1f3f59;
    padding-bottom: 0.2rem
}

.user-input-group input::-webkit-input-placeholder {
    color: #c5cfd5
}

.user-input-group input::-moz-placeholder {
    color: #c5cfd5
}

.user-input-group input:-ms-input-placeholder {
    color: #c5cfd5
}

.user-input-group input:focus {
    border-color: #1882d4
}

.user-form .user-ali-group {
    padding-left: 0.6rem;
    padding-right: 0.6rem
}

.user-submit-group {
    height: 0.88rem;
    padding: 0.68rem 0.6rem 0
}

.user-submit-group button {
    width: 6.3rem;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    background: #1882d4;
    font-size: 0.32rem;
    color: #fff;
    border-radius: 0.1rem;
}

.user-submit-group button .loading {
    display: none
}

.user-submit-group button.loading {
    background: #c5cfd5
}

.user-submit-group button.loading span {
    display: none
}

.user-submit-group button.loading .loading {
    display: inline-block;
    height: 0.5rem
}

.user-submit-group button.disabled,.user-submit-group button:disabled {
    background: #c5cfd5
}

.user-ga-lost {
    padding: 0.4rem 0.6rem 0
}

.user-ga-lost a {
    color: #1882d4
}

.auth-code-ctl span {
    color: #c5cfd5
}

.auth-code-ctl span i {
    color: #1f3f59
}

.input-mode .user-top,.verify,.webview-login .nav,.webview-login .user-top a {
    display: none
}

#captcha_wrap {
    padding-top: 0.6rem
}
</style>
