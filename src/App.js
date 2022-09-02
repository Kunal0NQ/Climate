import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import Dummy from "./Dummy.jsx"
import Navbar from "./Components/Navbar.js"
import Home from "./Components/Home.js"
import Weather from "./Components/Weather.js"

function App(){
    return(
        <div>
            <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Navbar />}>
                    <Route index  element={<Home />}/>
                    <Route path="weather" element={<Weather />} />
                    <Route path="*" element={
                        <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p> </main>  } />
                  </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;