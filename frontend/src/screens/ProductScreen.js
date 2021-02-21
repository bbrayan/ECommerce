import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Product from '../components/Product'
import Rating from '../components/Rating';
import data from '../data'


export default function ProductScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    /* useSelector is used to retrtive currrent state details */
    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;
    /*dispatch is redux function call details Product which get product details */
    useEffect(() =>{
        dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    /* add to cart event, will route to the CartScreen and will send data through url */
    const addToCartHandler = () =>{
        props.history.push(`/cart/${productId}?qty=${qty}`);
    };
    return (
        <div>
            {loading? <LoadingBox /> 
            :
            error?<MessageBox variant="danger">{error}</MessageBox>
            :
            <div>
            <Link to="/">Back to Result</Link>
            
            <div className="row top">
                <div className="col-2">
                    <img className="large" src={product.image} alt={product.name}></img>
                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            <Rating rating={product.rating} numReviews={product.numReviews} />
                        </li>
                        <li>
                            price : ${product.price}
                        </li>
                        <li>
                            Description:
                            <p>{product.description}</p>
                        </li>
                        
                    </ul>
                </div>
                <div className="col-1">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div className="price">${product.price}</div>
                                </div>
                            </li>
                            <li>
                                <div className="row">
                                    <div>Price</div>
                                    <div>
                                       {product.countInStock > 0 ? (<span className="success">In Stock</span>):
                                    (<span className="danger">Unavailable</span>)} 
                                    </div>
                                </div>
                            </li>
                            {
                                product.countInStock > 0 && (
                                    <>
                                    <li>
                                        <div className="row">
                                            <div>Qty</div>
                                            <div>
                                                <select value={qty} onChange={e => setQty(e.target.value)}>
                                                    {
                                                        [...Array(product.countInStock).keys()].map(x => (
                                                            <option key={x+1} value={x+1}>{x+1}</option>
                                                        ))
                                                    }
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                        <li>
                                            <button onClick={addToCartHandler} className="primary block">Add to Cart</button>
                                        </li>
                                    </>
                                )
                            }
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>}
        </div>
        
    )
}


