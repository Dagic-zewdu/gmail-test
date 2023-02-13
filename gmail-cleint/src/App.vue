<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="container">
    <button class="btn" @click="login">open G-mail</button>
  </div>
</template>

<script>
import { googleSdkLoaded } from 'vue3-google-login';
export default {
  name: 'App',
  methods: {
    login() {
      googleSdkLoaded((google) => {
        google.accounts.oauth2
          .initCodeClient({
            client_id: '939872883657-bbbp12lu78ld0ukbfnoc1njbn3rpv2ku.apps.googleusercontent.com',
            scope: 'https://www.googleapis.com/auth/gmail.readonly https://mail.google.com/',

            callback: (response) => {
              console.log(response);
            },
          })
          .requestCode();
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.btn {
  padding: 10px;
  color: #f47141;
}
</style>
