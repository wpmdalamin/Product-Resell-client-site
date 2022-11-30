import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useTitle from '../../Hooks/UseTitle/useTitle';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    useTitle('Dashboard')
    const [duser, setDuser] = useState([])
    const { user } = useContext(AuthContext)

    useEffect(() => {
        fetch(`http://localhost:5000/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setDuser(data))
    }, [user?.email])

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/*  Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <div className='flex flex-col'>
                            {
                                duser.role === "seller" &&
                                <>
                                    <Link className='' to="/dashboard/seller">Seller</Link>
                                    <Link to="/dashboard/add-product">Add Product</Link>
                                    <Link to="/dashboard/my-products">My Products</Link>
                                </>

                            }
                            {
                                duser.role === "admin" &&
                                <>
                                    <Link to="/dashboard/admin/">Admin</Link>
                                    <Link to="/dashboard/admin/">All Users</Link>
                                    <Link to="/dashboard/admin/all-seller">All Seller</Link>

                                </>
                            }
                            {
                                duser.role !== "admin" && duser.role !== "seller" &&
                                <>
                                    <Link to="/dashboard/buyer">Buyer</Link>
                                    <Link to="/dashboard/buyer">My Booking</Link>
                                </>
                            }
                        </div>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Dashboard;