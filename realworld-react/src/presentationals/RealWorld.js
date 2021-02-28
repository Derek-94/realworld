import React from "react";
import { atom, useRecoilValue } from "recoil";
import { BrowserRouter, Route } from "react-router-dom"
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import NewPost from "./NewPost/NewPost";
import Settings from "./Settings/Settings";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";

export const pageState = atom({
    key: "currentState",
    default: "home"
})

// 로그인한 상태인지 아닌지.
export const loginState = atom({
    key: "loginState",
    default: false
})

const RealWorld = () => {
    // const [loginState, setLoginState] = useRecoilState(loginState);

    return (
        <div className = "real-world">
            <BrowserRouter>
                <Navigation />
                    <Route exact path = "/" component = {Home} />
                    <Route path = "/register" component = {SignUp} />
                    <Route path = "/login" component = {SignIn} />
                    <Route path = "/settings" component = {Settings} />
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default RealWorld;