import React from "react";
import Navbar from './Navbar.js';
import Home from './Home.js';
import Weather from './Weather.js';

class App extends React.Component{
    render(){
        return (
            <div>
                <Navbar />
                <Home />
                <code>
                    <Weather />
                </code>
            </div>
      );
    }
}

export default App;
