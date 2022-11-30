import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider';
import Loading from '../../../Shared/Loading/Loading';

const MyOrder = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch(`http://localhost:5000/booknow?email=${user?.email}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                setLoading(false)
            })
    }, [user?.email])

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3 className='text-2xl text-center'>My Booking</h3>
            {
                bookings.length > 0
                    ?
                    <>
                        <div className='my-4'>
                            <div className="overflow-x-auto">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Email</th>
                                            <th>Price</th>
                                            <th>Product Name</th>
                                            <th>Location</th>
                                            <th>Phone</th>
                                            <th>Pay</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bookings.map((booking, i) => <tr key={booking._id}>
                                                <th>{i + 1}</th>
                                                <td>{booking.email}</td>
                                                <td>${booking.price}</td>
                                                <td>{booking.title}</td>
                                                <td>{booking.location}</td>
                                                <td>{booking.phone}</td>
                                                <td><button className='btn btn-sm'>Pay Now</button></td>
                                            </tr>)
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <p className='text-red-600 text-center mt-5'>You Have 0 Order</p>
                    </>
            }
        </div>
    );
};

export default MyOrder;