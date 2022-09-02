import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Navbar (){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand" to="/">Weather  App</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <Link className="nav-link active" aria-current="page" to="/weather">Weather <i className="fa fa-cloud"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <Outlet />
        </div>
    );
}