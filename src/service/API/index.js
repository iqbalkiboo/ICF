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

//race
const GET_RACE_DETAIL = (params) => Get("api/race-details", params, true)
const GET_RACE_ROADMAP = (params) => Get("api/race-roadmaps", params, true)

//about
const GET_ABOUT = () => Get("api/abouts", "", false)

//gallery
const GET_GALLERY = (params) => Get("api/galleries", params, true)

//live
const GET_LIVE = (params) =>Get("api/lives", params, true)

//regulation
const GET_REGULATIONS = (params) =>Get("api/regulations", params, true)




const API = {
    GET_HIGHLIGHT,
    GET_NEWS_ITEM,
    GET_UPCOMING_RACE,
    GET_GALLERY_HOME,
    GET_NEWS,
    GET_NEWS_DETAIL,
    GET_NEWS_RELATED,
    GET_RACE_DETAIL,
    GET_GALLERY,
    GET_ABOUT,
    GET_LIVE,
    GET_RACE_ROADMAP,
    GET_REGULATIONS,
};

export default API;
