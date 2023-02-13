import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)
app.use(vue3GoogleLogin, {
    clientId: '939872883657-bbbp12lu78ld0ukbfnoc1njbn3rpv2ku.apps.googleusercontent.com',
    scope: "https://www.googleapis.com/auth/gmail.readonly"
})
app.mount('#app')
