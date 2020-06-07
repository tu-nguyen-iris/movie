import React, { useState, useEffect } from 'react'
import Axios from "axios"
import "./listSeat.scss"
import Swal from 'sweetalert2'
import { FaCcApplePay, FaTelegram, FaCcVisa, FaWalking } from 'react-icons/fa';
import { Paper } from '@material-ui/core';

export default function ListSeat(props) {
    let user = JSON.parse(localStorage.getItem("userClient"))

    let movie = props.movie
    const [Ve, setVe] = useState({
        maLichChieu: props.id,
        danhSachVe: [],
        taiKhoanNguoiDung: user.taiKhoan
    })
    const chonGe = ghe => {
        let temp = Ve.danhSachVe;
        if (temp.indexOf(ghe) < 0) {
            document.getElementById(ghe.maGhe).classList.add("gheDangChon")
            temp.push(ghe)
            setVe({
                maLichChieu: props.id,
                danhSachVe: temp,
                taiKhoanNguoiDung: user.taiKhoan
            })
        } else {
            for (let index in temp) {
                if (temp[index].maGhe === ghe.maGhe) {
                    temp.splice(parseInt(index), 1)
                    document.getElementById(ghe.maGhe).classList.remove("gheDangChon")
                }
                setVe({
                    maLichChieu: props.id,
                    danhSachVe: temp,
                    taiKhoanNguoiDung: user.taiKhoan
                })
            }
        }
    }
    const loaiGhe = (item) => {
        if (item.loaiGhe === "Thuong") {
            return "btn btn-primary"
        } else return "btn btn-outline-success"
    }
    const renderSeat = () => {
        if (movie.danhSachGhe) {
            return movie.danhSachGhe.map((item, index) => {
                return (
                    <button key={index} id={item.maGhe} disabled={item.daDat === true} onClick={() => chonGe(item)

                    } className={item.daDat === false ? loaiGhe(item) : "btn btn-danger"} ></button >

                )
            })
        }
    }
    useEffect(() => {
        setTimeout(() => {
           alert("hết thời gian chọn vé,vui lòng chọn lại.")
            window.location.reload()
        }, 50000);
    }, [])


    const bookTicket = () => {
        let ticketForm = { ...Ve };
        ticketForm.danhSachVe = ticketForm.danhSachVe.map(item =>
            (({ maGhe, giaVe }) => ({ maGhe, giaVe }))(item)
        );
        Axios({
            method: "POST",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
            data: ticketForm,
            headers: { Authorization: "Bearer " + user.accessToken }
        })
            .then(result => {
                console.log(result.data);
                // alert("Đặt Vé Thành Công")
                Swal.fire({
                    icon: 'success',
                    text: 'Đặt vé thành công!',

                })
                setTimeout(() => {
                    props.history.push("/")
                }, 1300);

            })
            .catch(err => {
                console.log(err);

            });
    };
    const tenGhe = () => {
        let gheDangChon = [];
        let temp = Ve.danhSachVe;
        [...temp].forEach(item => {
            gheDangChon.push(item.stt)
        });
        return gheDangChon.join(", ");
    }

    const giaVed = () => {
        let gheDangChon = []
        let temp = Ve.danhSachVe;
        [...temp].forEach(item => {
            gheDangChon.push(item.giaVe)
        })
        console.log(gheDangChon)
        let total = 0;
        for (let i = 0; i < gheDangChon.length; i++) {
            total += gheDangChon[i]
        }
        return total
    }

    return (
        <div className="row container-fluid listVe ">
            <div className="Seat col-xl-8" >
                <h4 style={{ textAlign: "center" }}>Màn hình</h4>
                <div className="datVe">
                    {renderSeat()}
                </div>
                <div className="InfoSeat container">
                    <p>Ghế đang chọn: <button className="btn btn-warning"></button></p>
                    <p>Ghế đã đặt: <button className="btn btn-danger"></button></p>
                    <p>Ghế Vip: <button className="btn btn-outline-success"></button></p>
                    <p>Ghế thường: <button className="btn btn-primary"></button></p>
                </div>
            </div>
            <Paper elevation={5} className="datVeThanhToan col-xl-4">
                <h1>THÔNG TIN ĐẶT VÉ</h1>
                <p>Tên Phim: {movie.thongTinPhim.tenPhim}</p>
                <p>{movie.thongTinPhim.tenRap} - {movie.thongTinPhim.tenCumRap}</p>
                <p>Địa chỉ: {movie.thongTinPhim.diaChi}</p>
                <p>Thời gian: {movie.thongTinPhim.gioChieu} - {movie.thongTinPhim.ngayChieu}</p>
                <p>Ghế đang chọn: <span style={{ fontWeight: "bolder" }}>{tenGhe()}</span> </p>
                <p>Thành tiền:  <span style={{ fontWeight: "bolder" }}>  {giaVed()} VND</span> </p>
                <p>Phương thức thanh toán: </p>

                <div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" defaultChecked />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            ZaloPay   <FaTelegram />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" defaultValue="option2" />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            ApplePay   <FaCcApplePay />
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" defaultValue="option3" />
                        <label className="form-check-label" htmlFor="exampleRadios3">
                            Visa   <FaCcVisa />
                        </label>
                    </div>
                </div>
                <p style={{ marginTop: "10px" }}>LƯU Ý: Vé đã mua sẽ không thể hoàn tiền.Mã vé đã mua sẽ được gửi vào SMS và email theo thông tin tài khoản.</p>
                <div className="button_cont" align="center">
                    <button onClick={() => {
                        if (Ve.danhSachVe.length > 0) {
                            bookTicket()
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Vui lòng chọn ghế!',

                            })
                        }

                    }
                    } className="example_a" >Đặt Vé</button >
                </div>
            </Paper>


        </div>


    )
}
