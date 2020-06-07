import React, { useState, useEffect } from 'react'
import "./userInfo.scss"
import Axios from "axios"
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { FaRegEdit } from "react-icons/fa"
const useStyles = makeStyles(theme => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "60px"
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
export default function ThongTinNguoiDung(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    let user = JSON.parse(localStorage.getItem("userClient"))



    const [account, setaccount] = useState({})

    const [thongTinTaiKhoan, setthongTinTaiKhoan] = useState({

        taiKhoan: user.taiKhoan,
        matKhau: "",
        email: "",
        soDt: "",
        hoTen: "",
        maNhom: "GP01",
        maLoaiNguoiDung: "KhachHang",
    })


    useEffect(() => {

        Axios({
            method: "POST",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
            data: user,
            headers: { Authorization: "Bearer " + user.accessToken }

        })
            .then(
                res => {
                    setaccount(res.data)
                }
            )
            .catch(err => {
                console.log(err)
            }
            )
    }, [])

    const renderLichSuDatVe = () => {
        if (account.thongTinDatVe) {
            return account.thongTinDatVe.map((item, index) => {
                return <tr key={index}>
                    <td>{item.maVe}</td>
                    <td>{item.tenPhim}</td>
                    <td>{item.thoiLuongPhim}</td>
                    <td> {new Date(item.ngayDat).toLocaleTimeString()} --  {new Date(item.ngayDat).toLocaleDateString()}</td>
                    <td>{item.giaVe}</td>
                </tr>
            })
        }
    }
    const handleOnChange = e => {
        let { name, value } = e.target
        setthongTinTaiKhoan({
            ...thongTinTaiKhoan,
            [name]: value
        })
    }

    const handleOnSubmit = e => {
        e.preventDefault()
        Axios({
            method: "PUT",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`,
            data: thongTinTaiKhoan,
            headers: { Authorization: "Bearer " + user.accessToken }
        })

            .then((result) => {

                Swal.fire(
                    {
                        icon: 'success',
                        title: 'Cập nhật thành công!',
                    }
                )
                setOpen(false)

            })


            .catch(err => {
                console.log(err)
            })
    }


    //Same componentwillReceivedProps
    //dom data len input form
    useEffect(() => {
        let {
            taiKhoan,
            email,
            soDT,
            hoTen, maNhom,
            maLoaiNguoiDung, } = user

        setthongTinTaiKhoan({
            taiKhoan,
            email,
            soDt: soDT,
            hoTen,
            maNhom,
            maLoaiNguoiDung

        })

    }, [])
    return (

        <div className="userInfo row">
            <div className="infoUser col-xl-3">
                <img src="data:image/png;base64,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" />
                <h2>{user.hoTen}</h2>




            </div>
            <div className="lichSuVe col-xl-9 container">
                <div>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Thông Tin Tài Khoản</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Lịch Sử Đặt Vé</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <h4>Tên Tài Khoản: {user.taiKhoan}</h4>
                            <h4>Email: {user.email}</h4>
                            <h4>Số Điện Thoại: {user.soDT}</h4>
                            <Button type="button" onClick={handleOpen} variant="contained" color="secondary">
                                Chỉnh sửa thông tin cá nhân...
</Button>
                            <Button type="button" onClick={() => {


                                Swal.fire({
                                    title: 'Bạn muốn đăng xuất',
                                    // text: "You won't be able to revert this!",
                                    icon: 'warning',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Yes'
                                }).then((result) => {
                                    if (result.value) {
                                        localStorage.removeItem("userClient")
                                        props.history.push("/")
                                        Swal.fire(
                                            {
                                                title: 'Đăng xuất thành công!',
                                                icon: 'success',
                                            }
                                        )
                                    }
                                })

                            }} variant="contained" color="primary">
                                Đăng Xuất
</Button>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                className={classes.modal}
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500,
                                }}
                            >
                                <Fade in={open}>
                                    <div className={classes.paper}>
                                        <form onSubmit={handleOnSubmit} className="form text-center border border-light p-5" action="#!">
                                            <h2 className="h4 mb-4">Thay Đổi Thông Tin Cá Nhân</h2>

                                            <p>Tài khoản</p>
                                            <input value={user.taiKhoan} onChange={handleOnChange} name="taiKhoan" type="text" className="form-control mb-4" placeholder="Tài khoản" disabled />
                                            <p style={{ color: "red" }}>Tài khoản không thể thay đổi</p>
                                            <p>Mật khẩu</p>
                                            <input onChange={handleOnChange} name="matKhau" type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
                                            <p>Email</p>
                                            <input value={thongTinTaiKhoan.email} onChange={handleOnChange} name="email" type="email" className="form-control mb-4" />
                                            <p>Số điện thoại</p>
                                            <input value={thongTinTaiKhoan.soDt} onChange={handleOnChange} name="soDt" type="number" className="form-control mb-4" />
                                            <p>Họ Tên</p>
                                            <input value={thongTinTaiKhoan.hoTen} onChange={handleOnChange} name="hoTen" type="text" className="form-control mb-4" />
                                            {/* Sign in button */}
                                            <Button variant="contained" color="primary" type="submit">Cập nhật</Button>
                                            <Button style={{ marginLeft: "10px" }} variant="contained" color="secondary" onClick={() => {
                                                setOpen(false)
                                            }}>Huỷ bỏ</Button>


                                        </form>
                                        {/* <!-- Default form login --> */}
                                    </div>
                                </Fade>
                            </Modal>






                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <table style={{ color: "white" }} className="table">
                                <thead>
                                    <tr >
                                        <th>Mã vé</th>
                                        <th>Tên phim</th>
                                        <th>Thời Lượng </th>
                                        <th>Thời gian đặt vé </th>
                                        <th>Giá vé </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {renderLichSuDatVe()}

                                </tbody>
                            </table>

                        </div>

                    </div>
                </div>


            </div>

        </div >
    )
}
