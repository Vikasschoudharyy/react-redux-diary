import React, { useEffect } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../features/cartSlice';

export default function Navbar() {
  const { cart, totalQuantity } = useSelector((state) => state.allCart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <MDBNavbar light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarBrand>
          <a href="/ref=nav_logo" id="nav-logo-sprites" class="nav-logo-link nav-progressive-attribute" aria-label="Amazon.in">
            <span class="nav-sprite nav-logo-base"></span>
            <span id="logo-ext" class="nav-sprite nav-logo-ext nav-progressive-content"></span>
            <span class="nav-logo-locale">Diary.in</span>
          </a>

        </MDBNavbarBrand>
        <span>
          <Link to="/">All Product</Link>
        </span>
        <MDBBtn color='dark'>
          <Link to="/cart">Cart ({totalQuantity})</Link>
        </MDBBtn>

      </MDBContainer>
    </MDBNavbar>
  );
}