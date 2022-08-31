import React from "react";

export default function Dummy (){
    return(
            <div className="container pt-4" style={{ height: '500px'}}>
            <Search />
            <div className="row">
                <div className="col-md-5 ">
                    <div className="form-group">
                        <label htmlFor="city">Type City Name</label>
                        <input type="text" className="form-control" name="city" aria-hidden="true"> </input>
                    </div>
                </div>
                <div className="col-lg-1 text-center">
                  <h4 className="card-title">OR</h4>
                </div>
            </div>
            <div className="col-lg-5">
                <div className="col-lg-5 ">
                    <div className="form-group">
                       <label htmlFor="search">Get Co-Ordinate</label>
                       <button className="btn btn-primary fa fa-search" name="search" aria-hidden="true"> </button>
                        <div className="row">
                            <div className="bg-dark text-white rounded pt-1 pl-1 pr-1">Lat:</div>
                            <input className="form-input col mr-1" id="lat" name="coordinate" area-describedby='helpId' > </input>
                            <div className="bg-dark text-white rounded pt-1 pl-1 pr-1">Lat:</div>
                            <input className="form-input col mr-1" id="lon" name="coordinate" area-describedby='helpId'> </input>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <label htmlFor="search">Search</label>
                <button className="btn btn-primary fa fa-search" name="search" aria-hidden="true"> </button>
            </div>
            <div className="row">
                 <div className="col">
                    <div className="card border-primary">
                        <div className="card-body">
                            <h4 className="card-title">City</h4>
                            <p className="card-text">Country</p>
                        </div>
                    </div>
                 </div>
             </div>
        </div>
    );
}