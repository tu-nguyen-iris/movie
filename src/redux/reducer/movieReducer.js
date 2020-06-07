import * as ActionType from "./../constant/ActionType"


let initState = {
    listMovie: [],
    movieCarousel: {},
    phimDangChieu: {},
    phimSapChieu: {},
    movie: {},
    editMovie: '',
    keyword: "",
    carou: []

}



const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.GET_LIST_MOVIE:
            state.listMovie = action.listMovie
            return { ...state }
        case ActionType.GET_LIST_MOVIE_PLAYING:
            state.phimDangChieu = action.phimDangChieu
            return { ...state }
        case ActionType.GET_LIST_MOVIE_SOON:
            state.phimSapChieu = action.phimSapChieu
            return { ...state }
        case ActionType.MOVIE_CAROUSEL:
            state.movieCarousel = action.movieCarousel
            return { ...state }
        case ActionType.GET_DETAIL_MOVIE:
            state.movie = action.movie
            return { ...state }
        case ActionType.MOVIE_EDIT:
            state.editMovie = action.movie
            return { ...state }
        case ActionType.SEARCH:
            state.keyword = action.keyword
            return { ...state }
        case ActionType.GET_CAROUSEL:
            state.carou = action.carou
            return { ...state }
        default:
            return { ...state }
    }
}
export default movieReducer