const highlightParams = {
    // getHighlightParams : "?populate=banner&pagination[page]=1&pagination[pageSize]=4&sort[0]=createdAt%3Adesc",
    getUrlHomeHighlight : {
        pagination : "&pagination[page]=1",
        paginationSize : "&pagination[pageSize]=4",
        sort : "&sort[0]=createdAt%3Adesc",
        populate : "&populate=%2A"
    }
}

export default highlightParams