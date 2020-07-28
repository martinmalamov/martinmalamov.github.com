/* globals $ , Sammy */
import home from './controllers/home.js'
// import prizes from './controllers/prizes.js'
import gallery from './controllers/gallery.js'
// import prices from './controllers/prices.js'
// import contact from './controllers/contact.js'
import register, { registerPost } from './controllers/register.js'
import login, { loginPost } from './controllers/login.js'
// import catalog from './controllers/catalog.js'
// import details from './controllers/details.js'
// import create, { createPost } from './controllers/create.js'
// import edit from './controllers/edit.js'

$(() => {
    const app = Sammy('#container', function () {
        this.use('Handlebars', 'hbs');

        // this.userData = {
        //     loggedIn: false,
        //     hasTeam: false
        // }

        this.get('index.html', home)
        this.get('#/home', home)
        this.get('/', home)

        this.get('#/gallery', gallery)
        // this.get('#/about', about)


        this.get('#/register', register)

        this.get('#/login', login)

        this.get('#/logout', logout)
        
        // this.get('#/catalog', catalog)

        // this.get('#/catalog/:id', details)

        // this.get('#/create', create)

        // this.get('#/edit/:id', edit)
        

        // this.post('#/register', (ctx) => { registerPost.call(ctx) })
        // this.post('#/login', (ctx) => { loginPost.call(ctx) })
        // this.post('#/create', (ctx) => { createPost.call(ctx) })
        // this.loadPartials({
        //     header: './templates/common/header.hbs',
        //     footer: './templates/common/footer.hbs'
        // }).then(function () {
        //     this.partial('./templates/home/home.hbs', { loggedIn: false });
        // })

        // this.render('./templates/register/registerForm.hbs').then(function (html) {

        //     this.swap(html)
        // })
    })

    app.run();
});