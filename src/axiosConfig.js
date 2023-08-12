import axios from "axios";

export default axios.create({
    baseURL : "http://localhost:8080",
    loginURL : "http://localhost:8080/login",
    logoutURL : "http://localhost:8080/logout",
    registerURL : "http://localhost:8080/register",
    headers : {"ngrok-skip-browser-warning":"true"}
})