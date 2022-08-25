const aboutPageParams = {
    // aboutPageParams : "?pagination[page]=1&pagination[pageSize]=6&sort[0]=createdAt%3Adesc&populate=*",
    // cek : "?sort%5B0%5D=createdAt%3Adesc&pagination%5Bpage%5D=1&pagination%5BpageSize%5D=1&populate=%2A"
    getAboutPageParams : {
        pagination : "pagination[page]=1&",
        paginationSize : "pagination[pageSize]=1&",
        sort : "sort[0]=createdAt%3Adesc&",
        populate: "populate=*"
    }
}

export default aboutPageParams