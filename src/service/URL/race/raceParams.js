const raceParams = {
    // getGalleryParams : "page=1&size=10&is_past_race=true",
    getUrlRaceDetail : {
        page : "?page=1&size=10&is_past_race=true",
        filter : "filters[race_link][$eq]=",
        populate: "&populate=%2A",
    }
}

export default raceParams