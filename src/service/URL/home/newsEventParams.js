const newsEventParams = {
    // getHighlightParams : "?pagination[page]=1&pagination[pageSize]=6&sort[0]=createdAt%3Adesc&populate=*",
    getUrlNewsEvent : {
        pagination : "pagination[page]=1&",
        paginationSize : "pagination[pageSize]=6&",
        sort : "sort[0]=createdAt%3Adesc&",
        populate: "populate=*"
    }
}

export default newsEventParams