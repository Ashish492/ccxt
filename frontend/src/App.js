import "./App.css";
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Market from "./component/Market";
function App() {
  return (
  <>
  <Routes>
    <Route path="/market" element={ <Market/>}>

    </Route>
  </Routes>
  </>
  );
}


export default App;
