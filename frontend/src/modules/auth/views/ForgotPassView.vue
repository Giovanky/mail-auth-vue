<template>
  <div class="container">
    <h2 class="title">Resetear contraseña</h2>
    <p class="subtitle"> Introduzca su correo asociado a su cuenta y le enviaremos un mensaje con instrucciones para resetear su contraseña</p>
    <input type="text" class="input" placeholder="Correo">
    <button class="button">
      Enviar
    </button>
    <p class="bottom-text" @click="$router.push({name: 'SigninView'})">Deseas iniciar sesion?</p>
  </div>
</template>

<script>
import pkappApi from '@/api/pkappApi'
import Message from '@/components/Message'

export default {
    name: 'ForgotPassView',
    components: {
      Message
    },
    methods: {
      async sendMail() {
          
      }
    }
}
</script>

<style>

</style>