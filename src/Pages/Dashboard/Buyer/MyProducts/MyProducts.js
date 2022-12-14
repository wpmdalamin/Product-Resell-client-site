import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import useTitle from '../../../../Hooks/UseTitle/useTitle';
import Loading from '../../../Shared/Loading/Loading';

const MyProducts = () => {
    useTitle('My Products')
    const { user } = useContext(AuthContext)
    const [myProducts, SetMyProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch(`https://product-server-omega.vercel.app/product?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                SetMyProducts(data)
                setLoading(false)
            })
    }, [user?.email])

    console.log("my products" , myProducts)

    const handelAdvertise = (id) => {
        console.log(id)
    }


    if(loading){
        return <Loading></Loading>
    }


    return (
        <div className='mt-8'>
            <h3 className='text-3xl text-center my-3'>My Products</h3>
            {
                myProducts.length > 0
                    ?
                    <>
                        <div className="overflow-x-auto">
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Name</th>
                                        <th>Product Condition</th>
                                        <th>Category</th>
                                        <th>Price</th>
                                        <th>Location</th>
                                        <th>Years Of Used</th>
                                        <th>Advertisement</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        myProducts.map((myproduct, i) => <tr key={myproduct._id}>
                                            <th>{i + 1}</th>
                                            <td>{myproduct.title}</td>
                                            <td>{myproduct.productCondition}</td>
                                            <td>{myproduct.category}</td>
                                            <td>${myproduct.resalePrice}</td>
                                            <td>{myproduct.location}</td>
                                            <td>{myproduct.yearsOfUse}</td>
                                            <td>
                                                {
                                                    myproduct.advertisement === 'true' ?
                                                    <>
                                                        <button onClick={() => handelAdvertise(myproduct._id)} className='btn btn-xs'>Advertise</button>
                                                    </>
                                                    :
                                                    <>
                                                        <button className='btn btn-xs'>All Ready AD</button>
                                                    </>
                                                }
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </>
                    :
                    <>
                        <p className='text-red-600 text-center mt-5'>You Have 0 Product Right Now</p>
                    </>
            }




        </div>
    );
};

export default MyProducts;