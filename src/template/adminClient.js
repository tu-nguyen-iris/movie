import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router-dom'
import NavAdmin from "./../otherPage/DashBoard/NavAdmin"
const Layout = props => {
    return (
        <Fragment>
            <NavAdmin />
            {props.children}
        </Fragment>
    )
}
export default function AdminClient({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsComponent => {
                if (localStorage.getItem("userAdmin")) {
                    return (
                        <Layout>
                            <Component {...propsComponent} />
                        </Layout>

                    )
                } else {
                    return <Redirect to="/admin" />
                }
            }}





        />
    )
}
