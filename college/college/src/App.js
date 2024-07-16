
import './App.css';
import NavBar from './Components/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Components/Create';
import Login from './Components/Login';
import Addstudent from './Components/Addstudent'
import AllStudents from './Components/AllStudents';
import UpdateStudent from './Components/UpdateStudent';
import DeleteStudent from './Components/DeleteStudent';

function App() {
  
  return (
    <Router>

 <div className="App">

    <NavBar/>

    <div className='content'>

<Switch>



<Route  path="/Create">
<Create/>
</Route>


<Route  path="/Login">
<Login/>
</Route>


<Route  path="/Addstudent">
<Addstudent/>
</Route>


<Route  path="/allStudents">
<AllStudents/>
</Route>

<Route  path="/UpdateStudent/:id" >

<UpdateStudent/>
</Route>


<Route  path="/deleteStudent/:id" >

<DeleteStudent/>
</Route>









</Switch>
    </div>
    </div>
    </Router>

  );
}

export default App;
