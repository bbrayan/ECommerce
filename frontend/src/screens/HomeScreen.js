import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Product from '../components/Product';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';



export default function HomeScreen() {
    /* setup hooks used to determine the state of the site when you first load the page */
    const [products, setProductes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(()=>{
        /* attempt to load data from back end */
        const fetchData = async () =>{
            /* set loading to true while data is being loaded
                and then back to false once data is retrived 
            */
            try{
                setLoading(true);
                const { data } = await axios.get('/api/products');
                setLoading(false);
                setProductes(data);
            } catch(err){
                /* if request fails and there is an error we catch it and load that error */
                setError(err.message);
                setLoading(false);
            }
           
        };
        fetchData();
    }, []);
    /* first i check if it is eather loading or there is an error, if there is neither then i map out
    the product data */
    return (
        <div>
            {loading? <LoadingBox /> 
            :
            error?<MessageBox variant="danger">{error}</MessageBox>
            :
            <div className="row center">
                {products.map(product => (
                    <Product key={product._id} product={product} />
                ))}
            </div>
            }
        </div>
    )
}


