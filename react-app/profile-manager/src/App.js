import logo from './logo.svg';
import './App.css';
import List from "./components/client/List";
import Create from "./components/client/Create";
import Edit from "./components/client/Edit";
import Perfil from "./components/perfil/Perfil";
import Address from "./components/address/Address";
import Info from "./components/info/Info";





import { Route, Routes, BrowserRouter as Router,Link } from "react-router-dom";
function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="nav navbar-nav">
          <Link className="nav-item nav-link active" to={"/"}>Clients</Link>
        </div>
      </nav>

      <div className="container">
        <br></br>
        <Routes>
          <Route exact path='/' element={<List />}></Route>
          <Route path='/create' element={<Create />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
          <Route path='/perfil/:id' element={<Perfil />}></Route>
          <Route path='/address/:id' element={<Address />}></Route>
          <Route path='/info/:id' element={<Info />}></Route>



        </Routes>

      </div>
    </Router>
  );
}

export default App;
