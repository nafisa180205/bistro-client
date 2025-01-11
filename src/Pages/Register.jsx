import React, { useContext, useEffect, useRef, useState } from 'react';
// import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';
import loginImg from "../assets/others/authentication2.png"
import "../App.css"
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const { createUser, updateUser } = useContext(AuthContext)
    const {
        register,
        reset,
        formState: { errors },
        handleSubmit,
    } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
        .then(result=>{
            const user = result.user
            console.log(user)
            console.log(data.name, data.photo)
            updateUser(data.name, data.photo)
            .then(() => {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Sign Up successfull",
                    showConfirmButton: false,
                    timer: 2000
                  });

                  navigate("/")
              }).catch((error) => {
                console.log(error)
              });
              


        })
    }
    // const captchaRef = useRef(null)
    // const [disabled, setDisabled] = useState(true)
    // useEffect(() => {
    //     loadCaptchaEnginge(6);
    // }, [])




    return (
        <>
            <Helmet>
                <title>Bistro Boss||Register</title>
            </Helmet>
            <div className=" min-h-screen flex justify-center items-center print-bg" >
                <div className="w-8/12 mx-auto flex flex-col-reverse lg:flex-row print-bg shadow-xl py-20" >
                    <div className=" lg:w-1/2 w-full flex justify-center items-center ">

                        <img src={loginImg} alt="" />
                    </div>
                    <div className=" lg:w-1/2 w-full ">
                        <h1 className="text-5xl font-bold text-center">Register now!</h1>
                        <form className="card-body w-11/12" onSubmit={handleSubmit(onSubmit)} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" {...register('name', { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                {errors.name && <p className='text-red-700'>Name is required</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input type="text" {...register('photo', { required: true })} name='photo' placeholder="photo" className="input input-bordered" />
                                {errors.photo && <p className='text-red-700'>PhotoURL is required</p>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email', { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                {errors.email && <p className='text-red-700'>Email is required</p>}
                            </div>

                            {/* captcha */}
                            {/* <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <input type="text" name='captcha' placeholder="Type the captcha" ref={captchaRef} className="input input-bordered" required />
                            <button className="btn btn-xs text-white bg-slate-950" onClick={handleValidateCaptcha}>Validate</button>

                        </div> */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"
                                    {...register('password', { required: true, minLength: 6, maxLength: 20, pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/ })}
                                    name='password' placeholder="password" className="input input-bordered" />
                                {errors.password?.type === "required" && <p className='text-red-700'>Password is required</p>}
                                {errors.password?.type === "minLength" && <p className='text-red-700'>Password must be 6 character</p>}
                                {errors.password?.type === "minLength" && <p className='text-red-700'>Password should not be more than 20 character</p>}
                                {errors.password?.type === "pattern" && <p className='text-red-700'>Password must have <br />
                                    1. One UpperCase letter <br /> 2.One LowerCase letter <br /> 3. One Number  character</p>}
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type='submit' value="Register" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;