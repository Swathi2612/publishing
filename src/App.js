import "./App.css";
import Navbar from "./Navbar";
import Create from "./Create";
import Publish from "./Publish";
import {BrowserRouter as Router , Route,Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={
          <Navbar/>} path="/"/>
          <Route element={<Create/>} path="/create"/>
          {/* <Route element={<Publish/>} path="/publish"/> */}
        </Routes>
      </Router>
      {/* <Publish /> */}
    </div>
  );
}

export default App;