import React, { Component } from 'react'
import "./PNF.scss"
import { NavLink } from 'react-router-dom'
export default class PNF extends Component {
    render() {
        return (
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>Oops!</h1>
                    </div>
                    <h2>404 - Page not found</h2>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <NavLink className="ab" to="/">Trở về trang chủ</NavLink>
                </div>
            </div>

        )
    }
}
