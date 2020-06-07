import React from 'react'
import { FaAndroid, FaApplePay } from "react-icons/fa"
export default function Footer() {
    return (
        <div>
            {/* Footer */}
            <footer className="page-footer font-small pt-4" style={{ textDecoration: "none", color: "white", backgroundColor: "#222222" }}>
                {/* Footer Links */}
                <div className="container-fluid text-center text-md-left">
                    {/* Grid row */}
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-md-6 mt-md-0 mt-3">
                            {/* Content */}
                            <h2 className="text-uppercase">MOVIE BOOKING</h2>

                        </div>
                        {/* Grid column */}
                        <hr className="clearfix w-100 d-md-none pb-3" />
                        {/* Grid column */}
                        <div className="col-md-3 mb-md-0 mb-3">
                            {/* Links */}
                            {/* <h5 className="text-uppercase">Links</h5> */}
                            <ul className="list-unstyled">
                                <li>
                                    <a style={{ textDecoration: "none", color: "white" }} href="#!">Thoả Thuận Sử Dụng</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none", color: "white" }} href="#!">Quy Chế Hoạt Động</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none", color: "white" }} href="#!">Chính Sách Bảo Mật</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none", color: "white" }} href="#!">Quyền Lợi Thành Viên</a>
                                </li>
                            </ul>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div className="col-md-3 mb-md-0 mb-3">
                            {/* Links */}

                            <ul className="list-unstyled">
                                <li>
                                    <a style={{ textDecoration: "none", color: "white" }} href="#!">CyberSoft Academy</a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none", color: "white" }} href="#!"><FaAndroid /></a>
                                </li>
                                <li>
                                    <a style={{ textDecoration: "none", color: "white" }} href="#!"><FaApplePay /></a>
                                </li>

                            </ul>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                </div>
                {/* Footer Links */}
                {/* Copyright */}
                <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a style={{ textDecoration: "none", color: "white" }} href="https://www.facebook.com/tuvn2"> Tu Nguyen</a>
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}

        </div>
    )
}
