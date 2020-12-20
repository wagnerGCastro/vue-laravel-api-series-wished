import store from '@/store'
console.log(store)

/* eslint-disable */
export default async (to, from, next) => {
    document.title = `${to.name} - Series Wished`
    console.log(store.getters['hasToken'])
    if (to.name !== 'login' && !store.getters['hasToken']) {
        try {
            await store.dispatch('actionCheckToken')
            next({ path: to.path })
        } catch (err) {
            alert(err)
            next({ name: 'login' })
        }
    } else if (to.name === 'logout' && store.getters['hasToken']) {
        store.dispatch('actionSignOut')
        next({ name: 'logi' })
    }
    else {
        if (to.name === 'login' && store.getters['hasToken']) {
            next({ name: 'home' })
        } else if (to.name === 'logout' && !store.getters['hasToken']){
            next({ name: 'login' })
        } else {
            next()
        }
    }

}