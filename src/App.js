import './App.css';
import {Link, BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ManageTrainers from './components/trainers/ManageTrainers';
import EditTrainers from './components/trainers/EditTrainers';


function App() {
  return (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/trainees">Trainees</Link>
        </nav>
        <Routes>
          <Route path='/' element={<h1>Hello!</h1>}/>
          <Route path='/trainers' element={<ManageTrainers/>}/>
          <Route path="/trainers/edit/:id" element={<EditTrainers/>}/>
          <Route path='/trainees' element={<h1>Hello!</h1>}/>
        </Routes>
    </Router>
  );
}

export default App;
