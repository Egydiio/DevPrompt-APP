import { createApp } from 'vue'
import { Quasar, QBtn } from 'quasar'
import './style.css'
import App from './App.vue'
import router from './router'
import quasarLang from 'quasar/lang/pt-BR'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

const app = createApp(App)

app.use(Quasar, {
    lang: quasarLang,
    plugins: {},
    components: { QBtn }
})


app.use(router)
app.mount('#app')
