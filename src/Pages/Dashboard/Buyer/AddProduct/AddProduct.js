import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider';
import useTitle from '../../../../Hooks/UseTitle/useTitle';

const AddProduct = () => {
    useTitle("Add Product")
    const { user } = useContext(AuthContext)
    const imageHostKey = process.env.REACT_APP_image
    const [img, setImg] = useState('')
    const navigate = useNavigate()

    const handelAddProduct = (event) => {
        event.preventDefault();

        const form = event.target;
        const onerEmail = user.email;

        const title = form.title.value;
        const ProductCondition = form.ProductCondition.value;
        const category = form.category.value;
        const resalePrice = form.resalePrice.value;
        const originalPrice = form.originalPrice.value;
        const location = form.location.value;
        const yearsOfUse = form.yearsOfUse.value;
        const details = form.details.value;
        let categoryId = "1";

        const image = form.image.files[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    console.log("images url",data.data.url)
                    setImg(data.data.url)
                }
            })

        const addProduct = { onerEmail, title, categoryId, img, ProductCondition, category, resalePrice, originalPrice, location, yearsOfUse, details }

        console.log(addProduct)

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(addProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    toast.success('successfully Add Product!')
                    navigate('/dashboard/my-products')
                }
            })
    }

    return (
        <div className='w-2/3 m-auto mt-4 mb-8'>
            <h3 className='text-3xl text-center text-black'>Add Product</h3>

            <form className='h-auto' onSubmit={handelAddProduct}>

                <label htmlFor="">Title</label>
                <input name="title" type="text" placeholder="Product Name" className="input input-bordered input-primary w-full mb-3" />

                <label htmlFor=''>Product Condition</label>
                <select name='ProductCondition' className="select select-primary w-full mb-3">
                    <option disabled defaultValue>Select Your Product Condition</option>
                    <option value="Good" >Good</option>
                    <option value="Excellent" >Excellent</option>
                    <option value="So-So" >So So</option>
                    <option value="Dead" >Dead</option>
                </select>

                <label htmlFor="">Category</label>
                <select name='category' className="select select-primary w-full mb-3">
                    <option disabled defaultValue>Select Product Category</option>
                    <option value="iphone" >Iphone</option>
                    <option value="xiaomi" >Xiaomi</option>
                    <option value="samsung" >samsung</option>
                </select>

                <label htmlFor="">Resale Price</label>
                <input name="resalePrice" type="text" placeholder="Resale Price" className="input input-bordered input-primary w-full mb-3" />

                <label htmlFor="">Original Price</label>
                <input name="originalPrice" type="text" placeholder="Original Price" className="input input-bordered input-primary w-full mb-3" />

                <label htmlFor="">Location</label>
                <input name="location" type="text" placeholder="Location" className="input input-bordered input-primary w-full mb-3" />
                <label htmlFor="">Years Of Use</label>
                <input name="yearsOfUse" type="text" placeholder="Years Of Use" className="input input-bordered input-primary w-full mb-3" />

                <label htmlFor="">Add Product Image</label>
                <input name='image' type="file" className="file-input file-input-bordered file-input-primary w-full mb-3" />

                <label htmlFor="">Details</label>
                <p>
                    <textarea name='details' className="textarea textarea-primary w-full mb-3" placeholder="Details About Product"></textarea>
                </p>

                <input className='btn btn-sm btn-accent w-full' type="submit" value="Book Now" />

            </form>

        </div>
    );
};

export default AddProduct;