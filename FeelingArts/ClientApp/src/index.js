import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-svg.css";
import "assets/css/nucleo-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-design-system.scss?v1.0.0";

import Index from "views/Index.js";
import Sections from "views/Sections.js";
import Presentation from "views/Presentation.js";
import AboutUs from "views/examples/AboutUs.js";
import AccountSettings from "views/examples/AccountSettings.js";
import BlogPost from "views/examples/BlogPost.js";
import BlogPosts from "views/examples/BlogPosts.js";
import ChatPage from "views/examples/ChatPage.js";
import CheckoutPage from "views/examples/CheckoutPage.js";
import ContactUs from "views/examples/ContactUs.js";
import Ecommerce from "views/examples/Ecommerce.js";
import Error from "views/examples/Error.js";
import Error500 from "views/examples/Error500.js";
import InvoicePage from "views/examples/InvoicePage.js";
import LandingPage from "views/examples/LandingPage.js";
import LoginPage from "views/examples/LoginPage.js";
import PricingPage from "views/examples/PricingPage.js";
import ProductPage from "views/examples/ProductPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";
import ResetPage from "views/examples/ResetPage.js";


import HomeBlog from "views/HomeBlog.js";
//import Search from "views/Search.js";
import SearchArtwork from "views/SearchArtwork.js";
import NormalSearch from "views/normal-mode/NormalSearch.js"
import NormalSearchArtwork from "views/normal-mode/NormalSearchArtwork.js"
import Homepage from "views/homepage/Homepage.js";
import SimpleMode from "views/simple-mode/SimplePage.js";
import NormalMode from "views/normal-mode/NormalPage.js";
import ProtectedRoute from "./components/a17components/authentication/ProtectedRoute";
import Signin from "./views/authentication/Signin";
import SimpleSearch from "./views/simple-search/SimpleSearch";
import SimpleSearchArtwork from "./views/simple-search/SimpleSearchArtwork";





ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/index" exact render={(props) => <Index {...props} />} />
      
      {/*<Route*/}
      {/*  path="/search"*/}
      {/*  exact*/}
      {/*  render={(props) => <Search {...props} />}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*    path="/homepage"*/}
      {/*    exact*/}
      {/*    render={(props) => <Homepage {...props} />}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*    path="/simplemode"*/}
      {/*    exact*/}
      {/*    render={(props) => <SimpleMode {...props} />}*/}
      {/*/>*/}
      {/*<Route*/}
      {/*    path="/searchartwork"*/}
      {/*    exact*/}
      {/*    render={(props) => <SearchArtwork {...props} />}*/}
      {/*      />*/}
      {/*  <Route*/}
      {/*      path="/normalsearch"*/}
      {/*      exact*/}
      {/*      render={(props) => <NormalSearch {...props} />}*/}
      {/*  />*/}
      {/*  <Route*/}
      {/*      path="/normalsearchartwork"*/}
      {/*      exact*/}
      {/*      render={(props) => <NormalSearchArtwork {...props} />}*/}
      {/*  />*/}
      {/*<Route*/}
      {/*    path="/normalmode"*/}
      {/*    exact*/}
      {/*    render={(props) => <NormalMode {...props} />}*/}
      {/*      />*/}
        <Route
            path="/signin"
            exact
            render={(props) => <Signin {...props} />}
        />
      {/*  <Route*/}
      {/*      path="/simplesearch"*/}
      {/*      exact*/}
      {/*      render={(props) => <SimpleSearch {...props} />}*/}
      {/*  />*/}
        <Route exact path="signin" component={Signin} />
        <ProtectedRoute exact path="/homepage" component={Homepage} />
        <ProtectedRoute exact path="/simplemode" component={SimpleMode} />
        <ProtectedRoute exact path="/normalmode" component={NormalMode} />
        <ProtectedRoute exact path="/normalsearch" component={NormalSearch} />
        <ProtectedRoute exact path="/normalsearchartwork" component={NormalSearchArtwork} />
        <ProtectedRoute exact path="/simplesearch" component={SimpleSearch} />
        <ProtectedRoute exact path="/simplesearchartwork" component={SimpleSearchArtwork} />
        <Redirect to="/signin" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
