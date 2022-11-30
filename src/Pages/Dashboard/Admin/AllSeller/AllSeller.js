import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Users = () => {
    const [allSeller, setAllSeller] = useState([])
    const [deleteUser, setDeleteUser] = useState('')

    useEffect(() => {
        fetch('http://localhost:5000/users', {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAllSeller(data))
    }, [deleteUser])

    // console.log("all Seller", allSeller)
    const handelDeleteUser = (id) => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE', 
            // headers: {
            //     authorization: `bearer ${localStorage.getItem('accessToken')}`
            // }
        })
        .then(res => res.json())
        .then(data => {
            setDeleteUser(data.deletedCount)
            console.log("delete user",data)
            if(data.deletedCount > 0){
                toast.success(`User deleted successfully`)
            }
        })
    }

    return (
        <div>
            <h3 className='text-3xl'>All Seller</h3>
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
                                <td><button onClick={()=>handelDeleteUser(singleuser._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;