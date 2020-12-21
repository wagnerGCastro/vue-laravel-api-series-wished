import store from '@/store'
// console.log(store)

/* eslint-disable */
export default async (to, from, next) => {
    document.title = `${to.name} - Series Wished`

    if (to.name !== 'login' && !store.getters['auth/hasToken']) {
        try {
            await store.dispatch('auth/actionCheckToken')
            next({ path: to.path })
        } catch (err) {
            console.log('[error]', err)
            next({ name: 'login' })
        }
    } else if (to.name === 'logout' && store.getters['auth/hasToken']) {
        store.dispatch('auth/actionSignOut')
        next({ name: 'login' })
    }
    else {
        if (to.name === 'login' && store.getters['auth/hasToken']) {
            next({ name: 'home' })
        } else if (to.name === 'logout' && !store.getters['auth/hasToken']){
            next({ name: 'login' })
        } else {
            next()
        }
    }

}