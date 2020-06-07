import React, { Component } from 'react'
import { connect } from "react-redux"
import * as action from "./../../redux/action/action"
import Slider from "react-slick";
import ChiTietCarousel from './movieCarousel/_carousel';


class Carousel extends Component {
    componentDidMount() {
        this.props.layDanhSachPhim()
    }
    renderHtML = () => {
        let { movieCarousel } = this.props;
        if (movieCarousel.items) {
            return movieCarousel.items.map((item, index) => {
                return <ChiTietCarousel key={index} movie={item} />
            })
        }
    }


    render() {
        const settings = {
            fade: true,
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoPlay: true,

        };
        return (
            <div>
                <Slider className="slider" {...settings}>
                    {this.renderHtML()}

                </Slider>

            </div>

        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        layDanhSachPhim: () => {
            dispatch(action.apiGetMovieCarousel())
        }
    }
}
const mapStateToProps = state => {
    return {
        movieCarousel: state.movieReducer.movieCarousel
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carousel)