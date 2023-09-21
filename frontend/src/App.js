
import React, { useState, useEffect }  from 'react';
import logo from './logo.svg';
import './App.css';

import axios from 'axios';


function App() {
  
  const [users, setUsers] = useState ([]);


  axios.defaults.withCredentials = true; 


  useEffect( () => {
    
      axios.get('/api/users')
           .then ( res => setUsers(res.data))
           .catch( err => console.log (err))
     }, []); 

//  useEffect( () => {
    
//       axios.get('/')
//       .then ( res => console.log(res.data. ))
//       .catch( err => console.log (err))
           
//      }, []); 



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <strong> THE REACT PROXY VERSION port 8000.07</strong>
        </p>
            {
                
                
                users.map ( profile => (  <div key={profile.id}>
                                            <h1> {profile.id}   </h1>
                                            <h2> {profile.name} </h2>
                                            <h3> {profile.age}  </h3>
                                          </div>
                                        )
                          )              
            }

        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
