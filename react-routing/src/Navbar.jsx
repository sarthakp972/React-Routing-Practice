
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div>
        <h5>Link and Navlink both has same work but Navlink has key  different, there is active plugin </h5>
      <ul>
        
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
                    <hr/>
                    {/* Is Active functionality is in Navbar.cc */}
        <li><NavLink to="/" className={ ({isActive})=>isActive?"active-link":""}>Home</NavLink></li>
        <li><NavLink to="/about"  className={ ({isActive})=>isActive?"active-link":""}>About</NavLink></li>
        <li><Link to="/contact"  className={ ({isActive})=>isActive?"active-link":""}>Contact</Link></li>   {/*There is no work in this Link tag*/}
        
      </ul>
    </div>
  )
}

export default Navbar
