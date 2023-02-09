<template>
  <div class="container"> </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
const CLIENT_ID = '939872883657-bbbp12lu78ld0ukbfnoc1njbn3rpv2ku.apps.googleusercontent.com';
const API_KEY = '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';
export default {
  name: 'App',
  components: {
    HelloWorld,
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
}
</style>
