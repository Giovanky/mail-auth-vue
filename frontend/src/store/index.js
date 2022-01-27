import { createStore } from 'vuex'
import app from './appStore'
import auth from '@/modules/auth/store'

export default createStore({
  modules: {
    app,
    auth
  }
})
