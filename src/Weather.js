import React from "react";
import Search from './Search.js';
import Result from './Result.js';

export default function Weather (){
    return(
        <div className="container pt-4" style={{ height: '500px'}}>
            <Search />
            <Result />
        </div>
    );
}