
import {useEffect, useState } from 'react';
//import { Dropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import Dropdown from 'react-bootstrap/Dropdown';
//import { useEffect } from 'react';
//import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

const AllStudents = () => {


const [ records, setRecords] = useState([])

useEffect(()=> {

//const token = sessionStorage.getItem("accessToken")
 //setLoading(true);

 axios.get(`http://localhost:4000/allResults`,{

    /*headers:{
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },*/
  })

  .then(res => {setRecords(res.data)})
  //.catch(err => {

    /*if (err.response.status === 403) {

        setUnauthorized(true);

    }
  }).finally(()=> {
    setLoading(false);
  })*/
},[])



return (

    <div className='table-responsive'>
        <table className="table table-hover">

<thead>
    <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Gender</th>
        <th>Action</th>
    </tr>
</thead>

<tbody>

{records.map((r, i)=>(


<tr key ={i}>
  {/* <td>{r.customer_id} </td>*/}


  <td> {r.firstname}</td>
  <td>{r.lastname} </td>
  <td>{r.gender}  </td>

  <td>


  <Dropdown>
      <Dropdown.Toggle variant="default" id="dropdown-basic" size="sm">
        Perform Actions
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Link to ={`/UpdateStudent/${r.student_id}` } className="dropdown-item"> 
        Edit Student
        </Link>
      </Dropdown.Menu>


    </Dropdown>




  </td>

</tr>
))}

  </tbody>

        </table>





    </div>



)




}


export default AllStudents;