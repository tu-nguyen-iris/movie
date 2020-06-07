
import React, { useState, useEffect } from 'react'
import Axios from "axios"
import ListSeat from './listSeat';
import LoadingPg from "./../../otherPage/Loading/index"
export default function DatVe(props) {
    const id = props.match.params.id
    const [movie, setmovie] = useState({})
    const [isLogin, setisLogin] = useState(false)

    useEffect(() => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`

        }).then(res => {
            setmovie(
                res.data
            )
            setisLogin(true)

        })
            .catch(err => {
                console.log(err)
            })
    }, [])
    if (isLogin) {
        return (
            <div>
                <ListSeat history={props.history} id={id} movie={movie} />
            </div>
        )
    } return <LoadingPg /> 
}
