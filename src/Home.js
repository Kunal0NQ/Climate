import React from "react";

export default function Home (){
    return(
        <div className="d-flex justify-content-center bg-white content-container" style={{ height: '500px'}}>
            <div className="align-self-center" style={{color: 'black'}}>
            <h1 className=" brand-font d-inline pr-3">Weather App</h1>
            <i className="fa fa-cloud 3x"></i>
            <p className=""> Free Climate App</p>
            </div>
        </div>
    );
}