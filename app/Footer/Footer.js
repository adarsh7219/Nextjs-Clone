import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
      <div id='footer'>
        <ul>
          <p className='kkv'> Get to Know Us</p>
          <li> Careers</li>
          <li> Blog</li>
          <li> About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Science</li>
          <li>Help</li>
          <li>Best Experience</li>

        </ul>


        <ul>
          <p className='kkv'>Make Money with Us</p>
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li> Sell apps on Amazon</li>
          <li>Become an Affiliate </li>
          <li>Advertise Your Products </li>
          <li>Self-Publish with Us </li>
          <li>Host an Amazon Hub </li>
          <li>›See More Make Money with Us
          </li>

        </ul>


        <ul>
          <p className='kkv'>  Amazon Payment Products</p>
          <li> Amazon Business Card</li>
          <li> Reload Your Balance</li>
          <li> Amazon Currency Converter</li>
          <li>Host an Amozon Hub</li>
          <li>Host an Amazon Hub </li>
          <li>›See More Make Money with Us
          </li>

          <li>Manage Your Content and Devices </li>
          <li> Amazon Assistant
            Help</li>

        </ul>

        <ul>
          <p className='kkv'> Get to Know Us</p>
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates & Policies</li>
          <li>Returns & Replacements
          </li>
          <li>Tract Order</li>
          <li>Help Service</li>





        </ul>

      </div>

      <div className='name'>

        <p>AMOZON INFORMATION FORM</p>
        <div id='last'>

          <Link href='/About'>About </Link>
          <Link href='/Courses'>Shop</Link>
          <Link href='/Product'>product</Link>
          


        </div>

        <div className='founder'></div>

        <div id='born'></div>


      </div>


    </>

  )
}

export default Footer
