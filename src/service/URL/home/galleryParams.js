const galleryParams = {
    // getGalleryParams : "?pagination[page]=1&pagination[pageSize]=6&sort[0]=createdAt%3Adesc&populate=*",
    getUrlGallery : {
        pagination : "pagination[page]=1&",
        paginationSize : "pagination[pageSize]=5&",
        sort : "sort[0]=createdAt%3Adesc&",
        populate: "populate=*"
    }
}

export default galleryParams