import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const Users = () => {
    const [alluser, setAlluser] = useState([])
    
    const [deleteUser, setDeleteUser] = useState('')
    const role = "buyer";

    useEffect(() => {
        fetch(`https://product-server-omega.vercel.app/admin-users?role=${role}`, {
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setAlluser(data))
    }, [deleteUser])

    const handelDeleteUser = (id) => {
        fetch(`https://product-server-omega.vercel.app/users/${id}`, {
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
            <h3 className='text-3xl my-3'>All Users</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alluser.map((singleuser, i) => <tr key={singleuser._id}>
                                <th>{i + 1}</th>
                                <td>{singleuser.name}</td>
                                <td>{singleuser.email}</td>
                                <td>{singleuser.role}</td>
                                <td><button onClick={() => handelDeleteUser(singleuser._id)} className='btn btn-sm'>Delete</button></td>
                            </tr>)
                        }
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;