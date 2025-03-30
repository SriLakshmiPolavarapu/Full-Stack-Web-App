import React from 'react'
import {useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

export default function AddUser()
{
    let navigate=useNavigate()
    const [user, setUser] = useState(
    {
        name:"",
        username:"",
        email:""
    });

    //destruct
    const {name, username, email} = user;

    const OnInputChange=(e)=>
    {
        setUser({...user,[e.target.name] : e.target.value});
    };

    //to save details to database 
    const onSubmit=async(e)=>
    {
        e.preventDefault(); //this will remove a big url which will be displaying when we click submit button
        await axios.post("http://localhost:8080/user", user)
        navigate("/")
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                    <h1 className="text-center m-4"> Register User</h1>

                    <form onSubmit={(e)=>onSubmit(e)}>
                    <div className="mb-3">
                        <label for="Name" className="form-label">   Name</label>
                        <input type={"text"} className="form-control" placeholder="Enter your name" name="name" val={name} onChange={(e)=>OnInputChange(e)}required/>
                    </div>
                    <div className="mb-3">
                        <label for="Name" className="form-label">   Username</label>
                        <input type={"text"} className="form-control" placeholder="Enter your Username" name="username" val={username} onChange={(e)=>OnInputChange(e)}required/>
                    </div>
                    <div className="mb-3">
                        <label for="Name" className="form-label">   Email</label>
                        <input type={"text"} className="form-control" placeholder="Enter your email" name="email" val={email} onChange={(e)=>OnInputChange(e)}required/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary" value="Submit">Submit</button>
                    <button type="submit" className="btn btn-outline-danger mx-2" value="Cancle">Cancle</button>
                    </form>
                </div>
            </div>
        </div>
    );
}