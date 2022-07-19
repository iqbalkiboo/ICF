const relatedNewsParams = {
    // getRelatedNews: "?pagination[page]=1&pagination[pageSize]=3&sort[0]=createdAt%3Adesc&populate=*&filters[category][$eq]=ICF",
    getRelatedNews : {
        pagination : "pagination[page]=1&",
        paginationSize : "pagination[pageSize]=3&",
        sort : "sort[0]=createdAt%3Adesc&",
        populate : "populate=*&",
        filter : "filters[category][$eq]=ICF"
    }
}

export default relatedNewsParams