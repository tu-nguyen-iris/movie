import React, { Component } from 'react'
import "./nav.scss"
import PhimDangChieu from "./../../Page/_phimDangChieu/phimDangChieu"
import PhimSapChieu from '../../Page/_phimSapChieu/phimSapChieu'
export default class NavMenu extends Component {
    render() {
        return (
            <div classname="NavMenu container-fluid ">


                <ul className="nav nav-pills container nav-fill mt-5" id="myTab" role="tablist">
                    <li style={{ marginRight: "10px" }} className="nav-item">
                        <button style={{ borderRadius: "80px", marginLeft: "auto" }} className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Phim Đang Chiếu</button>
                    </li>
                    <li style={{ marginLeft: "10px" }} className="nav-item">
                        <button style={{ borderRadius: "80px" }} className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Phim Sắp Chiếu</button>
                    </li>

                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><PhimDangChieu /></div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><PhimSapChieu /></div>

                </div>

            </div >



        )
    }
}
