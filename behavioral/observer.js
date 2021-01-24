const user = new User();

const init = () => {
    user.on('login', userLoggedIn)
}

const userLoggedIn () => {
    // user has logged in correctly
}

app.init()


const login = () => {
    // login logic here

    // then... 
    user.trigger('login')
}

login()
