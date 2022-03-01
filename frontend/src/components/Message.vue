<template>
    <div class="message" ref="message" v-if="show" :class="`message-${type}`" @click="cleanScreen">
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

        cleanScreen(event) {
            event.target.style.animation = 'fadeOut'
            event.target.style.animationDuration = '.8s'
            setTimeout(() => {
                this.cleanMessage()
            }, 400)
        },

    },
    computed: {
        ...mapState('app', ['show', 'type', 'message'])
    },
    mounted(){
    
    }
}
</script>

<style lang="scss">
    .message{
        display: flex;
        width: 88.88vw;
        padding: 1.6rem;
        color: var(--clr-white);
        font-family: 'Ubuntu', Arial;
        font-size: 2rem;
        font-weight: 800;
        position: absolute;
        border-radius: 8px;
        bottom: 0;
        margin-bottom: 1.6rem;
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

        // refactor!
        @media only screen and(min-width: 60em) {
            width: 40vw;
        }
    }
</style>