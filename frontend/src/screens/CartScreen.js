import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
    /* grab the product id from url */
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]): 1;
    const dispatch = useDispatch();

    useEffect(() => {
       if(productId){
           dispatch(addToCart(productId, qty));
       }
    }, [dispatch, productId, qty]);
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>ADD TO CART : PoductID: {productId} Qty: {qty}</p>
        </div>
    )
}
