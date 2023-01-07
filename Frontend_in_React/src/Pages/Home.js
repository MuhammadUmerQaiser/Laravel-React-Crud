import { useState, useEffect } from 'react';
import http from "../Http";
import {Link} from "react-router-dom";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('/users').then(res => {
            setUsers(res.data);
        })
    }

    const deleteUser = (id) => {
        http.delete('/users/'+id).then(res => {
            fetchAllUsers();
        })
    }

  return (
    <div>
        <h2>Users Listing</h2>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) => (
                    <tr>
                        <th key={user.id}>{++index}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className='btn btn-primary' to={{pathname:'/edit/'+user.id}}>Edit</Link> &nbsp;
                            <Link className='btn btn-success' to={{pathname:'/view/'+user.id}}>View</Link> &nbsp;
                            <button className='btn btn-danger' onClick={() => {deleteUser(user.id)}}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
