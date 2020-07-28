import { login as apiLogin } from '../data.js'

export default async function login() {
    this.partials = {
        header: await this.load('./templates/common/header.hbs'),
        footer: await this.load('./templates/common/footer.hbs'),
        loginForm: await this.load('./templates/user/loginForm.hbs')
    };

    this.partial('./templates/user/login.hbs', this.app.userData);
}


export async function loginPost() {
    try {
        const result = await apiLogin(this.params.username, this.params.password);
        if (result.hasOwnProperty('errorData')) {
            const error = new Error();
            Object.assign(error, result);
            throw error;
        }

        this.app.userData.username = result.username;
        this.app.userData.userId = result.objectId;

        showInfo(`Logged in as ${result.username}`);

        this.redirect('#/home');
    } catch (err) {
        console.error(err);
        showError(err.message);
    }
}

export async function logout() {
    await logoutGet();
    this.app.userData.loggedIn = false;
    this.app.userData.hasTeam = false;
    this.app.userData.username = undefined
    this.app.userData.userId = undefined
    this.app.userData.teamId = undefined;

    localStorage.removeItem('userToken')
    localStorage.removeItem('username')
    localStorage.removeItem('userId')

    this.redirect('#/home')

}