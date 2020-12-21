export const Auth = {
    namespaced: true,

    state: {
        user: {},
        token: '',
        expires: '',
    },
  
    mutations: {
        [SET_TOKEN](state, token) {
            state.token = token
        },

        [SET_USER](state, payload) {
            state.user = payload
        },

        [SET_EXPIRES](state, payload) {
            state.expires = payload
        },

    },
  
    actions: {
        actionCheckToken: ({ dispatch, state }) => {
            if (state.token) {
                return Promise.resolve(state.token)
            }

            const token = storage.getToken()

            if (!token) {
                return Promise.reject(new Error('[107] - actionCheckToken: Token Inválido'))
            }

            return dispatch('actionLoadSession', token)
        },

        actionLoadSession: ({ dispatch }, token) => {
            /* eslint-disable */
            return new Promise(async(resolve, reject) => {
                try {
                    setBearerToken(token)
                    const { data: { message } } = await services.auth.loadSession()
                    dispatch('actionSetUser', message)
                    dispatch('actionSetToken', token)
                    storage.saveToken(token)
                    resolve()
                } catch (err) {
                    dispatch('actionSignOut')
                    console.log('[err]-actionLoadSession', err)
                    reject(err)
                }
            })
            
        },

        actionDoLogin: ({ dispatch }, payload) => {
            return services.auth.login(payload).then(resp => {
                dispatch('actionSetExpires', resp.body.expires_in)
                dispatch('actionSetToken', resp.body.access_token)
                dispatch('actionLoadSession', resp.body.access_token)
            })
        },

        actionSetUser: ({ commit }, payload) => {
            commit(SET_USER, payload)
        },

        actionSetExpires: ({ commit }, payload) => {
            commit(SET_EXPIRES, payload)
        },

        actionSetToken: ({ commit }, payload) => {
            storage.saveToken(payload)
            // storage.setHeaderToken(payload)
            commit(SET_TOKEN, payload)
        },

        actionSignOut: ({ dispatch }) => {
            // storage.setHeaderToken('')
            storage.removeToken()
            dispatch('actionSetUser', {})
            dispatch('actionSetToken', '')
            dispatch('actionSetExpires', '')
        }
    },
  
    getters: {
        getUser: state => state.user,
        hasToken: ({ token }) => !!token
    }

  }