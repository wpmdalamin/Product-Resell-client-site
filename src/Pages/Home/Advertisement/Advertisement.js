import React, { useEffect, useState } from 'react';
import ProductCard from '../AllProducts/ProductCard/ProductCard';

const Advertisement = () => {
    const advertisement = 'true';
    const [advertisementData, setAdvertisementData] = useState([])
    useEffect(() => {
        fetch(`https://product-server-omega.vercel.app/ads-product?advertisement=${advertisement}`)
            .then(res => res.json())
            .then(data => {
                console.log("advertisement products ", data)
                setAdvertisementData(data);

            })
    }, [])

    return (
        <div className='my-5'>
            {
                advertisementData.length > 0 &&
                <>
                    <h3 className='text-3xl text-center'>Advertisement</h3>
                    <div className='grid grid-cols-3 gap-8 my-5'>
                        {
                            advertisementData.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>

                </>
            }

        </div>
    );
};

export default Advertisement;