import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <div>
<nav>

<Link to ="/home">Home</Link>
<Link to ="/signin">Signin</Link>
<Link to ="/about">About</Link>

</nav>

    </div>
  )
}

export default Navbar;
