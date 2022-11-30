import React, { useEffect, useState } from 'react';

const Users = () => {
    const [allSeller, setAllSeller] = useState([])

    useEffect(() => {
        fetch('https://product-server-omega.vercel.app/users', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllSeller(data))
    }, [])

    console.log("all Seller", allSeller)


    return (
        <div>
            <h3>All Seller</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allSeller.map((singleuser, i) => <tr key={singleuser._id}>
                                <th>{i + 1}</th>
                                <td>{singleuser.name}</td>
                                <td>{singleuser.email}</td>
                                <td><button className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;