import NavBar from "./../otherPage/_navBar/navBar"
import React, { Fragment } from 'react'
import { Route } from "react-router-dom"
import Footer from './../otherPage/Footer/footer'
const Layout = (props) => {
    return (
        <Fragment>
            <NavBar />
            {props.children}
        </Fragment>
    )
}

export default function ClientTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsComponent => {
                return <Layout>

                    <Component  {...propsComponent} />


                </Layout>
            }
            }







        />
    )
}
