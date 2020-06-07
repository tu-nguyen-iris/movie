import React, { useEffect, useState } from 'react'
import * as action from "./../../../redux/action/action"
import { connect } from "react-redux"
import "./stylead.scss"
import ThemNguoiDung from './themNguoiDung';
import { Paper, Button } from '@material-ui/core';
function QuanLyNguoiDung(props) {

    // set gia tri phan biet add or update
    const [isAddUser, setisAddUser] = useState(true)

    useEffect(() => {
        props.LayDanhSachNguoiDung()
    }, [])

    //update
    const handleUpdate = (item) => {
        props.onEdit(item)
        setisAddUser(false)
        //  
    }
    //delete
    const handleDelete = user => {
        props.onDelete(user)
    }

    const renderTable = () => {
        let { listUser, keyword } = props
        //tim kiem
        listUser = listUser.filter(
            user => user.taiKhoan.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        );
        //render list tab
        return listUser.map((item, index) => (
            <tr key={index}>
                <td>
                    {item.taiKhoan}
                </td>
                <td>{item.matKhau}</td>
                <td>{item.hoTen}</td>
                <td>{item.email}</td>
                <td>{item.soDt}</td>
                <td>{item.maLoaiNguoiDung}</td>
                <td>
                    <Button variant="contained"
                        color="default"
                        data-toggle="modal" data-target="#exampleModalCenter" onClick={() => {
                            handleUpdate(item)
                        }}>Update</Button>
                    <Button variant="contained"
                        color="secondary"

                        onClick={() => handleDelete(item.taiKhoan)} >Xoá</Button>
                </td>

            </tr>
        ))

    }

   
        return (
            <div className="quanLyNguoiDung">
                <ul>
                    <li> <form className="form-inline">
                        <input onChange={event => {
                            props.onSearch(event.target.value)

                        }} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form></li>
                    <li> <Button variant="contained" type=" button" onClick={() => {
                        setisAddUser(true)
                        props.onEdit2()

                    }} color="primary" data-toggle="modal" data-target="#exampleModalCenter">
                        THÊM NGƯỜI DÙNG</Button></li>
                </ul>



                <ThemNguoiDung isAddUser={isAddUser} listUser={props.listUser} />
                <Paper elevation={5}>

                    <table className="table table1">

                        <thead>

                            <tr className="tb" style={{ backgroundColor: "black", color: "white" }}>

                                <th>TÀI KHOẢN</th>
                                <th>MẬT KHẨU</th>
                                <th>HỌ TÊN</th>
                                <th>EMAIL</th>
                                <th>SÓ ĐIỆN THOẠI</th>
                                <th>LOẠI NGƯỜI DÙNG</th>
                                <th>CHỨC NĂNG</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderTable()}
                        </tbody>
                    </table>
                </Paper>
            </div >
        )
    }



const mapDispatchToProps = dispatch => {
    return {
        LayDanhSachNguoiDung: () => {
            dispatch(action.apiLayDangSachNguoiDung())
        },
        onEdit: (user) => {
            dispatch(action.apiEdit(user))
        },
        onEdit2: () => {
            dispatch(action.apiEdit(null))
        }
        ,
        onDelete: user => {
            dispatch(action.apiDelete(user))
        },

        onSearch: keyword => {
            dispatch(action.search(keyword))
        }
    }
}
const mapStateToProps = state => {
    return {
        listUser: state.userReducer.listUser,
        keyword: state.userReducer.keyword
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuanLyNguoiDung)



