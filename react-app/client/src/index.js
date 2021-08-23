import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import "./index.css";
import FoodAPP from './FoodAPP';
import Home from "./Home";
import Menu from "./Menu";
import CheckOut from './CheckOut';
import LogIn from './LogIn';



ReactDOM.render(
    <BrowserRouter>
       <section>
          <FoodAPP />
          

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/Menu" component={Menu}></Route>
            <Route exact path="/CheckOut" component={CheckOut}></Route>
            <Route exact path="/LogIn" component={LogIn}></Route>
          </Switch>
          
       </section>
    </BrowserRouter>,
    document.getElementById("root")
)













