import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard/ProductCard';

const AllPoducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://product-server-omega.vercel.app/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <h3 className="text-3xl text-center my-6">All Product</h3>
            <div className="grid grid-cols-3 gap-8 my-5">
                {
                    products.map(product => <ProductCard 
                        key={product._id}
                        product={product}
                        ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default AllPoducts;