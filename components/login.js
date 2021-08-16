import React, { useState } from "react";
import { RiAtLine, RiLockLine } from "react-icons/ri";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [alert, setAlert] = useState(false)

  const onSubmitLogin = (e) => {
    e.preventDefault()
    // console.log(mailFormat.test(email.toString().toLocaleLowerCase()))
  }

  return (
    <div className="flex flex-col justify-center text-gray-200 px-6 h-full w-80 mx-auto space-y-8">
      <div className="flex flex-col justify-between mt-4">
        <h2 className="text-lg font-light">Welcome back,</h2>
        <h1 className="font-semibold text-2xl">Let's sign you in.</h1>
      </div>
      <form className="space-y-4" autoComplete="off" onSubmit={(e) => onSubmitLogin(e)}>
        <div className="flex justify-between">
          <input
            autoComplete="new-email"
            type="email"
            className="w-full bg-gray-800 border border-r-0 border-gray-700 rounded-l-xl p-3 text-xs outline-none"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="p-3 bg-gray-800 border border-l-0 border-gray-700 rounded-r-xl">
            <RiAtLine />
          </span>
        </div>
        <div className="flex justify-between">
          <input
            autoComplete="new-password"
            type={!showPass ? "password" : "text"}
            className="w-full bg-gray-800 border border-r-0 border-gray-700 rounded-l-xl p-3 text-xs outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="p-3 bg-gray-800 border border-l-0 border-gray-700 rounded-r-xl">
            <RiLockLine />
          </span>
        </div>
        <div className="flex space-x-2 px-2">
          <input className="outline-none" type="checkbox" checked={showPass} onChange={() => setShowPass(!showPass)} />
          <span className="text-xs font-extralight">Show password</span>
        </div>
        <div className="flex justify-center items-center">
          <button
            className={`w-full mt-6 p-3 bg-gray-200 rounded-xl text-gray-900 text-xs font-semibold`}
            type="submit"
          >
            Sign in
          </button>
        </div>
        <div className="flex justify-center items-center space-x-1">
          <span className="text-xs text-gray-500">Don't have account?</span>
          <span className="text-xs text-gray-200 cursor-pointer">Register</span>
        </div>
      </form>
    </div>
  );
};

export default Login;
