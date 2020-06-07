import React, { Component } from 'react'
import Carousel from '../Carousel/Carousel'
import NavMenu from '../../otherPage/NavMenu'
import Footer from '../../otherPage/Footer/footer'
import TinTuc from '../TinTuc/tinTuc'
export default class Home extends Component {
    render() {
        return (
            <div>
                <Carousel />
                <NavMenu />
                <TinTuc />
                <Footer />

            </div>
        )
    }
}
