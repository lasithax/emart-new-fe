import React from "react"
import "./style.css"
import logo from "../../components/assets/images/Emart.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <h1>
            <div className='logo width '>
            <img src={logo} alt='' />
          </div>
            </h1>
            <p>At Emart, we create pathways to connect millions of sellers and buyers in more than 190 markets around the world. Our technology empowers our customers, providing everyone the opportunity to grow and thrive — no matter who they are or where they are in the world.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa-brands fa-google-play'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa-brands fa-app-store-ios'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>No.40/A Millianiam City, Colombo 07</li>
              <li>Email: emart.help@gmail.com</li>
              <li>Phone: +94 715 235 412</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
