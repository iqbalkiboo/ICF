const NewsListParams = {
    // getGalleryParams : "?pagination[page]=1&pagination[pageSize]=13&sort[0]=createdAt%3Adesc&populate=*&filters[hot_news][$eq]=true",
    getUrlNewsList : {
        pagination : "pagination[page]=1&",
        paginationSize : "pagination[pageSize]=13&",
        sort : "sort[0]=createdAt%3Adesc&",
        populate : "populate=*&",
        filter : "filters[hot_news][$eq]=true"
    }
}

export default NewsListParams