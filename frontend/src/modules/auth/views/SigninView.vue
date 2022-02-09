<template>
  <section class="container">
    <h2 class="title">Bienvenido a pkapp!</h2>
    <p class="subtitle">Hola!, si eres nuevo por aqui puedes comenzar registrandote para ocupar la aplicacion</p>
    <input type="text" class="input" v-model="email" placeholder="Correo">
    <input type="password" class="input" v-model="password" placeholder="Contraseña">
    <button class="button" @click="doSignin">
        Iniciar Sesion
    </button>
    <p class="bottom-text" @click="$router.push({name: 'SignupView'})">Aun no tienes una cuenta? Registrate</p>
    <p class="bottom-text" @click="$router.push({name: 'ForgotPassView'})">Olvidaste tu contraseña?</p>
    <Message />
  </section>
</template>

<script>
import pkappApi from '@/api/pkappApi'
import Message from '@/components/Message'
import { mapActions ,mapMutations } from 'vuex'

export default {
    name: 'SigninView',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        },
    components: {
        Message
    },
    methods: {
        ...mapActions(['saveUser']),
        ...mapMutations('app', ['setMessage']),

        async doSignin(){
            if(this.email === '' || this.password === ''){
                this.setMessage({type: 'alert', message: 'Rellene todos los campos'})
                return
            }
            if(!this.email.includes('@')){
                this.setMessage({type: 'alert', message: 'Escribe un correo valido'})
                return
            }
            try {
                const user = {
                    email: this.email,
                    password: this.password
                }
                const data = await pkappApi.post('/auth/signin', user)
                if(!data.data.success){
                    this.setMessage({type: 'alert', message: data.data.message})
                    return
                }
                console.log('authenticated...')
                saveUser(user.email)
                // this.$router.push({name: ''})
            }catch(err){
                console.log(err)
            }
        }
    }
}
</script>