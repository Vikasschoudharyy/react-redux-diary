import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';

export default function ProductCard() {
    const items = useSelector((state) => state.allCart.items);
    const dispatch = useDispatch();
    return (
        <div className='m-2'>
            <MDBContainer className='mt-3'>
                <MDBRow>
                    {
                        items.map((item) => (
                            <MDBCol className='col-sm-10 col-md-4' key={item.id}>
                                <MDBCard  className='mt-4'>
                                    <MDBCardImage src={item.img} position='top' alt='...' className='imgctrl' />
                                    <MDBCardBody className='bodyctrl'>
                                        <MDBCardTitle>{item.title}</MDBCardTitle>
                                        <MDBCardText>
                                           <span>₹ {item.price}</span> 
                                        </MDBCardText>
                                        <MDBBtn className='col-12' onClick={()=>dispatch(addToCart(item))}>Add to Cart</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        ))
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
}