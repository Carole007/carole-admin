<template>
  <div class="content">
    <div class="login-bg" style="overflow: hidden;">
      <div class="cover-slate"></div>
      <div class="login">
        <el-form ref="loginRef" :model="loginForm" :rules="loginRules" class="login-form">
          <h3 class="title">Carole后台管理系统</h3>
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" type="text" size="large" auto-complete="off" placeholder="账号">
              <template #prefix>
                <svg  class="el-input__icon input-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" fill="var(--el-color-primary-light-6)" ></path></svg>
                </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="loginForm.password" type="password" size="large" auto-complete="off" placeholder="密码"
              @keyup.enter="handleLogin">
              <template #prefix>
                <svg class="el-input__icon input-icon"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 448 512"><path d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9c40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0C139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zM264 408c0 22.1-17.9 40-40 40s-40-17.9-40-40v-48c0-22.1 17.9-40 40-40s40 17.9 40 40v48z" fill="var(--el-color-primary-light-6)"></path></svg>
               </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="code" v-if="captchaEnabled">
            <el-input v-model="loginForm.code" size="large" auto-complete="off" placeholder="验证码" style="width: 63%"
              @keyup.enter="handleLogin">
              <template #prefix>
                <svg t="1717471493285" class="el-input__icon input-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5230" width="200" height="200"><path d="M905.450308 125.1037C896.061252 125.413837 886.857235 125.529313 877.875951 125.529313 640.975313 125.529313 536.595731 24.886788 535.697946 23.964627L512.065963 0 488.341461 23.964627C487.370003 25.002264 385.085824 125.529313 146.190869 125.529313 137.182172 125.529313 128.039835 125.413837 118.556545 125.1037L85.333333 124.052866 85.333333 580.377175C85.333333 699.862129 128.353375 874.191718 500.387895 1007.504132L511.999142 1011.694272 523.60525 1007.504132C895.638059 874.18512 938.666667 699.862129 938.666667 580.377175L938.666667 124.052866 905.450308 125.1037 905.450308 125.1037ZM475.450355 698.445071 261.083455 511.162345 317.998615 465.71418 431.988275 548.583255C431.988275 548.583255 589.347494 388.025039 741.338848 313.003401L763.015919 337.149491C763.015919 337.149491 573.091405 492.385901 475.450355 698.445071L475.450355 698.445071Z" fill="var(--el-color-primary-light-6)" p-id="5231"></path></svg>
              </template>
            </el-input>
            <div class="login-code">
              <div @click="getCode" class="login-code-img" v-html="codeUrl">
              </div>
            </div>
          </el-form-item>
          <el-checkbox v-model="loginForm.rememberMe" style="margin:0px 0px 25px 0px;">记住密码</el-checkbox>
          <el-form-item style="width:100%;">
            <el-button :loading="loading" size="large" type="primary" style="width:100%;" @click.prevent="handleLogin">
              <span v-if="!loading">登 录</span>
              <span v-else>登 录 中...</span>
            </el-button>
          </el-form-item>
        </el-form>
        <!--  底部  -->
        <div class="el-login-footer">
          <span>Copyright © 2024-{{ new Date().getFullYear() }} carole-admin All Rights Reserved.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getCodeImg } from "@/api/login";
import Cookies from "js-cookie";
import { encrypt, decrypt } from "@/utils/jsencrypt";
import useUserStore from '@/store/modules/user'
const userStore = useUserStore()
const route = useRoute();
const router = useRouter();
const { proxy } = getCurrentInstance();

const loginForm = ref({
  username: "admin",
  password: "carole",
  rememberMe: false,
  code: "",
  uuid: ""
});

const loginRules = {
  username: [{ required: true, trigger: "blur", message: "请输入您的账号" }],
  password: [{ required: true, trigger: "blur", message: "请输入您的密码" }],
  code: [{ required: true, trigger: "change", message: "请输入验证码" }]
};

const codeUrl = ref("");
const loading = ref(false);
// 验证码开关
const captchaEnabled = ref(true);
// 注册开关
const register = ref(false);
const redirect = ref(undefined);

watch(route, (newRoute) => {
  redirect.value = newRoute.query && newRoute.query.redirect;
}, { immediate: true });

function handleLogin() {
  proxy.$refs.loginRef.validate(valid => {
    if (valid) {
      loading.value = true;
      // 勾选了需要记住密码设置在 cookie 中设置记住用户名和密码
      if (loginForm.value.rememberMe) {
        Cookies.set("username", loginForm.value.username, { expires: 30 });
        Cookies.set("password", encrypt(loginForm.value.password), { expires: 30 });
        Cookies.set("rememberMe", loginForm.value.rememberMe, { expires: 30 });
      } else {
        // 否则移除
        Cookies.remove("username");
        Cookies.remove("password");
        Cookies.remove("rememberMe");
      }
      // 调用action的登录方法
      userStore.login(loginForm.value).then(() => {
        const query = route.query;
        const otherQueryParams = Object.keys(query).reduce((acc, cur) => {
          if (cur !== "redirect") {
            acc[cur] = query[cur];
          }
          return acc;
        }, {});
        router.push({ path: redirect.value || "/", query: otherQueryParams });
      }).catch(() => {
        loading.value = false;
        // 重新获取验证码
        if (captchaEnabled.value) {
          getCode();
        }
      });
    }
  });
}

function getCode() {
  getCodeImg().then(res => {
    captchaEnabled.value = res.captchaEnabled === undefined ? true : res.captchaEnabled;
    if (captchaEnabled.value) {
      codeUrl.value = res.img;
      loginForm.value.uuid = res.uuid;
    }
  });
}

function getCookie() {
  const username = Cookies.get("username");
  const password = Cookies.get("password");
  const rememberMe = Cookies.get("rememberMe");
  loginForm.value = {
    username: username === undefined ? loginForm.value.username : username,
    password: password === undefined ? loginForm.value.password : decrypt(password),
    rememberMe: rememberMe === undefined ? false : Boolean(rememberMe)
  };
}
getCode();
getCookie();
</script>

<style lang='scss' scoped>
.content {
  width: 100%;
  height: 100%;
}

.cover-slate {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
  display: block;
  background-color: rgba(60, 91, 147, 0.65);
  background-image: linear-gradient(140deg, rgba(61, 66, 96, 0.6) 20%, rgba(21, 23, 34, 0.8));
}


.login-bg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: url("/assets/bg.jpg") center top/cover;
}

.login {
  position: absolute;
}

.title {
  margin: 0px auto 30px auto;
  text-align: center;
  font-weight: 700;
  font-size: 24px;
  color: var(--el-color-primary);
}

.login-form {
  border-radius: 12px;
  backdrop-filter: blur(4px);
  background-color: rgba(106, 109, 117, 0.123);
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  border: 3px rgba(255, 255, 255, 0.4) solid;
  border-bottom: 3px rgba(40, 40, 40, 0.35) solid;
  border-right: 3px rgba(40, 40, 40, 0.35) solid;
  width: clamp(350px, 50vw, 560px);
  min-width: 350px;
  padding: 51px 32px 30px;

  .el-input {
    height: 38px;

    input {
      height: 38px;
    }
  }

  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 2px;
  }
}

.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.login-code {
  width: 33%;
  height: 38px;
  float: right;
  margin-left: 10px;
  img {
    cursor: pointer;
    vertical-align: middle;
  }
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}

.login-code-img {
  height: 38px;
}
:deep(svg){
  width: 100%;
  height: 100%;
}

</style>