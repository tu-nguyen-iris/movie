import Home from "./Page/Home/Home"
import ChiTietPhim from "./Page/ChiTietPhim/chiTiet"
import QuanLyNguoiDung from "./otherPage/DashBoard/_QuanLyNguoiDung/_quanLyNguoiDung"
import DatVe from "./Page/_DatVe/datVe"
import ThongTinNguoiDung from "./Page/_ThongTinNguoiDung/userInfo"
import Search from "./Page/SearchFilter/search"
import QuanLyPhim from "./otherPage/DashBoard/_QuanLyPhim/_quanLyPhim"
import QanLyFilm from "./otherPage/DashBoard/_QuanLyPhim/qanLyPhim"
// import Carou from "./Page/COU/carousel"
const Client = [

    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/chi-tiet/:id",
        exact: false,
        component: ChiTietPhim
    },

    {
        path: "/thong-tin-tai-khoan",
        exact: false,
        component: ThongTinNguoiDung
    },

    {
        path: "/dat-ve/:id",
        exact: false,
        component: DatVe
    },
    {
        path: "/tim-kiem",
        exact: false,
        component: Search
    },
    // {
    //     path: "/tim-kiem1",
    //     exact: false,
    //     component: Carou
    // },




]
const RouteAdmin = [
    {
        path: "/quan-ly-phim",
        component: QuanLyPhim, exact: false
    },
    {
        path: "/quan-ly-phim2",
        component: QanLyFilm, exact: false
    },

    {
        path: "/quan-ly-nguoi-dung",
        component: QuanLyNguoiDung, exact: true
    }
]
export { Client, RouteAdmin }