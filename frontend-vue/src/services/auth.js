import store from '@store'

//mudando o valor do token diretamente na store!
const setToken = function(token) {
    store.dispatch('SET_TOKEN', token)
}

//recuperando o valor de token da store!
const getToken = function() {
    return store.state.auth.token
}