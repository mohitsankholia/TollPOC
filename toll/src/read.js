import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Read=(mohit)=>{
    return(
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 col-sm-12 card p-3 shadow bg-dark">
                        <h1 className="card-title text-center text-primary">{mohit.corp.vehicleNo}</h1>
                        <div className="card-body">
    
                            <h3 className="card-text text-secondary text-center">{mohit.corp.ownername}</h3>
                            <h2 className="card-text text-danger text-center "> {mohit.corp.id} </h2>
                            <h1 className="card-text text-success text-center">{mohit.corp.balance}</h1>
                            <h1 className="card-text text-warning text-center">{mohit.corp.vendor}</h1>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Read;