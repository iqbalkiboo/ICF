import Get from "./Get";

// GET
// NOTE : Gunakan true or false, kalau true dia kirim paramas ke url,
// /api/news-infos
// /api/news-details
// /api/about-uses
// kalau false tidak kirim params

//home
const GET_HOME = () => Get("api/homes", "", false);

//news
const GET_NEWS = () => Get("api/news-infos", "",false);
const GET_NEWS_DETAIL = () => Get("api/news-details", "",false);

//about
const GET_ABOUT = () => Get("api/about-uses", "", false);

//live
const GET_LIVE = (params) =>Get("api/lives", params, true)


const API = {
    GET_HOME,
    GET_NEWS,
    GET_NEWS_DETAIL,
    GET_ABOUT,
    GET_LIVE
};

export default API;
