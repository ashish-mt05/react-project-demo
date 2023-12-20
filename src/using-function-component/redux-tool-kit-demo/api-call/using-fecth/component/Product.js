import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './../slice/ProductSlice';

export default function Product() {
    const dispatch = useDispatch();
    const {isLoading, products, isError} = useSelector(state => state.products);
    
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    // if (isLoading) {
    //     return <h3>Loading...</h3>
    // }

    const handleAddToCart = (product) => {

    }

    return (
        <div className='productsWrapper'>
        {
         isLoading ? <h3>Loading..</h3>
         : products && products.map((product)=>(
              <div className='card' key={product.id}>
                 <img src={product.image} alt='img'/>
                 <h4>{product.title}</h4>
                 <h5>{product.price}</h5>
                 <button className='btn' onClick={()=>handleAddToCart(product)}>Add to cart</button>
              </div>
         ))
        }
     </div>
    )
}
