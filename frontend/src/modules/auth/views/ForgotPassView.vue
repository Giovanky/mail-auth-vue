<template>
  <div class="container">
    <h2 class="title">Resetear contraseña</h2>
    <p class="subtitle"> Introduzca su correo asociado a su cuenta y le enviaremos un mensaje con instrucciones para resetear su contraseña</p>
    <input type="text" class="input" v-model="email" placeholder="Correo">
    <button class="button" @click="sendMail">
      Enviar
    </button>
    <p class="bottom-text" @click="$router.push({name: 'SigninView'})">Deseas iniciar sesion?</p>
    <Message />
  </div>
</template>

<script>
import pkappApi from '@/api/pkappApi'
import Message from '@/components/Message'
import { mapMutations } from 'vuex'
import axios from 'axios'

export default {
  name: 'ForgotPassView',
  components: {
    Message
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    ...mapMutations('app', ['setMessage']),

    async sendMail() {
      if(this.email === ''){
        this.setMessage({type: 'alert', message: 'Ingrese su correo asociado a la cuenta'})
        return
      }
      if(!this.email.includes('@')){
        this.setMessage({type: 'alert', message: 'Ingrese un correo valido'})
        return
      }
      try{
        const data = await pkappApi.put('/auth/forgot-password', {email: this.email})
        if(!data.data.success){
          this.setMessage({type: 'alert', message: data.data.message})
          return
        }
        this.setMessage({type: 'info', message: data.data.message})
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>