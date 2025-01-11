import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Provider/AuthProvider';
import loginImg from "../assets/others/authentication2.png"
import "../App.css"
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'


const Login = () => {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
  
    const { signIn } = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleSubmit = (e) => {

        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        signIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                Swal.fire({
                    title: "User Login Successfull",
                    showClass: {
                      popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                      popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                  });
                  navigate(from, { replace: true });
            })


    }

    const handleValidateCaptcha = (e) => {
        const user_captcha_value = e.target.value
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false)
        }
    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss||Login</title>
            </Helmet>
            <div className=" min-h-screen flex justify-center items-center print-bg" >
                <div className="w-8/12 mx-auto flex flex-col-reverse lg:flex-row print-bg shadow-xl py-20" >
                    <div className=" w-1/2 flex justify-center items-center ">

                        <img src={loginImg} alt="" />
                    </div>
                    <div className=" w-1/2  ">
                        <h1 className="text-5xl font-bold text-center">Login now!</h1>
                        <form className="card-body w-11/12" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>

                            

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            {/* captcha */}
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" name='captcha' onBlur={handleValidateCaptcha} placeholder="Type the captcha"
                                 className="input input-bordered" required />

                            </div> 

                            <div className="form-control mt-6">
                                <button disabled={disabled}  className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <Link to={"/register"}><p className='text-sm'>Don't Have an account ? Register</p></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;