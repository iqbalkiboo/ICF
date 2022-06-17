import Get from "./Get";

// GET
// NOTE : Gunakan true or false, kalau true dia kirim paramas ke url,
// kalau false tidak kirim params

//home
const GET_HOME = () => Get("api/homes", "", false);

//news
const GET_NEWS = () => Get("api/news","",false);


const API = {
    GET_HOME,
    GET_NEWS
};

export default API;
