import React from "react";
import { Link,NavLink} from "react-router-dom";
const Navbar = () => {

    // const navLinkStyles=({ isActive})=>{
    //     return {fontWeight:isActive?'bold':'normal',
    //     textDecoration:isActive ? 'none':'underline'
    // }
    // }  this statment should be use in style={navLinkStyles} in NavLink tag attribute
  return (
    <nav>
        <a href="https://www.google.com">Kle tech logo</a>
      <div id="top-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
       <NavLink to="/contact">Contact</NavLink>    {/*NavLink is a active link */}
      </div>
    </nav>
  );
};

export default Navbar;
