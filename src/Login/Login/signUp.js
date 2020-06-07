import React, { Component } from 'react'
import { connect } from "react-redux"
import * as action from "./../../redux/action/action"
import { NavLink } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import "./Login.scss"
class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                maNhom: "GP01",
                maLoaiNguoiDung: "KhachHang",
                hoTen: ""
            },
            err: {
                taiKhoan: "",
                matKhau: "",
                email: "",
                soDt: "",
                hoTen: ""
            },
            formvalid: false,
            taiKhoanValid: false,
            matKhauValid: false,
            emailValid: false,
            soDtValid: false,
            hoTenValid: false
        }
    }
    handleOnChange = e => {
        let { name, value } = e.target
        this.setState({
            user: { ...this.state.user, [name]: value }
        })
    }
    handleErr = (e) => {
        let { name, value } = e.target;
        let messenger = value === "" ? name + "không được để trống" : "";
        let { taiKhoanValid, matKhauValid, emailValid, hoTenValid, soDtValid } = this.state
        switch (name) {
            case "taiKhoan":
                taiKhoanValid = messenger === "" ? true : false;
                if (value && value.length < 4) {
                    messenger = "Độ dài ký tự không được nhỏ hơn 4"
                    taiKhoanValid = false
                }
                break;
            case "matKhau":
                matKhauValid = messenger === "" ? true : false;
                if (value && value.length < 4) {
                    messenger = "Độ dài ký tự không được nhỏ hơn 4"
                    matKhauValid = false
                }
                break;
            case "email":
                emailValid = messenger === "" ? true : false;
                if (value && !value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                    messenger = "Email not Valid!"
                    emailValid = false
                }
                break;
            case "hoTen":
                hoTenValid = messenger === "" ? true : false;

                break;
            case "soDt":
                soDtValid = messenger === "" ? true : false;

                break;
            default:
                break;
        }
        this.setState({
            err: { ...this.state.err, [name]: messenger },
            taiKhoanValid,
            matKhauValid,
            emailValid,
            soDtValid,
            hoTenValid,
        })

    }
    formValidation = () => {
        this.setState({
            formvalid:
                this.state.hoTenValid && this.state.taiKhoanValid && this.state.matKhauValid && this.state.emailValid && this.state.soDtValid
        })
    }
    handleOnSubmit = e => {
        e.preventDefault()
        this.props.signUp(this.state.user, this.props.history)
    }
    render() {
        return (
            <div className="SignUp">
                <Paper className="signUpPaper" elevation={5}>
                    <h3>Đăng Ký</h3>
                    <form onSubmit={this.handleOnSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Tài khoản</label>
                            <input onBlur={this.handleErr} onKeyUp={this.handleErr} name="taiKhoan" type="text" onChange={this.handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your account" />
                            {this.state.err.taiKhoan === "" ? ("") : (

                                <div className="alert alert-danger">{this.state.err.taiKhoan}</div>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Mật Khẩu</label>
                            <input onBlur={this.handleErr} onKeyUp={this.handleErr} name="matKhau" type="text" onChange={this.handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Mật khẩu" />
                            {this.state.err.matKhau === "" ? ("") : (

                                <div className="alert alert-danger">{this.state.err.matKhau}</div>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input onBlur={this.handleErr} onKeyUp={this.handleErr} name="email" type="email" onChange={this.handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
                            {this.state.err.email === "" ? ("") : (

                                <div className="alert alert-danger">{this.state.err.email}</div>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Họ tên</label>
                            <input onBlur={this.handleErr} onKeyUp={this.handleErr} name="hoTen" type="text" onChange={this.handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Họ tên" />
                            {this.state.err.hoTen === "" ? ("") : (

                                <div className="alert alert-danger">{this.state.err.hoTen}</div>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Số điện thoai</label>

                            <input onBlur={this.handleErr} onKeyUp={this.handleErr} name="soDt" type="number" onChange={this.handleOnChange} className="form-control" id="exampleInputPassword1" placeholder="số điện thoại" />
                            {this.state.err.soDt === "" ? ("") : (

                                <div className="alert alert-danger">{this.state.err.soDt}</div>)}
                        </div>
                        <button type="submit" className="btn btn-primary">Đăng Ký</button>
                        <p>Đã có tài khoản? <NavLink to="/dang-nhap">Đăng Nhập</NavLink></p>
                        <p>Trở về trang chủ...<NavLink to="/">Trang chủ</NavLink></p>
                    </form>
                </Paper>
            </div >
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signUp: (user, history) => {
            dispatch(action.apiDangKyKhachHang(user, history))
        }
    }
}
export default connect(null, mapDispatchToProps)(SignUp)