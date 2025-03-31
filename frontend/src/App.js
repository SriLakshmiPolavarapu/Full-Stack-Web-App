import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';


function App() {
  return (
    <Router>
    <div className="App">
     <Navbar />

     <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/adduser" element={<AddUser />} />
      <Route exact path="/edituser/:id" element={<EditUser />} />

     </Routes>
    </div>
    </Router>
  );
}

export default App;
