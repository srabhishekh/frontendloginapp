import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:8080/",
    loginURL : "http://localhost:8080/login",
    logoutURL : "http://localhost:8080/logout",
    registerURL : "http://localhost:8080/register",
    loginWithGoogleURL : "http://localhost:8080/login-with-google",
    googleAuthorizationURL : "https://accounts.google.com/o/oauth2/v2/auth",
    redirectURL : "http://localhost:3000/redirect",
    googleLoginURL : "http://localhost:8080/oauth2/authorization/google",
    headers : {"ngrok-skip-browser-warning":"true"}
})