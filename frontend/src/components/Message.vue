<template>
    <div class="message" :class="`message-${type}`" v-if="show" @click="cleanMessage">
        <!-- <svg class="message__icon">
            <use xlink:href=""></use>
        </svg> -->
        <p class="message__text">
            {{ message }}
        </p>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
    name: 'Message',
    methods: {
        ...mapMutations('app', ['cleanMessage']),
        cleanScreen() {
            setTimeout(() => {
                this.cleanMessage()
            }, 4000)
        }
    },
    computed: {
        ...mapState('app', ['show', 'type', 'message'])
    },
    created(){
        this.cleanScreen()
    }
}
</script>

<style lang="scss">
    .message{
        display: flex;
        width: 88.8vw;
        padding: 1.6rem 2.4rem;
        color: white;
        font-size: 2.16rem;
        position: absolute;
        border-radius: 4px;
        bottom: 4rem;
        z-index: 1;

        &-alert{
            background-color: var(--clr-alert);
        }

        &-success{
            background-color: var(--clr-success);
        }

        &-info{
            background-color: var(--clr-info);
        }

        &-warning{
            background-color: var(--clr-warning);
        }
    }
</style>