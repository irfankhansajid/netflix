import React from 'react'
import { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true)


  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  }

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42a0bce6-fc59-4c1c-b335-7196a59ae9ab/web_tall_panel/BD-en-20250303-TRIFECTA-perspective_33c7caa0-fb25-4c78-8074-d7d3deeae6cb_large.jpg"
          alt="Background login page"
        />
      </div>

      {/* Here to start making Login Form */}

      <form
        action=""
        className="absolute bg-black w-[30%] opacity-85
       my-24 p-12 mx-auto right-0 left-0 text-white"
      >
        <h1 className="text-3xl font-bold py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-[#333333]"
        />)
        }

        <input
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-[#333333]"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4  w-full bg-[#333333]"
        />
        <button className="p-4 my-6 w-full rounded-lg bg-red-700">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a member? Sign In Now"}
        </p>
      </form>
    </div>
  );
}

export default Login
