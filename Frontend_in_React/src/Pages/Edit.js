import http from '../Http';
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export default function Edit(props) {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const {id} = useParams();

    useEffect(()=>{
        fetchAllUsers();
    }, []);

    const fetchAllUsers = () => {
        http.get('/users/'+id+'/edit').then(res => {
            setInputs({
                name: res.data.name,
                email: res.data.email,
            });
        })
    }


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}))
  }

  const submitForm = () => {
    http.put('/users/'+id, inputs).then((res) => {
        navigate('/');
    })
  }


  return (
    <div>
      <h2>Edit User</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="card p-4">
            <label>Name:</label>
            <input type="text" name="name" className="form-control"
                value={inputs.name || ''}
                onChange = {handleChange}
            />

            <label>Email:</label>
            <input type="email" name="email" className="form-control"
              value={inputs.email || ''}
              onChange = {handleChange}            
            />

            <button type="button" onClick={submitForm} className="btn btn-info mt-2">Update</button>
          </div>
        </div>
      </div>
    </div>
  )
}
