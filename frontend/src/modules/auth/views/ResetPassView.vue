<template>
  <section class="container">
    <h2 class="title">Resetea tu contraseña</h2>
    <p class="subtitle">Rellena los campos con tu nueva contraseña</p>
    <input type="password" class="input" v-model="password" placeholder="Contraseña">
    <input type="password" class="input" v-model="repassword" placeholder="Repetir Contraseña">
    <button class="button" @click="doReset">
        Resetear
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
    name: 'ResetPassView',
    data() {
        return {
            password: '',
            repassword: '',
        }
    },
    computed: {
    
    },
    components: {
        Message
    },
    methods: {
        ...mapMutations('app', ['setMessage']),

        async doReset(){
            if(this.password === '' || this.repassword === ''){
                this.setMessage({type: 'alert', message: 'Rellene todos los campos'})
                return
            }
            if(this.password !== this.repassword){
                this.setMessage({type: 'alert', message: 'Las contraseñas no coinciden'})
                return
            }
            try {
                const token = this.$router.currentRoute.value.params.id
                const data = await pkappApi.put('/auth/reset-password', {resetLink: token, newPass: this.password})
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