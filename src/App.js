import React from 'react';
import './App.scss';
import PNF from "./Page/PageNotFound/PNF"
import { Client, RouteAdmin } from "./routes"
import ClientTemplate from "./template/clientTemplate"
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminClient from './template/adminClient';
import Admin from "./otherPage/DashBoard/admin"
import SignUp from "./Login/Login/signUp"
import Login from "./Login/Login/login"
const routesClient = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return <ClientTemplate
        key={index}
        path={item.path}
        exact={item.exact}
        Component={item.component}



      />
    })
  }
}
const adminRoute = routes => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return <AdminClient
        key={index}
        exact={item.exact}
        path={item.path}
        Component={item.component}



      />
    })
  }
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          {routesClient(Client)}
          {adminRoute(RouteAdmin)}
          {/* <Route path="/dat-ve/:id" component={DatVe} /> */}
          <Route path="/dang-nhap" component={Login} />
          <Route path="/dang-ky" component={SignUp} />
          <Route path="/admin" component={Admin} />
          <Route path="" component={PNF} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
