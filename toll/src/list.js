import React, {useEffect, useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Create from './form'
import {oneAtTime, traverse } from "./api";
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import Read from "./read";


export const List=()=>{

    const [cview,setCview]=useState(false)
    const [rview,setRview]=useState(false)
    const [all,setAll]=useState([])

    // const callCreate=()=>{
    //     setCview(true)
    // }

    useEffect(()=>{
        iterate()
    },[])

    const iterate=async()=>{
        const t=await traverse()
        setAll(t.data)
    }

    const[obj,setObj]=useState(
        {
            "vehicleNo":"",
            "ownername":"",
            "id":0,
            "balance":0.0,
            "vendor":"",
            "transaction":0
        }
    )

    const reading=async(one)=>{
        const hey=await oneAtTime(one)
        setObj(hey.data)
    }

    return(
        <>
            <>
            {(cview)?
            <>
                <Create/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setCview(false)}>
                    Back
                </button>
            </>
            :
            (rview)?
            <>
                <Read corp={obj}/>
                <button className="btn btn-outline-dark" 
                onClick={()=>setRview(false)}>
                    Back
                </button>
            </>
            :
            <>
            <button className="btn btn-outline-success" onClick={()=>setCview(true)}>
                form
            </button>
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12 table-responsive">
                    <table className="table table-stripped table-hover shodow text-light bg-info">
                        <thead>
                            <tr>
                                <th>vehicleNo</th>
                                <th>ownername</th>
                                <th>id</th>
                                <th>balance</th>
                                <th>vendor</th>
                                <th>transaction</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {all.map((data,index)=>(
                                <tr>
                                    <td onClick={
                                        ()=>{
                                            setRview(true)
                                            reading(data.vehicleNo)
                                        }}>
                                        {data.vehicleNo}
                                    </td>
                                    <td>
                                        {data.ownername}
                                    </td>
                                    <td>{data.id}</td>
                                    <td>{data.balance}</td>
                                   
                                    <td>
                                        {data.vendor}
                                    </td>

                                    <td>
                                        {data.transaction}
                                    </td>
                                    <td>
                                        <Button color="error" className="btn btn-outline-danger">
                                            <RemoveCircleIcon/>
                                        </Button>
                                    </td>
                                    <td>
                                        <Button color="warning" className="btn btn-outline-warning">
                                            <EditIcon/>
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            </>
            }
        </>  
        </>
    );
}

export default List;