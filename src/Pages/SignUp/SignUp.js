import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import SocialLogin from "../SocialLogin/SocialLogin";


const SignUp = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [signUpError, setSignUPError] = useState("");
    const { createUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate()

    const handleSignUp = (data) => {
        setSignUPError("");
        createUser(data.email, data.password).then((result) => {
            const user = result.user;
            console.log("create user", user);
            const userInfo = {
                displayName: data.name,
            };
            updateUser(userInfo)
                .then(() => {
                    saveUser(data.name, data.email, data.role);
                })
                .catch((err) => console.log(err));
        });

    };
    const saveUser = (name, email, role) => {
        const user = { name, email, role }
        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    toast("User Created Successfully.");
                    navigate('/')
                }
            })

    }

    return (
        <div className="h-[800px] flex justify-center items-center">
            <div className="w-96 p-7 shadow-lg">
                <h2 className="flex justify-center text-3xl font-bold">Sign Up</h2>
                <form className="" onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Name</span>
                        </label>
                        <input
                            type="text"
                            {...register("name", {
                                required: "Name is Required",
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && (
                            <p className="text-red-500">{errors.name.message}</p>
                        )}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            {...register("email", {
                                required: true,
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && (
                            <p className="text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 6,
                                    message: "Password must be 6 characters long",
                                },
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && (
                            <p className="text-red-500">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            {" "}
                            <span className="label-text">Select Role</span>
                        </label>

                        <select
                            {...register("role", {
                                required: "Role is Required",
                            })}
                            className="select select-bordered w-full max-w-xs">
                            <option defaultValue value='buyer'>Buyer</option>
                            <option value="seller">Seller</option>
                        </select>
                        {errors.password && (
                            <p className="text-red-500">{errors.role.message}</p>
                        )}
                    </div>

                    <input
                        className="btn w-full mt-4"
                        value="Sign Up"
                        type="submit"
                    />
                    {signUpError && <p className="text-red-600 my-2">{signUpError}</p>}

                </form>
                <p className="mt-3">
                    Already have an account{" "}
                    <Link className="text-secondary" to="/login">
                        Please Login
                    </Link>
                </p>
                <div className="divider">OR</div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default SignUp;
