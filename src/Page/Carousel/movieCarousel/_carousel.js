import React, { Component } from 'react'

export default class ChiTietCarousel extends Component {
    renderHTML = () => {
        let { movie } = this.props

        if (movie.maPhim === 1404) {
            return (
                <div>
                    <img src="./649366.jpg" />
                </div>
            )
        } else if (movie.maPhim == 1419) {
            return (
                <div>
                    <img src="./610347.jpg" />
                </div>
            )
        } else {
            return (
                <div>
                    <img src="./635123.jpg" />
                </div>
            )
        }
    }

    render() {


        return (
            <div>
                {this.renderHTML()}
            </div>
        )
    }
}
