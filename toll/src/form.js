import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {append} from "./api";

const Create=()=>{

    const[data,setDate]=useState(
        {
            "vehicleNo":"",
            "ownername":"",
            "id":0,
            "balance":0.0,
            "vendor":"",
            "transaction":0
        }
    )

    const perform=(eve)=>{
        // extraction
        const{name,value}=eve.target;
        setDate((old)=>{
            return{
                ...old,
                [name]:value
            }
        })
    }

    const adding=async()=>{

        alert(JSON.stringify(data))
        const t=await append(data)
        alert(t.data)
        window.location.assign("http://localhost:3000")
    }
    return(
        <>
            <div className="mt-3 container" >
                <h5 className="display-4 text-center text-info">Fill the Details</h5>
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-8 col-sm-12 shadow-lg p-3">
                        <div>
                        <TextField className="row mt-3"
                            required
                            id="outlined-required"
                            label="Vehicle No" 
                            onChange={perform}
                            name="vehicleNo"
                            value={data.vehicleNo}
                         /> 

                        <TextField className="ms-3 row mt-3"
                            required
                            id="filled-required"
                            label="Owner Name"
                            onChange={perform}
                            name="ownername"
                            value={data.ownername}
                        />
                        </div>

                        <div>
                        <TextField className="row mt-3"
                            required
                            id="outlined-number"
                            label="Id"
                            onChange={perform}
                            name="id"
                            value={data.id}
                        />

                        <TextField className="ms-3 row mt-3"
                            required
                            id="outlined-number"
                            label="Balance"
                            onChange={perform}
                            name="balance"
                            value={data.balance}
                        />
                        </div>
                        
                        <div>
                        <TextField className="row mt-3"
                            required
                            id="outlined-required"
                            label="Vendor"
                            onChange={perform}
                            name="vendor"
                            value={data.vendor}
                        />

                        <TextField className="ms-3 row mt-3"
                            required
                            id="outlined-required"
                            label="Transactions"
                            onChange={perform}
                            name="transaction"
                            value={data.transaction}
                         /> 
                        </div>
                        
                        <div className="text-center row mt-3">
                            <Button variant="contained" color="success"onClick={adding}>Submit</Button>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
}


export default Create;