import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import * as action from "./../../redux/action/action"
function TabPhimTheoRap(props) {
    props.danhSachRap.forEach(maRap => props.layThongTinCumRap(maRap.maHeThongRap)

    );


    useEffect(() => {
        props.layThongTinRap()
    }, [])



    return (
        <div>

        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        layThongTinRap: () => {
            dispatch(action.apiLayThongTinRap())
        },
        layThongTinCumRap: id => {
            dispatch(action.apiLayThongTinCumRapTheoHeThong(id))
        }


    }

}

const mapStateToProps = state => {
    return {
        danhSachRap: state.cinemaReducer.heThongRap

    }

}
export default connect(mapStateToProps, mapDispatchToProps)(TabPhimTheoRap)