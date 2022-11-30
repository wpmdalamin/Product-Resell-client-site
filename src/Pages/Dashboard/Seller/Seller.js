import React from 'react';
import useTitle from '../../../Hooks/UseTitle/useTitle';
import MyProducts from '../Buyer/MyProducts/MyProducts';

const Seller = () => {
    useTitle('Seller')
    return (
        <div>
            {/* <h3 className='text-3xl text-center'>All Seller</h3> */}
            <MyProducts></MyProducts>
            
        </div>
    );
};

export default Seller;