import * as ActionType from "./../constant/ActionType"

let initialState = {
    gheDangChon: []
}

 const seatReducer = (state = initialState, action) => {
    switch (action.type) {

        case ActionType.MANG_GHE_DANG_CHON:
            state.gheDangChon = action.gheDangChon
            return { ...state }

        default:
            return state
    }
}
export default seatReducer
