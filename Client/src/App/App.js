import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "../Header/Header";
import Home from "../Home/Home";
import Login from "../Login/Login";
import OurStore from "../OurStore/OurStore";
import PremiumCardDetail from "../PremiumCards/PremiumCardDetail";
import ProductDetail from "../ProductDetails/ProductDetail";
import Signup from "../SignUp.js/SignUpForm";
import SignUpForm from "../SignUp.js/SignUpForm";
import LaunchPage from "../techLaunch/LaunchPage";
import TechLaunch from "../techLaunch/TechLaunch";
import NotFoundPage from "../Error/404";
import ServerErrorPage from "../Error/500";
import ContactPage from "../Contact/Contact";
import About from "../About/About";
import Logout from "../Logout/Logout";
import { createContext, useContext, useReducer } from "react";
import { initailState, reducer } from "../Reducer/useReducer";

export const UserContext = createContext();

export function Routing() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/ourstore" component={OurStore} />
          <Route path="/signup" component={Signup} />

          <Route path="/contact" component={ContactPage} />
          <Route path="/details/:id" component={PremiumCardDetail} />
          <Route path="/TechLaunch" exact component={TechLaunch} />
          <Route path="/500" component={ServerErrorPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={About} />
          <Route path="/logout" component={Logout} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

function App() {
  const [state, dispatch] = useReducer(reducer, initailState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <Routing />
      </UserContext.Provider>
    </>
  );
}

export default App;
