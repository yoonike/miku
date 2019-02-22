<template>
  <form class="login">
    <div class="form-control">
      <label>
        <input type="text" placeholder="请输入用户名" maxlength="16" v-model="name">
      </label>
    </div>
    <div class="form-control">
      <label>
        <input type="password" placeholder="请输入密码" maxlength="16" v-model="pwd">
      </label>
    </div>
    <div class="form-control">
      <button @click="login()">登录</button>
    </div>
  </form>
</template>
<script>
export default {
  name: "login",
  data: function() {
    return {
      name: "",
      pwd: ""
    };
  },
  methods: {
    login: function() {
      let that = this;
      if (!that.name) {
        alert("请输入用户名");
        return false;
      }
      if (!that.name) {
        alert("请输入密码");
        return false;
      }
      that.$http({
        url: that.api.login,
        data: {
          name: that.name,
          pwd: that.pwd
        },
        handle: function(data) {
          if (data.code == 0) {
            console.log(data.data);
          } else {
            console.log(data.msg);
          }
        }
      });
    }
  }
};
</script>
<style lang="less">
.login {
  .form-control {
    margin: 0.1rem auto;
    input {
      height: 0.3rem;
      line-height: 0.3rem;
      border: 1px solid transparent;
      &:focus {
        border: 1px solid #234;
      }
    }
    button {
      width: 1rem;
      height: 0.3rem;
      line-height: 0.3rem;
    }
  }
}
</style>

