import React, { Component, useEffect, useState } from 'react'
import * as action from './../../redux/action/action'
import { connect } from "react-redux"
import Paper from "@material-ui/core/Paper";
import Axios from "axios"
import TenHeThongRap from '../../otherPage/TabLichChieu/tenHeThongRap';
import CumRap from '../../otherPage/TabLichChieu/cumRap';
import { makeStyles } from "@material-ui/core/styles";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa"
import { Modal } from "react-bootstrap";
import LoadingPg from "./../../otherPage/Loading/index"
import { Button } from "@material-ui/core"
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        height: 380
    }
}));

function ChiTietPhim(props) {
    const [movie, setMovie] = React.useState({});
    const classes = useStyles();
    const [Isload, setIsload] = React.useState(false);
    const [modal, setmodal] = useState(false)
    function ModalVideo(props) {
        return (
            <Modal
                size="lg"
                {...props}
                aria-labelledby="video-modal"
                centered
                className="video-modal text-center"
            >
                <Modal.Body className="m-0 p-0" style={{ backgroundColor: "black" }}>
                    <iframe
                        style={{ padding: 0, margin: 0, width: "100%", height: "400px" }}
                        src={movie.trailer}
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen

                    />
                </Modal.Body>
            </Modal>
        );

    }


    useEffect(() => {
        const id = props.match.params.id;
        props.layDsHeThongRap();

        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
            .then(result => {
                setMovie(result.data);
                setIsload(true);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);
    const danhGia = () => {
        if (movie.danhGia) {
            let rate = movie.danhGia;
            let stars = [];
            for (let index = 0; index < 10; index += 2) {
                if (rate >= 2) {
                    stars.push(
                        <FaStar key={index} />
                    );
                } else if (rate >= 1) {
                    stars.push(

                        <FaStarHalf key={index} />
                    );
                } else
                    stars.push(
                        <FaRegStar key={index} />
                    );
                rate -= 2;
            }
            return stars;
        }
    };
    if (Isload) {
        return (
            <div className="chiTietPhim">
                <ModalVideo show={modal} onHide={() => setmodal(false)} />
                <div className="chiTiet_header " >
                    <div className="backgrBlur">
                        <img src={movie.hinhAnh} />
                        <div className="backgrBlur_1">
                        </div>
                    </div>
                    <div className="row head1 container">
                        <div className="col-sm-6 col-anh"><img src={movie.hinhAnh} /></div>
                        <div className="col-sm-6 col-thongTin">
                            <h1>{movie.tenPhim}</h1>
                            <p>Đạo Diễn: Unknow</p>
                            <p>Ngày Khởi Chiếu :{movie.ngayKhoiChieu.slice(0, 10)}</p>
                            <p>Thể loại: Hành Động, Tình Cảm.</p>
                            <p className="danhGia">{danhGia()}</p>
                            <p>Giới thiệu phim: {movie.moTa}</p>
                            <Button type="button" variant="contained" color="secondary" onClick={() => setmodal(true)}>
                                Xem Trailer</Button></div>

                    </div>


                </div >
                <div className="ChonThoiGian container mt-5">
                    <h1>Chọn Rạp và Đặt Vé</h1>
                    <Paper elevation={5} className={classes.root}>
                        <TenHeThongRap movie={movie} />
                        <CumRap movie={movie} />
                    </Paper>
                </div>
            </ div>
        )

    } return <LoadingPg />



}



const mapDispatchToProps = dispatch => {
    return {
        chiTietPhim: (id) => {
            dispatch(action.apiLayThongTinPhim(id))
        },
        layDsHeThongRap: () => {
            dispatch(action.apiLayThongTinRap())
        }
    }
}
const mapStateToProps = state => {
    return {
        movie: state.movieReducer.movie
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChiTietPhim)