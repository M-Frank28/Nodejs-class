
import {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

//import Form from 'react-bootstrap/Form';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom'



//import {ScaleLoader} from 'react-spinners';
//import {spinnerOverride} from '../spinnerStyles'



const DeleteStudent =() => {

  const history = useHistory();

    const { id }  = useParams();
    //const baseURL = process.env.REACT_AAPP_BASE_URL
    //const [loading, setLoading] = useState(false);



    useEffect(() => {

      //console.log('id',id)
        //const token = sessionStorage.getItem("accessToken")
        //console.log("student_id", student_id);

       //setLoading(true);

       axios.get(`http://localhost:4000/api/getStudentByid/${id}`,{

        /*headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },*/
      })

      .then(res => {
   
        setData({
        
            id: res.data._id,
            firstname: res.data.firstname,
            lastname: res.data.lastname,
            gender: res.data.gender

        });

        /*.catch(err =>console.log(err)).finally(() =>{
          setLoading(false);
       });*/

      });


    },[id]);


    const [data, setData] = useState({
        _id: "",
        firstname: "",
        lastname: "",
        gender: ""
    });

const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
}

//................................................................

const DeleteStudent = (e) => {

    e.preventDefault()

//const token = sessionStorage.getItem("accessToken")
        
       //setLoading(true);

       axios.delete(`http://localhost:4000/api/deleteStudent/${id}`, data, {
        /*headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },*/
       })
  

       //.then(res=>console.log(res));
       .then(res => {

        alert("Student deleted")
        history.push('/AllStudents')

        toast.success('Student Deleted successfully',{
            position : toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        })
        //navigate ('/UnitofMeasurement)
       })
    
        //.then(res=>console.log(res));


        .catch (err => {
            toast.error('An error occured while Deleting the Student ', {
              position : toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
        
        })/*.finally(() => {
            setLoading(false)
        })*/



}

return (



  <div>





  <Form onSubmit={DeleteStudent}>

  <h3 className="createHeading"> Delete Student  </h3>


  <Form.Group className="mb-3" controlId="student_id">

<Form.Label>id: </Form.Label>
<Form.Control  type="input"  required
 placeholder="Enter Student Name"

onChange={handleChange}

value={data.id}
name="id"
disabled="disabled"
hidden
/>
</Form.Group>

    <Form.Group className="mb-3" controlId="student_id">

      <Form.Label>Firstname:</Form.Label>
      <Form.Control  type="input"  required
       placeholder="Enter Student Name"

      onChange={handleChange}

      value={data.firstname}
    name="firstname"
    disabled="disabled"
     />
    </Form.Group>


    <Form.Group className="mb-3" controlId="unit">
      <Form.Label>Lastname:</Form.Label>
      <Form.Control    
      
      type="input"
placeholder="Enter Student Name"
required 
onChange={handleChange}
value={data.lastname}
name="lastname"
disabled="disabled"
 
      />
    </Form.Group>


    <Link to="/AllStudents">
    <Button variant="danger" type="submit" onClick={DeleteStudent}> Delete Student </Button>
</Link>

    

  
    
    <ToastContainer/>

  </Form>
</div>








)
}

export default DeleteStudent;