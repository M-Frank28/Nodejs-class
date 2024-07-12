
import {useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const UpdateStudent =() => {

    const{student_id} = useParams();
    //const baseURL = process.env.REACT_AAPP_BASE_URL
    const[loading, setLoading] = useState(false);



    useEffect(() => {
        //const token = sessionStorage.getItem("accessToken")
        //console.log("student_id", student_id);
       //setLoading(true);

       axios.get(`http://localhost:4000/getStudentByid/:id ${student_id}`,{

        /*headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },*/
      })

      .then(res => {
   
        setData({
        
            student_id: res.data.student_id,
            student_firstname: res.data.student_firstname,
            student_lastname: res.data.student_lastname,
            student_gender: res.data.student_gender

        });

        /*.catch(err =>console.log(err)).finally(() =>{

        });*/

      });


    },[student_id]);


    const [data, setData] = useState({
        student_id: '',
        student_firstname: '',
        student_lastname: '',
        student_gender: ''
    });

const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value });
}

const UpdateStudent = (e) => {

    e.preventDefault()

//const token = sessionStorage.getItem("accessToken")
        
       //setLoading(true);

       axios.put(`http://localhost:4000/updateStudent/:id ${student_id}`, data, {
        /*headers:{
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },*/
       })

       //.then(res=>console.log(res));
       .then(res => {

        toast.success('Student updated successfully',{
            position : toast.POSITION.TOP_RIGHT,
            autoClose: 3000,
        })
        //navigate ('/UnitofMeasurement)
       })
    
        //.then(res=>console.log(res));


        .catch (err => {
            toast.error('An error occured while updating the Student ', {
              position : toast.POSITION.TOP_RIGHT,
              autoClose: 3000,
            });
        
        }).finally(() => {
            setLoading(false)
        })



}

return (


 <div>


{loading && <ScaleLoader color ="#3607B7" loading={loading}  css={spinnerOverride} size={150}/>}

<Form onSubmit={UpdateStudent }>

  <h4 className="mb3">Update Student</h4>

  <Form.Group className="mb-3" controlId="student_id">

<Form.Group className="mb-3" controlId="student_id">

  {/* <form.Label> student Id: </form.Label>*/ }
  <Form.Control
 type="input"
 required onChange={handleChange}
 value={data.student_id}
 name="student_id"
 disabled="disabled"
 hidden
   />
</Form.Group>
<Form.Group className="mb-3" controlId="unit">
<Form.Label>Student Firstname: </Form.Label>
<Form.Control
type="input"
placeholder="Enter Student Name"
required onChange={handleChange}
value={data.student_lastname}
name="student_lastname"
hidden
/>
</Form.Group>


<FormControl

type="input"
placeholder="Enter Student Name"
required onChange={handleChange}
value={data.student_lastname}
name="student_lastname"
hidden
/>
</Form.Group>


<Button variant="primary" type="submit">
  Update Customer
</Button>

<ToastContainer/>



  </Form.Control>







</Form.Group>


</Form>

<ToastContainer/>
 </div>










)















}

export default UpdateStudent;