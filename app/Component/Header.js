 "use clent"
import React from 'react'
import Link from 'next/link'
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HomeIcon from '@mui/icons-material/Home';



const Header = () => {
    return (
        <>


      <div id='main12'>


            <div className='nav'>
                <div className='img'></div>
                <div className='second '>
                <p id='dev '>Delivery To</p>
                <p className='ind'>India</p>
               </div>
               <div className='nav-serach'>
                <select className='Search-select'>
               < option></option>
               < option>Books</option> 
               < option>Computer</option>
               < option>Deals</option>
               < option>Digital Music</option>
               < option>Electronic</option>
               < option>Boy's Fashion</option>
               < option>Movies & Tv</option>
               < option>Kindle Store</option>
               < option>Home & Kitchan</option>
               < option>Men's Fashion</option>
                </select>
               <input placeholder="Search Amozon" className='Search-input '></input>
               <button className='btn'>Search</button>

               </div>
              <div id='p'>
                <p id='p1'><HomeIcon/></p>
                <p id='p2'><FastfoodIcon/></p>
                </div>

                <div id='next'>
                    <p id='p3'>Returs</p>
                    <p id='p4'> & Order</p>
                </div>
                 
                 <p id='sel1'>Cart</p>

                 
              {/* <div className='main'>
                    <Link href='/About'>About </Link>
                    <Link href='/Courses'>courses</Link>
                    <Link href='/Product'>product</Link>

                </div> 
                 */}

            </div>
            <div className='md'>
                
                <p>Are on Amozon.con you also shop Amozon.com with fast local Delivery . click.hear to go Amozon</p>
                
            </div>


            </div>

        </>
    )
}

export default Header
