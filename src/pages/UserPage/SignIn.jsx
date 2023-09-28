import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sign.css";

const SignIn = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  // console.log(data);

  const adddata = (e) => {
    const { name, value } = e.target;
    // console.log(name, value);

    setLoginData((pre) => {
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
            <h1>Sign-In</h1>

            <div className="form_data">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={adddata}
                value={loginData.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={adddata}
                value={loginData.password}
                id="password"
                placeholder="At least 6 characters"
              />
            </div>
            <button type="submit" className="signin_btn">
              Continue
            </button>
          </form>
        </div>
        <div className="create_accountinfo">
          <p>New to Amazon?</p>
          <button>
            <NavLink to="/register">Create your Amazon Account</NavLink>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;

/**  
 


const senddata = async (e) => {
        e.preventDefault();

        const { email, password } = loginData;
        // console.log(email);
        try {
            const res = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email, password
                })
            });


            const data = await res.json();
            // console.log(data);

            if (res.status === 400 || !data) {
                console.log("invalid details");
                toast.error("Invalid Details 👎!", {
                    position: "top-center"
                });
            } else {
                setAccount(data);
                setLoginData({ ...loginData, email: "", password: "" })
                toast.success("Login Successfully done 😃!", {
                    position: "top-center"
                });
            }
        } catch (error) {
            console.log("login page ka error" + error.message);
        }
    };



 */

