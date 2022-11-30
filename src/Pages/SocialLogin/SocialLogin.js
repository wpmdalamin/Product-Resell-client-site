import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../contexts/AuthProvider";


const SocialLogin = () => {
    const { googleSinIn } = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSinIn()
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => console.error(error));
    };
    return (
        <div className="mx-auto">
            <button onClick={handleGoogleSignIn} className="w-full btn text-white" ><FaGoogle></FaGoogle><span className="px-3">CONTINUE WITH GOOGLE</span></button>
        </div>
    );
};

export default SocialLogin;
