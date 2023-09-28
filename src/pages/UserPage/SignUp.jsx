import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sign.css";
import { Divider } from "@mui/material";

const SignUp = () => {
  const [registerData, setRegisterdata] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  // console.log(registerData);

  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name,value);

    setRegisterdata((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./assets/blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Create account</h1>
            <div className="form_data">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                name="fname"
                onChange={adddata}
                value={registerData.fname}
                id="name"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                onChange={adddata}
                value={registerData.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile number</label>
              <input
                type="number"
                name="mobile"
                onChange={adddata}
                value={registerData.mobile}
                id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={registerData.password}
                id="password"
                placeholder="At least 6 characters"
              />
            </div>
            <div className="form_data">
              <label htmlFor="passwordg">Password again</label>
              <input
                type="password"
                name="cpassword"
                onChange={adddata}
                value={registerData.cpassword}
                id="passwordg"
              />
            </div>
            <button type="submit" className="signin_btn">
              Continue
            </button>

            <Divider />

            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;

// import { Divider } from '@mui/material';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

//     const senddata = async (e) => {
//         e.preventDefault();

//         const { fname, email, mobile, password, cpassword } = registerData;
//         try {
//             const res = await fetch("/register", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({
//                     fname, email, mobile, password, cpassword
//                 })
//             });

//             const data = await res.json();
//             // console.log(data);

//             if (res.status === 422 || !data) {
//                 toast.error("Invalid Details 👎!", {
//                     position: "top-center"
//                 });
//             } else {
//                 setRegisterdata({
//                     ...registerData, fname: "", email: "",
//                     mobile: "", password: "", cpassword: ""
//                 });
//                 toast.success("Registration Successfully done 😃!", {
//                     position: "top-center"
//                 });
//             }
//         } catch (error) {
//             console.log("front end ka catch error hai" + error.message);
//         }
//     }
