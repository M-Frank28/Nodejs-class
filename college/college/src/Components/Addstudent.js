import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import { application } from 'express';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Addstudent = () => {
  
  const [data, setData]= useState({
    firstname:' ',
    lastname:' ',
    gender:' '
})

const handleChange = (e) => {
  setData ({...data, [e.target.name]: e.target.value})
}

const saveStudent=(e) => {
  e.preventDefault()

  //const token = sessionStorage.getItem("access_token")

  axios.post('http://localhost:4000/addstudent',data,{

    /*headers:{
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },*/
  }
)

.then(res => {
  toast.success('New student added successfully', {
    position : toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });
})
.catch (err => {
  toast.error('An error occured while adding the Student ', {
    position : toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
  });

})



}




  return (
    <div>
      <h3 className="createHeading">Add student</h3>

      <Form onSubmit={saveStudent}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Firstname:</Form.Label>
          <Form.Control name="firstname" type="text"  required onChange={handleChange} />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Lastname:</Form.Label>
          <Form.Control name="lastname" type="text"  required onChange={handleChange}/>
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Select  name="gender"  required onChange={handleChange}>
        <option>--Gender</option>
        <option>Male</option>
        <option>Female</option>
        </Form.Select>
        </Form.Group>




        

        <Button variant="primary" type="submit">Save Details</Button>
        
        <ToastContainer/>

      </Form>
    </div>
  )
}

export default Addstudent;