// import React from 'react'

import { useNavigate } from "react-router-dom"

function Home() {
    const navigate=useNavigate();
    function handleClick(){
           
navigate('/about');
    }
  return (
    <div>
        <hr/>
        
      Home Page
      <button onClick={handleClick}>Move to About page</button> {/*Using use Navigation*/}
    </div>
  )
}

export default Home
