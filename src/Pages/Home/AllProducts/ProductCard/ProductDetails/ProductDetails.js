import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Modal from '../../../../Modal/Modal';

const ProductDetails = () => {
    const product = useLoaderData();
    
    const { title, img, originalPrice, resalePrice, location, details} = product;
    return (
        <div className='flex w-2/3 m-auto mt-8 mb-5 items-center'>
            <div className="left-section w-1/2">
                <h3 className='text-3xl my-3'>{title}</h3>
                <h5>Original Price: $<del>{originalPrice}</del></h5>
                <h5>Resale Price: ${resalePrice} <button className='btn btn-secondary btn-xs'>USED</button></h5>
                <p>Location: {location}</p>
                <p>{details}</p>
                <label htmlFor="my-modal-3" className='btn btn-accent my-4'>Book Now</label>
                {/* <button htmlFor="my-modal-3" className='btn btn-accent my-4'>Book Now</button> */}
            </div>
            <div className="right-section w-1/2">
                <img src={img} alt="" />
            </div>
            <Modal product={product}></Modal>
        </div>
    );
};

export default ProductDetails;