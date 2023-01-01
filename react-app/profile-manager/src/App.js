import logo from './logo.svg';
import './App.css';
import List from "./components/List";
import Create from "./components/Create";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="nav navbar-nav">
            <a className="nav-item nav-link active" href="/">Clients <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/create">Create client</a>
          </div>
        </nav>
        <Routes>
          <Route exact path='/' element={<List />}></Route>
          <Route path='/create' element={<Create />}></Route>

        </Routes>

      </div>
    </Router>
  );
}

export default App;
