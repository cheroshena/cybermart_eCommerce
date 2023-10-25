import React, { useState } from "react";
import { BsCheckCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { logoLight } from "../../assets/images";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SellerSignIn = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [successMsg, setSuccessMsg] = useState("");

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email) {
            setErrEmail("Enter your email");
        } else {
            setErrEmail("");
        }

        if (!formData.password) {
            setErrPassword("Create a password");
        } else {
            setErrPassword("");
        }

        const { email, password } = formData;

        if (email && password) {
            setSuccessMsg(
                `Hello dear, Thank you for your attempt. We are processing to validate your access.
                 Till then stay connected and additional assistance will be sent to you by your email at 
                 ${email}`
            );
            setFormData({ email: "", password: "" });
        }

        if (!errEmail && !errPassword) {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', {
                    email: formData.email,
                    password: formData.password

                });

                if (response.status === 200) {
                    navigate('/dashboard');
                    console.log('Data sent successfully');
                } else {
                    console.error('Request was not successful');
                }
            } catch (error) {
                console.error('Error sending data:', error);
            }
        }
    };


 
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-1/2 hidden lgl:inline-flex h-full text-white">
                <div className="w-[450px] h-full bg-primeColor px-10 flex flex-col gap-6 justify-center">
                    <Link to="/">
                        <img src={logoLight} alt="logoImg" className="w-64" />
                    </Link>
                    <div className="flex flex-col gap-1 -mt-1">
                        <h1 className="font-titleFont text-xl font-medium">
                            Stay sign in for more
                        </h1>
                        <p className="text-base">When you sign in, you are with us!</p>
                    </div>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        <p className="text-base text-gray-300">
                            <span className="text-white font-semibold font-titleFont">
                                Get started fast with CYBERMART
                            </span>
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
                            nisi dolor recusandae consectetur!
                        </p>
                    </div>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        <p className="text-base text-gray-300">
                            <span className="text-white font-semibold font-titleFont">
                                Access all CYBERMART services
                            </span>
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
                            nisi dolor recusandae consectetur!
                        </p>
                    </div>
                    <div className="w-[300px] flex items-start gap-3">
                        <span className="text-green-500 mt-1">
                            <BsCheckCircleFill />
                        </span>
                        <p className="text-base text-gray-300">
                            <span className="text-white font-semibold font-titleFont">
                                Trusted by online Shoppers
                            </span>
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab omnis
                            nisi dolor recusandae consectetur!
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-10">
                        <Link to="/">
                            <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                                © CYBERMART
                            </p>
                        </Link>
                        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                            Terms
                        </p>
                        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                            Privacy
                        </p>
                        <p className="text-sm font-titleFont font-semibold text-gray-300 hover:text-white cursor-pointer duration-300">
                            Security
                        </p>
                    </div>
                </div>
            </div>
            <div className="w-full lgl:w-1/2 h-full">
                {successMsg ? (
                    <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
                        <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                            {successMsg}
                        </p>
                        <Link to="/sellersignup">
                            <button
                                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300"
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                ) : (
                    <form 
                    onSubmit={handleSubmit}
                    className="w-full lgl:w-[450px] h-screen flex items-center justify-center">
                        <div className="px-6 py-4 w-full h-[90%] flex flex-col justify-center overflow-y-scroll scrollbar-thin scrollbar-thumb-primeColor">
                            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                            Hey Seller! Sign in
                            </h1>
                            <div className="flex flex-col gap-3">
                                {/* Email */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Work Email
                                    </p>
                                    <input
                                        onChange={handleInputChange}
                                        value={formData.email}
                                        name="email" 
                                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="email"
                                        placeholder="john@workemail.com"
                                    />
                                    {errEmail && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errEmail}
                                        </p>
                                    )}
                                </div>

                                {/* Password */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Password
                                    </p>
                                    <input
                                        onChange={handleInputChange}
                                        value={formData.password}
                                        name="password"
                                        className="w-full h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="password"
                                        placeholder="Create password"
                                    />
                                    {errPassword && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errPassword}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                                >
                                    Sign In
                                </button>
                                <p className="text-sm text-center font-titleFont font-medium">
                                    Don't have an Account?{" "}
                                    <Link to="/sellersignup">
                                        <span className="hover:text-blue-600 duration-300">
                                            Sign up
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    )
}

export default SellerSignIn
