import router from '@/router'

export const saveUser = () => ({commit}, username) => {
    sessionStorage.setItem('user', username)
    commit('getUser', username)
}
export const closeSession = () => ({commit}) => {
    sessionStorage.removeItem('user')
    router.push({name: 'SigninView'})
}  