const galleryPageParams = {
    // getGalleryParams : "?pagination[page]=1&pagination[pageSize]=6&sort[0]=createdAt%3Adesc&populate=*",
    // cek : "?pagination[page]=1&pagination[pageSize]=9&sort[0]=createdAt%3Adesc&populate=*"
    getUrlGalleryPage : {
        pagination : "pagination[page]=1&",
        paginationSize : "pagination[pageSize]=6&",
        sort : "sort[0]=createdAt%3Adesc&",
        populate: "populate=*"
    }
}

export default galleryPageParams