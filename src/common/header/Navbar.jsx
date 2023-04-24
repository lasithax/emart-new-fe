import React, { useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false)
  return (
    <>
      <header className='header'>
<<<<<<< HEAD
        <div className='containerd_flex'>
          <div className="navli">
=======
        <div className='container d_flex'>
          <div className="navlink">
>>>>>>> 52011ae56f49ef2bd7df82d205035d67042c5b55
            <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/shop'>Shop</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobileMenu(!MobileMenu)}>
              {MobileMenu ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
