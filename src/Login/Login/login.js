import React, { useState } from 'react'
import './Login.scss'
import { connect } from "react-redux"
import * as action from "../../redux/action/action"
import { NavLink } from "react-router-dom"
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

function Login(props) {
    const [user, setuser] = useState({
        taiKhoan: "",
        matKhau: ""
    })
    const handleOnSubmit = e => {
        e.preventDefault()
        props.apiLoginClient(user, props.history)
    }
    const handleOnChange = e => {
        let { name, value } = e.target
        setuser({
            ...user,
            [name]: value
        })
    }


    return (
        <div className="login"  >
            <Paper className="formLogin" elevation={5}>
                <h3>Đăng Nhập</h3>
                <form onSubmit={handleOnSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Tài khoản</label>
                        <input name="taiKhoan" type="text" onChange={handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your account" />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Mật khẩu</label>
                        <input name="matKhau" type="password" onChange={handleOnChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <Button type="submit" variant="contained" color="primary">
                        Đăng Nhập
</Button>
                    <p>Chưa có tài khoản? click <NavLink to="/dang-ky">Đăng ký</NavLink></p>
                    <p>Trở về trang chủ...<NavLink to="/">Trang Chủ</NavLink> </p>
                </form>

            </Paper>
        </div>


    )
}
const mapDispatchToProps = dispatch => {
    return {
        apiLoginClient: (user, history) => {
            dispatch(action.apiLoginClient(user, history))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)
