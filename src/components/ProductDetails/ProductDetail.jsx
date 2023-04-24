import React from 'react'
import { useParams } from 'react-router'
import FDDATA from '../flashDeals/Data';

const ProductDetail = ({ addToCart, shopItems }) => {
    const proid = useParams();
    const proDetail = FDDATA.filter(x => x.id == proid.id)
    const product = proDetail[0];
    console.log(product);
 
    return (
        <>
            <div className="container my-5 py-3">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center mx-auto product">
                        <img src={product.cover} alt={product.title} height="400px" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="display-5 fw-bold">{product.title}</h1>
                        <hr />
                        <h2 className="my-4">${product.price}</h2>
                        <button onClick={() => addToCart(shopItems)}>
                            <i className='fa fa-plus'></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail
