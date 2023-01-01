import logo from './logo.svg';
import './App.css';
import List  from "./components/List";
import { Route, BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <h1>Hola mundo</h1>
       <List></List>
    </div>
  );
}

export default App;
