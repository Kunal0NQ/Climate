import React from "react";
import { Link } from "react-router-dom";

export default function Home (){
    return(
        <div className="d-flex justify-content-center bg-white content-container" style={{ height: '500px'}}>
            <div className="align-self-center" style={{color: 'black'}}>
            <h1 className=" brand-font d-inline pr-3"><Link style={{color: 'black'}} to="/weather">Weather App</Link> </h1>
            <i className="fa fa-cloud fa-2x"></i>
            <p className=""> Free Climate App</p>
            </div>
        </div>
    );
}