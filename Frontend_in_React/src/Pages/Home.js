import { useState, useEffect } from 'react';
import http from "../Http";

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
                        <th scope="row" key={user.id}>{index}</th>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>edit</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
