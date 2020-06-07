import * as ActionType from "./../constant/ActionType"

let initState = {
    heThongRap: [],
    cumRap: [],
    lichChieuCumRap: [],
    thongTin: {}

}

const cinemaReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionType.LAY_THONG_TIN_RAP:
            state.heThongRap = action.heThongRap
            return { ...state }
        case ActionType.LAY_THONG_TIN_CUM_RAP_THEO_HETHONG:
            state.cumRap = action.cumRap
            return { ...state }
        case ActionType.LAY_THONG_TIN_LICH_CHIEU_THEO_CUM_RAP:
            state.lichChieuCumRap = action.lichChieuCumRap
            return { ...state }
        case ActionType.LAY_DANH_SACH_PHONG_VE:
            state.thongTin = action.thongTin
            return { ...state }
        default:
            return { ...state };
    }
}
export default cinemaReducer