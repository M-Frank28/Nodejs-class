import Form from 'react-bootstrap/Form';
//import { useState } from 'react';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
//import axios from 'axios';
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';




const Login = () => {
  



  return (
    <div>
      <h3 className="createHeading">Login User</h3>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email:</Form.Label>
          <Form.Control name="title" type="text"  />
        </Form.Group>


        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Password:</Form.Label>
          <Form.Control name="title" type="text" />
        </Form.Group>
        

        <Button variant="primary" type="submit">Login</Button>
        
        
      </Form>
    </div>
  )
}

export default Login;