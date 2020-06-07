import React, { useState } from 'react'
import * as action from "./../../redux/action/action"
import { connect } from "react-redux"
function Admin(props) {
    const [user, setuser] = useState({
        taiKhoan: "",
        matKhau: ""
    })

    const handleOnChange = e => {
        let { name, value } = e.target
        setuser({
            ...user,
            [name]: value
        })
    }
    const handleOnSubmit = e => {
        e.preventDefault()
        props.Login(user, props.history)
    }

    // if (localStorage.getItem("userAdmin")) {
    //     return props.history.push("./quan-ly-nguoi-dung")
    // } 
    return <div>

        <form onSubmit={handleOnSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Enter your Account</label>
                <input name="taiKhoan" onChange={handleOnChange} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="matKhau" onChange={handleOnChange} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>



}
const mapDispatchToProps = dispatch => {
    return {
        Login: (user, history) => {
            dispatch(action.apiLoginAdmin(user, history))
        }
    }
}

export default connect(null, mapDispatchToProps)(Admin)
