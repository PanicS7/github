import React, { useState } from 'react';
import './App.css';
import Home from './Components/Home';
import Search from './Components/Search';


function App() {
  const [page,setPage] = useState("home");

  function handleClick(pageId) {
    setPage(pageId);   
  }

  return (
    <div className="App">
      <div>
        <nav>
          <div>
            <h1>GITHUB APP</h1>
          </div>
          <ul>
            <li className={page === "home" ? "active" : null} onClick={e => handleClick("home")}>Home page</li>
            <li className={page === "search" ? "active" : null} onClick={e => handleClick("search")}>Search page</li>
          </ul>
        </nav>
      </div>
      {page === "home" ? <Home/> : <Search/>}
    </div>
  );
}

export default App;
