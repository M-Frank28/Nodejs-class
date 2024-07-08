import { Link } from "react-router-dom";
 
 
const NavBar =()=>{

return(

   <nav className="navbar">

<h2>College APP</h2>
   <div className= "links">
    
    <Link to="/Create">Register</Link>
    <Link to="/Login">Login</Link>
    <Link to="/Addstudent">Add New Student</Link>

   </div>

   </nav>
)


};


export default NavBar;