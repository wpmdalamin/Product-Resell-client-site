import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {img, title, resalePrice, details, location , _id} = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {title}
                        <div className="badge badge-secondary">USED</div>
                    </h2>
                    <div>
                        <h4>${resalePrice}</h4>
                        <span>{location}</span>
                    </div>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline"><Link to={`/product/${_id}`}>Details</Link></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;