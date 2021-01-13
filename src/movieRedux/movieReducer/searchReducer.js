
import { SEARCH_MOVIE, FETCH_MOVIES, LOADING, SEARCHED_MOVIE } from "../movieAction/type";

const initialState = {
    text: '',
    movies: [],
    loading: false,
    searchedMovie: []

};

function searchReducer(state = initialState, action) {
    switch (action.type) {
        case SEARCH_MOVIE:
            return {
                ...state, text: action.payload, loading: false
            };
        case FETCH_MOVIES:
            return {
                ...state,
                movies: action.payload,
                loading: false
            };
        case LOADING:
            return {
                ...state,
                loading: true
            };
        case SEARCHED_MOVIE:
            let text = action.payload;
            const searchData = state.movies.filter((data) => {
                if (text == null)
                    return data

                else if (data.title.toLowerCase().includes(text.toLowerCase()) || data.series.name.toLowerCase().includes(text.toLowerCase())) {
                    return data
                }
            })
            return {
                ...state,
                searchedMovie: searchData,
                loading: false
            }

        default:
            return state;
    }
}
export default searchReducer;