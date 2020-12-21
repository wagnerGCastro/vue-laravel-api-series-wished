services.auth.login({ email: 'wagner@gmail.com', password: '123456' }).then(response => {
    // success callback
    console.log('sucess', response)
}, response => {
    console.log('err', response)
    // error callback
})



// http.get(http.options.root + '/auth/me', {
//     headers: {
//         'Authorization': `Bearer ${token}`
//     }
// })
// .then(response => { 
//     console.log(response.body)
//     dispatch('actionSetUser', response.body.message)
// }, response => {
//     // error callback
//     console.log(response)
// })