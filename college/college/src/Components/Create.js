import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Create = () => {


  const [data, setData]= useState({
    email:' ',
    password:' '
})

const handleChange = (e) => {
  setData ({...data, [e.target.name]: e.target.value})
}

const registerUser=(e) => {
  e.preventDefault()

  //const token = sessionStorage.getItem("access_token")

  axios.post('http://localhost:4000/registerUser',data,{

    /*headers:{
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },*/
  }
)

.then(res => {
  toast.success(' added successfully', {
    position : toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
})
.catch (err => {
  toast.error('An error occured while Registering or user is already registered', {
    position : toast.POSITION.TOP_RIGHT,
    autoClose: 5000,
  });

})



}
  



  return (
    <div>
      <h3 className="createHeading">Register User</h3>

      <Form onSubmit={registerUser}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email:</Form.Label>
          <Form.Control name="email" type="text"  required onChange={handleChange} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password:</Form.Label>
          <Form.Control name="password" type="text" required onChange={handleChange} />
        </Form.Group>
        

        <Button variant="primary" type="submit">save</Button>
        
        <ToastContainer/>

      </Form>
    </div>
  )
}

export default Create;
