import React, { useEffect, useState } from 'react'
import * as action from "./../../../redux/action/action"
import { connect } from "react-redux"
import { FaEdit, FaRegTrashAlt, FaPlus } from "react-icons/fa"
import ThemPhim from "./modalfilm"
import { Modal } from "react-bootstrap";
import ModalVideo from "./modalTrailer"
import { Paper } from '@material-ui/core'
// function ModalVideo(props) {
//     return (
//         <Modal
//             size="lg"
//             {...props}
//             aria-labelledby="video-modal"
//             centered
//             className="video-modal text-center"
//         >

//             <iframe
//                 style={{ padding: 0, margin: 0, width: "100%", height: "400px" }}
//                 src={props.item}

//                 frameBorder="0"
//                 allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen

//             />

//         </Modal>
//     );

// }
function QanLyFilm(props) {
    const [modal, setmodal] = useState(false)


    useEffect(() => {
        props.dsPhim()
    }, [])
    const [isEdit, setisEdit] = useState(false)


    const renderTable = () => {
        let { listMovie, keyword } = props
        listMovie = listMovie.filter(movie => movie.tenPhim.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
        return listMovie.map((item, index) => {
            return <tr key={index}>
                <td>{item.maPhim}</td>
                <td>{item.tenPhim}</td>
                <td>{item.biDanh}</td>
                <td>
                    <ModalVideo movie={item} />
                </td>
                <td><img src={item.hinhAnh} style={{ width: 100 }} /></td>
                <td>{item.moTa}</td>
                <td>{item.maNhom}</td>
                <td>{item.ngayKhoiChieu}</td>
                <td>{item.danhGia}</td>
                <td>
                    <a type="button" data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {
                        props.EditMovie(item)
                        setisEdit(true)
                        console.log(item)
                    }}> <FaEdit /> </a>
                    <a onClick={() => {
                        props.onDelete(item.maPhim)
                    }} type="button"><FaRegTrashAlt /></a>
                </td>

            </tr>

        })
    }

    return (
        <div className="movieAdmin">
            <nav className="navbar navbar-light bg-light">
                <form className="form-inline">
                    <input onChange={event => {
                        props.onSearch(event.target.value)
                    }} className="form-control mr-sm-2" type="search" placeholder="Tên phim..." aria-label="Search" />
                </form>


                <a type="button" onClick={() => {
                    setisEdit(false)
                    props.EditMovie2()
                }} data-toggle="modal" data-target="#exampleModalCenter">
                    <FaPlus />   </a>
            </nav>

            <ThemPhim isEdit={isEdit} />
            <Paper elevation={4}>
                <table className="table">
                    <thead style={{ backgroundColor: "black", color: "white", fontSize: "10px" }}>
                        <tr>
                            <th>Mã Phim</th>
                            <th>Tên Phim</th>
                            <th>Bí Danh</th>
                            <th>Trailer</th>
                            <th>Hình Ảnh</th>
                            <th>Mô Tả</th>
                            <th>Mã Nhóm</th>
                            <th>Ngày Khởi Chiếu</th>
                            <th>Đánh Giá</th>
                            <th>Chức Năng</th>

                        </tr>
                    </thead>
                    <tbody>
                        {renderTable()}
                    </tbody>
                </table>
            </Paper>
        </div>
    )
}
const mapStateToProps = (state) => ({
    listMovie: state.movieReducer.listMovie,
    keyword: state.movieReducer.keyword
})

const mapDispatchToProps = dispatch => {
    return {
        dsPhim: () => {
            dispatch(action.apiGetListMovie())
        },
        onSearch: keyword => {
            dispatch(action.search(keyword))
        },
        EditMovie: (movie) => {
            dispatch(action.movieEdit(movie))
        },

        onDelete: idPhim => {
            dispatch(action.onDeleteMovie(idPhim))
        },
        EditMovie2: () => {
            dispatch(action.movieEdit(null))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QanLyFilm)
