<template>
  <section class="container">
    <h2 class="title">Eres nuevo por aqui?</h2>
    <p class="subtitle">Registra tus datos y disfruta con nosotros!</p>
    <input type="text" class="input" v-model="name" placeholder="Nombre Usuario">
    <input type="text" class="input" v-model="email" placeholder="Correo">
    <input type="password" class="input" v-model="password" placeholder="Contraseña">
    <input type="password" class="input" v-model="repass" placeholder="Repetir Contraseña">
    <button class="button" @click="doSignup">
      Registrarse
    </button>
    <p class="bottom-text" @click="$router.push({name: 'SigninView'})">Deseas iniciar sesion?</p>
    <Message />
  </section>
</template>

<script>
import pkappApi from '@/api/pkappApi'
import Message from '@/components/Message'
import { mapMutations } from 'vuex'

export default {
  name: 'SignupView',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      repass: ''
    }
  },
  components: {
    Message,
  },
  methods: {
    ...mapMutations('app', ['setMessage']),

    async doSignup(){
      if(this.name === '' || this.email === '' || this.password === '' || this.repass === ''){
        this.setMessage({type: 'alert', message: 'Rellene todos los campos'})
        return
      }
      if(!this.email.includes('@')){
        this.setMessage({type: 'alert', message: 'Escribe un correo valido'})
        return
      }
      if(this.password !== this.repass){
        this.setMessage({type: 'alert', message: 'Las contraseñas no coinciden'})
        return
      }
      try {
        const newUser = {
          name: this.name,
          email: this.email,
          password: this.password
        }
        const data = await pkappApi.post('/auth/signup', newUser)
        if(!data.data.success){
          this.setMessage({type: 'alert', message: data.data.message})
          return
        }
        this.setMessage({type: 'info', message: data.data.message})
        this.$router.push({name: 'SigninView'})
      }catch(err){
        console.log(err)
      }
    }
  }
}
</script>