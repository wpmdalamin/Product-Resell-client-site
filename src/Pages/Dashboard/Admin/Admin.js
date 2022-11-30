import React from 'react';
import useTitle from '../../../Hooks/UseTitle/useTitle';
import Users from './Users/Users';

const Admin = () => {
    useTitle('Admin')
    return (
        <div>
            <h3 className='text-3xl text-center'>All User</h3>
            <Users></Users>
        </div>
    );
};

export default Admin;