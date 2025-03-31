import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([]);
    const { id } = useParams();

    useEffect(() =>{
        loadUsers();
    }, []);

    const loadUsers=async()=>{
        try{
        const result=await axios.get("http://localhost:8080/users");
        setUsers(result.data);
        }
        catch(error){
            console.error(error);
        }
    };

    const deleteUser = async (id) => {
      await axios.delete(`http://localhost:8080/user/${id}`);
      loadUsers();
    };

  return (
    <div className='container'>
        <div className='py-4'>
        <table className="table border shadow">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>

    {
      users.map((user,index)=>(
        <tr>
      <th scope="row" key={index}> {index+1} </th>
      <td>{user.name}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>

      <td><Link classname="btn btn-primary mx-2">View</Link></td>
        <td><Link classname="btn btn-outline-primary mx-2" to={`/edituser/${user.id}`}>Edit</Link></td>
        <td><Link classname="btn btn-danger-primary mx-2" onClick={()=>deleteUser(user.id)}>Delete</Link></td>

    </tr>
      ))
    }
    
    
  </tbody>
</table>
        </div>
    </div>
  )
}
