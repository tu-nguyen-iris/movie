import * as ActionType from "./../constant/ActionType"


let initState = {
    listUser: [],
    userEdit: null,
    keyword: "",
}


const userReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LIST_USER:
            state.listUser = action.listUser
            return { ...state }
        case ActionType.EDIT:
            console.log(action.user)
            state.userEdit = action.user
            return { ...state }
        case ActionType.DELETE:
            return { ...state };
        case ActionType.SEARCH:
            state.keyword = action.keyword
            return { ...state }

        default:
            return { ...state };
    }
}
export default userReducer