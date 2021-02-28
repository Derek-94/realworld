import React from "react";
import { atom, useRecoilState, useSetRecoilState } from "recoil";
import { Link } from "react-router-dom"
import { pageState } from "../RealWorld";

const navState = atom({
    key: "navCurrentState",
    default: "home"
})

const Navigation = () => {
    const setNavState = useSetRecoilState(navState);
    const setPageState = useSetRecoilState(pageState);

    const onActivate = (e) => {
        const links = document.querySelectorAll(".nav-link");
        links.forEach(link => {
            if(link.classList.contains("active")) {
                link.classList.remove("active");
        }});
        e.target.classList.add("active");
        setNavState(e.target.dataset.text);
        setPageState(e.target.dataset.text);
    }

    return (
        <nav className="navbar navbar-light">
          <div className="container">
            <Link className="navbar-brand" to = "/">conduit</Link>
            <ul className="nav navbar-nav pull-xs-right">
              <li className="nav-item">
                <Link className="nav-link active" to = "/" data-text = "home" onClick = {onActivate}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/NewPost" data-text = "newPost" onClick = {onActivate}>
                  <i className="ion-compose"></i>&nbsp;New Post
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/settings" data-text = "settings" onClick = {onActivate}>
                  <i className="ion-gear-a"></i>&nbsp;Settings
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/register" data-text = "signUp" onClick = {onActivate}>Sign up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to = "/login" data-text = "signIn" onClick = {onActivate}>Sign In</Link>
              </li>
            </ul>
          </div>
        </nav>
    );
}

export default Navigation;