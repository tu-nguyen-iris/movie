// import React, { useState, useEffect } from 'react'
import React, { Component } from 'react'
import Input from '@material-ui/core/Input'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Axios from "axios"
import { connect } from "react-redux"
const userAdmin = JSON.parse(localStorage.getItem("userAdmin"))
class ThemNguoiDung extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                taiKhoan: "",
                matKhau: "",
                email: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "",
                hoTen: "",
                soDt: "",
            },

        }

    }




    handleOnChange = e => {
        let { name, value } = e.target
        this.setState({
            user: {
                ...this.state.user, [name]: value
            }
        })
    }





    AddUser = user => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            headers: { "Authorization": "Bearer " + userAdmin.accessToken },
            data: user
        })
            .then(res => {
                alert("success")
                setTimeout(() => {
                    window.location.reload(true)
                }, 200);

            })
            .catch(err => {
                alert("fail")
            })



    }

    Update = user => {


        Axios({
            method: "PUT",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            headers: { "Authorization": "Bearer " + userAdmin.accessToken },
            data: user
        })
            .then(res => {
                alert("success")
            })
            .catch(err => {
                alert("fail")
            })

    }


    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.userEdit) {
            let { taiKhoan, maLoaiNguoiDung, matKhau, email, hoTen, soDt } = nextProps.userEdit
            this.setState({
                user: {
                    taiKhoan, maLoaiNguoiDung, matKhau, maNhom: "GP01", email, hoTen, soDt
                }
            })

        } else {
            this.setState({
                user: {
                    taiKhoan: "",
                    matKhau: "",
                    email: "",
                    maNhom: "GP01",
                    maLoaiNguoiDung: "",
                    hoTen: "",
                    soDt: "",
                }
            })
        }
    }



    handleOnSubmit = e => {

        e.preventDefault()

        if (this.props.isAddUser) {
            this.AddUser(this.state.user)

        } else {
            this.Update(this.state.user)

            setTimeout(() => {
                window.location.reload(true)
            }, 300);



        }

    }
    render() {


        return (
            <div>
                <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <form id="te" onSubmit={this.handleOnSubmit}>
                                <Paper style={{ padding: '20px 15px', marginTop: '30px' }}>
                                    <Typography variant="headline" gutterBottom>
                                        {this.props.isAddUser ? "Thêm người dùng " : "Cập nhật người dùng"}   </Typography>
                                    <FormControl fullWidth margin='normal'>
                                        <InputLabel>Tài khoản</InputLabel>
                                        <Input disabled={this.props.isAddUser ? false : true} name="taiKhoan" value={this.state.user.taiKhoan} onChange={this.handleOnChange} fullWidth />
                                    </FormControl>

                                    <FormControl fullWidth margin='normal'>
                                        <InputLabel>Mật khẩu</InputLabel>
                                        <Input fullWidth value={this.state.user.matKhau} onChange={this.handleOnChange} name='matKhau' type='password' />
                                    </FormControl>
                                    <FormControl fullWidth margin='normal'>
                                        <InputLabel>Email</InputLabel>
                                        <Input value={this.state.user.email} onChange={this.handleOnChange} name='email' type="email" fullWidth />
                                    </FormControl>
                                    <FormControl fullWidth margin='normal'>
                                        <InputLabel>Họ tên</InputLabel>
                                        <Input value={this.state.user.hoTen} name="hoTen" onChange={this.handleOnChange} fullWidth />
                                    </FormControl>
                                    <FormControl fullWidth margin='normal'>
                                        <InputLabel>Số điện thoại</InputLabel>
                                        <Input type="number" value={this.state.user.soDt} name="soDt" onChange={this.handleOnChange} fullWidth />
                                    </FormControl>
                                    <FormControl fullWidth margin='normal'>
                                        {/* form select materia bị ngáo nên sài tạm bootstrap */}
                                        <label>Loại người dùng</label>
                                        <select
                                            className="form-control"
                                            name="maLoaiNguoiDung"
                                            onChange={this.handleOnChange}
                                            value={this.state.user.maLoaiNguoiDung}
                                        >
                                            <option value="QuanTri">Quản trị</option>
                                            <option value="KhachHang">Khách hàng là thượng đế</option>
                                        </select>
                                    </FormControl>
                                    <FormControl fullWidth margin='normal'>
                                        <Button
                                            variant='contained'
                                            color='secondary'
                                            type='submit'
                                            style={{ marginBottom: "5px" }}

                                        >
                                            {this.props.isAddUser ? "Thêm người dùng" : "Cập nhật"}

                                        </Button>
                                        <Button type="button" variant="contained" color="primary" data-dismiss="modal">Huỷ bỏ</Button>
                                    </FormControl>
                                </Paper>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )


    }
}
const mapStateToProps = state => {
    return {
        userEdit: state.userReducer.userEdit,
    }
}
export default connect(mapStateToProps, null)(ThemNguoiDung)


