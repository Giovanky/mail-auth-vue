<template>
  <Message />
</template>

<script>
import pkappApi from '@/api/pkappApi'
import Message from '@/components/Message'
import { mapMutations } from 'vuex'

export default {
    name: 'ActivateMailView',
    components: {
        Message
    },
    methods: {
        ...mapMutations('app', ['setMessage']),

        async activateMail() {
            try{
                const data = await pkappApi.put('/auth/email-activate', {token: this.$router.currentRoute.value.params.token})
                if(!data.data.success){
                    this.setMessage({type: 'alert', message: data.data.message})
                    this.$router.push({name: 'SigninView'})
                    return
                }
                this.setMessage({type: 'success', message: data.data.message})
                this.$router.push({name: 'SigninView'})
            }catch(err){
                console.log(err)
                this.$router.push({name: 'SigninView'})
            }
        }
    },
    created() {
        this.activateMail()
    }
}
</script>