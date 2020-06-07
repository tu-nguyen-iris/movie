import Axios from "axios"
import * as ActionType from "./../constant/ActionType"
import Swal from 'sweetalert2'
export const apiGetListMovie = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"
        })
            .then(res => {
                dispatch({
                    type: ActionType.GET_LIST_MOVIE,
                    listMovie: res.data
                })
            })
            .catch(err => {
            })
    }
}


export const apiLayDanhSachPhimDangChieu = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=12"
        })
            .then(res => {
                dispatch({
                    type: ActionType.GET_LIST_MOVIE_PLAYING,
                    phimDangChieu: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const apiLayDanhSachPhimSapChieu = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=1&soPhanTuTrenTrang=12"
        })
            .then(res => {
                dispatch({
                    type: ActionType.GET_LIST_MOVIE_SOON,
                    phimSapChieu: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const apiGetMovieCarousel = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP01&soTrang=3&soPhanTuTrenTrang=3"
        })
            .then(res => {
                dispatch({
                    type: ActionType.MOVIE_CAROUSEL,
                    movieCarousel: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const apiLayThongTinPhim = (id) => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`
        })
            .then(res => {
                dispatch({
                    type: ActionType.GET_DETAIL_MOVIE,
                    movie: res.data,
                    isLoading: true

                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const apiLayThongTinRap = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: 'http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap'
        })
            .then(res => {
                dispatch({
                    type: ActionType.LAY_THONG_TIN_RAP,
                    heThongRap: res.data

                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const apiLayThongTinCumRapTheoHeThong = maCumRap => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maCumRap}`
        })
            .then(res => {
                dispatch({
                    type: ActionType.LAY_THONG_TIN_CUM_RAP_THEO_HETHONG,
                    cumRap: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const apiLayLichChieuTheoCumRap = maLichChieu => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maLichChieu}&maNhom=GP10`
        })
            .then(res => {
                dispatch({
                    type: ActionType.LAY_THONG_TIN_LICH_CHIEU_THEO_CUM_RAP,
                    lichChieuCumRap: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}
export const apiLoginClient = (user, history) => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user

        })
            .then(res => {
                if (res.data.maLoaiNguoiDung === "KhachHang") {
                    localStorage.setItem("userClient", JSON.stringify(res.data));
                    Swal.fire({
                        icon: 'success',
                        text: 'Login Success!',
                    })
                    history.push("./")
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Tài khoản hoặc mật khẩu không đúng',
                    })
                }
                dispatch({
                    type: ActionType.LOGIN
                })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Tài khoản hoặc mật khẩu không đúng',
                })
            })
    }
}
export const apiLoginAdmin = (user, history) => {

    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data: user
        })
            .then(res => {
                if (res.data.maLoaiNguoiDung === "QuanTri") {
                    localStorage.setItem("userAdmin", JSON.stringify(res.data))
                    Swal.fire({
                        icon: 'success',
                        text: 'Login Success To Dashboard!',
                    })
                    history.push("/quan-ly-nguoi-dung")
                }
                else {
                    alert("Bạn không có quyền truy cập!")

                }

            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Không Phận Sự Miễn Vào!',
                })

            })
    }



}
export const apiDangKyKhachHang = (user, history) => {
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data: user
        })
            .then(res => {
                console.log(res)
                alert("dang ky thanh cong!")
                history.push("./dang-nhap")

            })
            .catch(err => {
                alert("bi trung tai khoan , try again!!")
                console.log(err.response.data);
            })
    }
}
export const apiLayDangSachNguoiDung = () => {

    return dispatch => {
        Axios({
            method: "GET",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"
        })
            .then(res => {
                dispatch({
                    type: ActionType.LIST_USER
                    , listUser: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

}
export const apiThemNguoiDungAdmin = (user) => {
    let AdUser = JSON.parse(localStorage.getItem("userAdmin"))
    return dispatch => {
        Axios({
            method: "POST",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
            data: user,
            headers: { Authorization: "Bearer " + AdUser.accessToken }

        })
            .then(res => {
                dispatch({
                    type: ActionType.THEM_NGUOI_DUNG,
                    user: res.data
                })
                alert("Them thanh vien thanh cong")


            })
            .catch(err => {
                console.log(err)
                alert("Them thanh vien khong thanh cong!")
            })
    }
}

export const apiUpdate = newUser => {
    let AdUser = JSON.parse(localStorage.getItem("userAdmin"))
    return dispatch => {
        Axios({
            method: "PUT",
            url: "http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            user: newUser,
            headers: { Authorization: "Bearer " + AdUser.accessToken }

        })
            .then(res => {
                alert("cap nhat thanh cong")
                dispatch({
                    type: ActionType.CAP_NHAT_THANH_VIEN,
                    user: res.data
                })
            })
            .catch(err => {
                console.log(err)
                alert("Cap nhat khong thanh cong")
            })

    }
}
export const apiEdit = user => {
    return dispatch => {
        dispatch({
            type: ActionType.EDIT,
            user
        })
    }
}

export const apiLayDanhSachPhongVe = id => {
    return dispatch => {
        Axios({
            method: "GET",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`

        })
            .then(res => {
                dispatch({
                    type: ActionType.LAY_DANH_SACH_PHONG_VE,
                    dsVe: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export const apiDelete = user => {
    let AdUser = JSON.parse(localStorage.getItem("userAdmin"))
    return dispatch => {
        Axios({
            method: "DELETE",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${user}`,
            headers: { Authorization: "Bearer " + AdUser.accessToken }

        })
            .then(res => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                })
                    .then((result) => {
                        if (result.value) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            })

            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Tài khoản đã đặt vé ,không thể xoá!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            })
    }
}
export const search = keyword => {
    return {
        type: ActionType.SEARCH,
        keyword
    }
}
export const movieEdit = movie => {
    return {
        type: ActionType.MOVIE_EDIT,
        movie
    }
}

export const onDeleteMovie = (movie) => {
    let AdUser = JSON.parse(localStorage.getItem("userAdmin"))
    return dispatch => {
        Axios({
            method: "DELETE",
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${movie}`,
            headers: { Authorization: "Bearer " + AdUser.accessToken }

        })
            .then(res => {
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                    if (result.value) {
                        Swal.fire(
                            'Deleted!',
                            'Your movie has been deleted.',
                            'success'
                        )
                        setTimeout(() => {
                            window.location.reload()
                        }, 1400);

                    }
                })
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Không thể xoá phim,thử lại sau!',
                    footer: '<a href>Why do I have this issue?</a>'
                })
            })
    }
}

// tést 


export const apiCarousel = () => {
    return dispatch => {
        Axios({
            method: "GET",
            url: "https://api.themoviedb.org/3/genre/movie/list?api_key=f4718f386ee605decefebc673ce3bc9c&language=en-US",

        })
            .then(res => {
                dispatch({
                    type: ActionType.GET_CAROUSEL,
                    carou: res.data
                })
            })
            .catch(err => {
                console.log(err)
            })
    }
}