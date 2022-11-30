import React, { useContext} from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Modal = ({ product }) => {
    const { user } = useContext(AuthContext)
    console.log("insite modal",product)
    const { resalePrice, location, title } = product;
    const navigate = useNavigate()

    const handelBookNow = (event) => {

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const booknow = { name, email, title, price, location, phone }
        fetch('https://product-server-omega.vercel.app/booknow', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(booknow)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {

                    toast.success('successfully Book!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                    navigate('/dashboard')
                }
            })


    }


    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{product?.title}</h3>
                    <form onSubmit={handelBookNow}>
                        <label htmlFor="">Name</label>
                        <input name="name" type="text" disabled  defaultValue={user?.displayName} placeholder="Name" className="input input-bordered input-primary w-full mb-3" />
                        <label htmlFor="">Email</label>
                        <input name="email" type="email" disabled defaultValue={user?.email} placeholder="Email" className="input input-bordered input-primary w-full mb-3" />
                        <label htmlFor="">Price</label>
                        <input name="price" type="text" disabled defaultValue={resalePrice} placeholder="Price" className="input input-bordered input-primary w-full mb-3" />
                        <label htmlFor="">Location</label>
                        <input name="location" type="text" disabled defaultValue={location} placeholder="Location" className="input input-bordered input-primary w-full mb-3" />
                        <label htmlFor="">Phone</label>
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered input-primary w-full mb-3" />

                        <input className='btn btn-sm btn-accent w-full' type="submit" value="Book Now" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal;