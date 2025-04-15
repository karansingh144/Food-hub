import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Header = () => {
const {carts} =useSelector((state)=>state.allCart);
      // console.log(carts);
      

  const [cartCount, setCartCount] = useState(1);
  return (
    <div className=''>
      <Navbar style={{height: "60px", background: "black", color:"white "}}>
        <Container>
          <NavLink to="/" className="text-decoration-none">
          <h3 className='text-light 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0 ml-25 mt-2 '>FOOD HUT</h3>
          </NavLink>
          <NavLink to="/cart">
          <div className='border-white h-7 w-8 2xl:mr-0 xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0 mr-37'>  <img src="/cart.png" />
          <span
              className="position-absolute top-2  translate-middle badge rounded-pill bg-danger" 
              style={{ fontSize: '10px' }}
            >
              {carts.length || 0}
           </span>
          </div>
          </NavLink>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
