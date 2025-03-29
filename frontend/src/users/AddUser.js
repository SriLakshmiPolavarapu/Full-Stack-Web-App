import React from 'react'

export default function AddUser()
{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                    <h1 className="text-center m-4"> Register User</h1>
                    <div className="mb-3">
                        <label for="Name" className="form-label">   Name</label>
                        <input type={"text"} className="form-control" placeholder="Enter your name" name="name" required/>
                    </div>
                    <div className="mb-3">
                        <label for="Name" className="form-label">   Username</label>
                        <input type={"text"} className="form-control" placeholder="Enter your Usernamename" name="username" required/>
                    </div>
                    <div className="mb-3">
                        <label for="Name" className="form-label">   Email</label>
                        <input type={"text"} className="form-control" placeholder="Enter your email" name="email" required/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary" value="Submit">Submit</button>
                    <button type="submit" className="btn btn-outline-danger mx-2" value="Cancle">Submit</button>

                </div>
            </div>
        </div>
    );
}