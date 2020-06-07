import React, { useEffect } from 'react'
import * as action from "./../../../redux/action/action"
import { connect } from "react-redux"
import Axios from "axios"
import "./index.scss"
import MaterialTable from 'material-table';
const userAd = JSON.parse(localStorage.getItem("userAdmin"))


function QuanLyPhim(props) {
    useEffect(() => {
        props.dsPhim()

    }, [])
    let { listMovie } = props

    const [state, setState] = React.useState({
        columns: [
            { title: 'Ma phim', field: 'maPhim', type: "numeric" },
            { title: 'ten phim', field: 'tenPhim' },
            { title: 'bi danh', field: 'biDanh' },
            { title: 'Trailer', field: 'trailer' },
            { title: 'hinh Anh', field: 'hinhAnh', },
            { title: 'mo ta', field: 'moTa' },
            { title: 'ma nhom', field: 'maNhom', lookup: { GP01: 'GP01', GP02: 'GP02' } },

            {
                title: 'ngay khoi chieu', field: 'ngayKhoiChieu', type: "date"

            },
            {
                title: 'danh gia',
                field: 'danhGia',
                type: 'numeric',
            },
        ],
        // data:
        //     [...listMovie]
        // ,
    });




    return (

        <MaterialTable
            title="Editable Example"
            columns={state.columns}
            data={listMovie}

            editable={{
                onRowAdd: (newData) =>

                    new Promise((resolve) => {
console.log(newData)
                        setTimeout(() => {

                            resolve();
                            // if (newData) {
                            //     new Date()
                            //     var hello
                            //     newData.ngayKhoiChieu = new Date()
                            //     let time = newData.ngayKhoiChieu.getFullYear() +
                            //         "-" +
                            //         (newData.ngayKhoiChieu.getMonth() + 1) +
                            //         "-" +
                            //         newData.ngayKhoiChieu.getDate();
                            //     return hello = newData.splice(7, 1, time)
                            // }

                            Axios({



                                method: "POST",
                                url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
                                data: newData,
                                headers: { "Authorization": "Bearer " + userAd.accessToken },

                            })
                                .then(res => {
                                    alert(console.log(res))
                                })
                                .catch(err => {
                                    alert(console.log(err))
                                })
                            // setState((prevState) => {
                            //     const data = [...prevState.data];
                            //     data.push(newData);
                            //     return { ...prevState, data };
                            // });
                        }, 600);
                    }),
                onRowUpdate: (newData, oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            if (oldData) {
                                setState((prevState) => {
                                    const data = [...prevState.data];
                                    data[data.indexOf(oldData)] = newData;
                                    return { ...prevState, data };
                                });
                            }
                        }, 600);
                    }),
                onRowDelete: (oldData) =>
                    new Promise((resolve) => {
                        setTimeout(() => {
                            resolve();
                            setState((prevState) => {
                                const data = [...prevState.data];
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />
    );
}



const mapStateToProps = (state) => ({
    listMovie: state.movieReducer.listMovie
})

const mapDispatchToProps = dispatch => {
    return {
        dsPhim: () => {
            dispatch(action.apiGetListMovie())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(QuanLyPhim)
