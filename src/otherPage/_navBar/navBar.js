import React, { Component, useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./../../otherPage/_navBar/navBar.scss"
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FaSnapchatGhost } from "react-icons/fa"
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: "fixed",
        bottom: "-10",


    },
});

export default function NavBar(props) {
    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const isLogin = () => {
        if (localStorage.getItem("userClient")) {
            let userClient = JSON.parse(localStorage.getItem("userClient"))
            return (
                <li>
                    <a style={{ textDecoration: "none", color: "black" }} href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FaSnapchatGhost style={{ marginRight: "10px", fontSize: "25px" }} />  {userClient.hoTen}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <a className="dropdown-item" href="#"><NavLink style={{ textDecoration: "none", color: "black" }} to="thong-tin-tai-khoan">Thông Tin Tài Khoản</NavLink></a>
                        <NavLink style={{ textDecoration: "none", color: "black" }} to="/" onClick={() => {
                            localStorage.removeItem("userClient")
                        }} ><a className="dropdown-item" href="#">Đăng Xuất</a></NavLink>

                    </div>
                </li>
            )
        }
        return (
            <NavLink className="nav-link" to="/dang-nhap">Đăng Nhập</NavLink>
        )
    }
    return (
        <div className="NAV">
            <Paper elevation={5}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">MOVIE BOOKING</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item mr-2 ">
                                <NavLink activeClassName="active" exact className="nav-link" to="/">Trang chủ </NavLink>
                            </li>
                            <li className="nav-item  mr-2">
                                <NavLink className="nav-link" to="/tim-kiem">Tìm Kiếm Phim</NavLink>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto">
                            {isLogin()}
                        </ul>
                    </div>

                </nav>
            </Paper>
            <div className="nav2" >
                <BottomNavigation
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                    className={classes.root}
                >
                    <BottomNavigationAction
                        component={NavLink}
                        style={{ textDecoration: "none" }}
                        to="/"
                        label="Trang chủ" />
                    <BottomNavigationAction component={NavLink}
                        style={{ textDecoration: "none" }}
                        to="/tim-kiem" label="Tìm Kiếm" />
                    <BottomNavigationAction component={NavLink}
                        style={{ textDecoration: "none" }}
                        to={localStorage.getItem("userClient") ? "/thong-tin-tai-khoan" : "/dang-nhap"} label="Cá nhân" />
                </BottomNavigation>
            </div>
        </div>
    )
}








