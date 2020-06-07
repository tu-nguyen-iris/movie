import React, { Component } from 'react'
import * as action from "./../../redux/action/action"
import { connect } from "react-redux"
import Slider from "react-slick";
import { FaArrowLeft } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink } from "react-router-dom"
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa"
import "./phimDangChieu.scss"
import ModalVideo from "./modal"

class PhimDangChieu extends Component {
constructor(props){
    super(props)
    this.state={
        modal:false
    }
}

 


    componentDidMount() {
        this.props.layDsPhimDangChieu()
    }
    NextArrow(props) {
        const { className, onClick } = props;
        return (
            <FaArrowRight
                className={className}
                style={{ display: "block", color: "black" }}
                onClick={onClick}
            />
        );
    }

    PrewArrow(props) {
        const { className, onClick } = props;
        return (
            <FaArrowLeft
                className="danchoi"
                className={className}
                style={{ display: "block", color: "black",
                 marginRight: "20px"
                 }}
                onClick={onClick}

            />
        );
    }
    danhGia = (movie) => {
        if (movie.danhGia) {
            let rate = movie.danhGia;
            let stars = [];
            for (let index = 0; index < 10; index += 2) {
                if (rate >= 2) {
                    stars.push(
                        <FaStar key={index} />
                    );
                } else if (rate >= 1) {
                    stars.push(

                        <FaStarHalf key={index} />
                    );
                } else
                    stars.push(
                        <FaRegStar key={index} />
                    );
                rate -= 2;
            }
            return stars;
        }
    };
    renderHTML = () => {
        let { phimDangChieu } = this.props;
        if (phimDangChieu.items) {
            return phimDangChieu.items.map((item, index) => {
                return (
                    <div key={index} className="cardsMovie">
                        <img src={item.hinhAnh} />
                        <h3>{item.tenPhim}</h3>
                        
                        <p>{this.danhGia(item)}</p>
                        <NavLink to={`/chi-tiet/${item.maPhim}`} className="button">
                            ĐẶT VÉ
   
                        </NavLink>
                        <ModalVideo movie={item} />
                    </div>
                )
            })
        }
    }


    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            rows: 2,
            prevArrow: <this.PrewArrow />
            , nextArrow: <this.NextArrow />,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                        , rows: 2,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
                {
                    breakpoint: 757,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        dots: false,
                        arrows: false,
                        prevArrow: false,
                        nextArrow: false,
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        rows: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                        dots: false,
                        arrows: false,
                        prevArrow: false,
                        nextArrow: false,

                    }
                }
            ]

        };
        return (
            <div>
                <Slider className="slidePhimDangChieu container" {...settings}>
                    {this.renderHTML()}

                </Slider>

            </div>

        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layDsPhimDangChieu: () => {
            dispatch(action.apiLayDanhSachPhimDangChieu())
        }
    }
}
const mapStateToProps = state => {
    return {

        phimDangChieu: state.movieReducer.phimDangChieu
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PhimDangChieu)