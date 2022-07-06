import Get from "./Get";

// GET
// NOTE : Gunakan true or false, kalau true dia kirim paramas ke url,
// kalau false tidak kirim params

//home
const GET_HIGHLIGHT = (params) => Get("api/highlights", params, true)
const GET_NEWS_ITEM = (params) => Get("api/news-items", params, true)
const GET_UPCOMING_RACE = (params) => Get("races", params, true)
const GET_GALLERY_HOME = (params) => Get("api/galleries", params, true)

//news
const GET_NEWS = (params) => Get("api/news-items", params, true)
const GET_NEWS_DETAIL = (params) => Get("api/news-items", params, true)
const GET_NEWS_RELATED = (params) => Get("api/news-items", params, true)

//about
const GET_ABOUT = () => Get("api/about-uses", "", false)

//live
const GET_LIVE = (params) =>Get("api/lives", params, true)




const API = {
    GET_HIGHLIGHT,
    GET_NEWS_ITEM,
    GET_UPCOMING_RACE,
    GET_GALLERY_HOME,
    GET_NEWS,
    GET_NEWS_DETAIL,
    GET_NEWS_RELATED,
    GET_ABOUT,
    GET_LIVE
};

export default API;
