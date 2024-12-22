import { useNavigate } from "react-router-dom"

function PageNotFound() {
    const navigate=useNavigate();
    function handleClick(){
           
navigate('/');
    }
  return (
    <div>
      Pag Not Found
      <button onClick={handleClick} style={{color:'red'}}>Move to Home page</button>
    </div>
  )
}

export default PageNotFound
