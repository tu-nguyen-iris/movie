
import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import "./test.scss"
export default class NavAdmin extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item ">
                                <NavLink activeClassName="active" className="nav-link" exact to="/quan-ly-nguoi-dung">Quản Lý Người Dùng</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/quan-ly-phim2">Quản Lý Phim</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/quan-ly-phim">Quản Lý Phim Test</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        )
    }
}
