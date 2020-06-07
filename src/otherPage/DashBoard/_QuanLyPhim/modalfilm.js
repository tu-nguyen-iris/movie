import React, { Component } from 'react'
import 'react-day-picker/lib/style.css';
import Axios from "axios"
import Swal from 'sweetalert2'
import { connect } from "react-redux"
const userAdmin = JSON.parse(localStorage.getItem("userAdmin"))
class ThemPhim extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: {
                maPhim: "",
                tenPhim: "",
                biDanh: "",
                trailer: "",
                hinhAnh: "",
                maNhom: "GP01",
                moTa: "",
                ngayKhoiChieu: "",
                danhGia: ""
            },
            image: null

        }
    }
    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({
            movie: { ...this.state.movie, [name]: value },

        })
    }
    editMovie = movie => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim",
            headers: { "Authorization": "Bearer " + userAdmin.accessToken },
            data: movie
        })
            .then(res => {
                Swal.fire({
                    icon: 'success',
                    title: 'Cập nhật thành công',
                    
                })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            })
    }
    addMovie = (movie) => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim",
            headers: { "Authorization": "Bearer " + userAdmin.accessToken },
            data: movie
        }
        )
            .then(res => {
                Swal.fire({
                    title: 'Thêm phim thành công',
                    width: 600,
                    padding: '3em',
                    background: '#fff url(/images/trees.png)',
                    backdrop: `
                      rgba(0,0,123,0.4)
                      url("/images/nyan-cat.gif")
                      left top
                      no-repeat
                    `
                })

            })
            .catch(err => {
                console.log(err)
            })

    }

    handleFile = e => {
        let file = e.target.files[0]
        this.setState({
            image: file

        })
    }

    handleUploadFile = e => {
        let file = this.state.image
        let img = new FormData()
        img.append("File", file, this.state.movie.hinhAnh)
        img.append("tenphim", this.state.movie.tenPhim)
        img.append("manhom", "GP01")
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/UploadHinhAnhPhim",
            headers: { "Authorization": "Bearer " + userAdmin.accessToken },
            data: img
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleOnSubmit = e => {
        e.preventDefault()
        if (this.props.isEdit) {
            if (!this.state.image) {
                return this.editMovie(this.state.movie)
            } else
                this.editMovie(this.state.movie)
            setTimeout(() => {
                this.handleUploadFile()
            }, 200);



        } else {

            this.addMovie(this.state.movie)
            setTimeout(() => {
                this.handleUploadFile()
            }, 200);

        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.editMovie) {
            let { maPhim,
                tenPhim,
                biDanh,
                trailer,
                hinhAnh,
                maNhom,
                moTa,
                ngayKhoiChieu,
                danhGia } = nextProps.editMovie
            this.setState({
                movie: {
                    maPhim,
                    tenPhim,
                    maNhom,
                    biDanh,
                    trailer,
                    hinhAnh,
                    moTa,
                    ngayKhoiChieu,
                    danhGia

                }
            })
        }
        else {
            this.setState({
                movie: {
                    maPhim: "",
                    tenPhim: "",
                    biDanh: "",
                    trailer: "",
                    hinhAnh: "",
                    maNhom: "GP01",
                    moTa: "",
                    ngayKhoiChieu: "",
                    danhGia: ""
                }
            })
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">

                                <div className="modal-body">
                                    <h3>{this.props.isEdit ? "Cập Nhật Phim" : "Thêm Phim"}</h3>
                                    <form onSubmit={this.handleOnSubmit}>
                                        <div className="form-group">
                                            <label >Mã Phim</label>
                                            <input disabled={this.props.isEdit ? true : false} value={this.state.movie.maPhim} onChange={this.handleChange} name="maPhim" type="number" className="form-control" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label >Tên Phim </label>
                                            <input value={this.state.movie.tenPhim} onChange={this.handleChange} name="tenPhim" type="text" className="form-control" aria-describedby="emailHelp" />
                                        </div>
                                        <div className="form-group">
                                            <label >Bí Danh </label>
                                            <input value={this.state.movie.biDanh} onChange={this.handleChange} name="biDanh" type="text" className="form-control" aria-describedby="emailHelp" />
                                        </div>

                                        <div className="form-group">
                                            <label>Trailer</label>
                                            <input value={this.state.movie.trailer} onChange={this.handleChange} name="trailer" type="text" className="form-control" />
                                        </div>
                                        <div className="form-group">
                                            <label>Tên ảnh</label>
                                            <input value={this.state.movie.hinhAnh} onChange={this.handleChange} name="hinhAnh" type="text" className="form-control" placeholder="*jpg , *gif" />
                                        </div>

                                        <div className="input-group">

                                            <div className="input-group-prepend">
                                                <span className="input-group-text" id="inputGroupFileAddon01">Tải ảnh lên..</span>
                                            </div>
                                            <div className="custom-file">
                                                <input required={this.props.isEdit ? false : true} onChange={e => {
                                                    this.handleFile(e)
                                                }} type="file" name="image" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                                <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                            </div>
                                        </div>



                                        <div className="form-group">
                                            <label>Mô tả</label>
                                            <input value={this.state.movie.moTa} onChange={this.handleChange} name="moTa" type="text" className="form-control" />
                                        </div>


                                        <div className="form-group">
                                            <label>Ngày Khởi Chiếu</label>
                                            <input value={this.state.movie.ngayKhoiChieu} onChange={this.handleChange} name="ngayKhoiChieu" type="text" className="form-control" placeholder="dd/MM/yyyy" />
                                        </div>
                                        <div className="form-group">
                                            <label>Đánh giá Phim</label>
                                            <input value={this.state.movie.danhGia} onChange={this.handleChange} name="danhGia" type="number" className="form-control" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </form>

                                </div>

                                <button type="button" onClick={() => {
                                    window.location.reload()
                                }} className="btn btn-secondary" data-dismiss="modal">Save</button>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    editMovie: state.movieReducer.editMovie
})
export default connect(mapStateToProps, null)(ThemPhim)

