import { combineReducers } from 'redux'
import movieReducer from "./movieReducer";
import userReducer from "./userReducer"
import cinemaReducer from "./cinemaReducer"
import seatReducer from "./SeatReducer"
const rootReducers = combineReducers({
    movieReducer,
    cinemaReducer, userReducer,
    seatReducer
})
export default rootReducers