/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { saveTokenInLocalStr } = useAuth();

  const navigate = useNavigate();

  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(user);
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("after login: ", responseData);
        toast.success("Registration Successful");
        saveTokenInLocalStr(responseData.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
    setIsOpen(false);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  

  return (
    <>
      <button
        onClick={handleOpenModal}
        className=" text-[15px] hover:text-[blue] hover:drop-shadow-[0_20px_20px_rgba(0,0,255)] hover:underline"
      >
        Login
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 overflow-y-auto h-full w-full flex justify-center items-start md:items-center pt-10 md:pt-0">
          <div className="bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-center p-5 rounded-t  dark:border-gray-600">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                Login
              </h3>
              <button
                type="button"
                onClick={handleCloseModal}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="px-6 pb-4 space-y-6 lg:px-8 sm:pb-6 xl:pb-8"
            >

              <div className=" text-start">
                <label className="text-sm text-black mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="text"
                    required
                    value={user.email}
                    onChange={handleInput}
                    className="w-full text-black  text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333]"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>


              <div className="relative items-center text-start">
                <label className="text-sm text-black mb-2 block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    value={user.password}
                    onChange={handleInput}
                    className="w-full text-black text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#333] placeholder-gray-500"
                    placeholder="Enter password"
                  />
                  <svg
                    onClick={togglePasswordVisibility}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                    viewBox="0 0 128 128"
                  >
                    {showPassword ? (
                      <path d="M64 24C32.4 24 12.85 51.9 1.75 64c11.1 12.1 30.65 40 62.25 40s51.15-27.9 62.25-40C115.15 51.9 95.6 24 64 24zm0 72c-22 0-40-18-40-40s18-40 40-40 40 18 40 40-18 40-40 40zm0-64c-13.25 0-24 10.75-24 24s10.75 24 24 24 24-10.75 24-24-10.75-24-24-24z" />
                    ) : (
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" />
                    )}
                  </svg>
                </div>
              </div>
              <div className="flex items-center justify-between gap-10">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-3 text-black block text-sm"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="jajvascript:void(0);"
                    className="text-blue-600 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-orange-500 hover:bg-orange-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Sign In
              </button>
              <p className="text-sm text-black !mt-10 text-center">
                New To Buyzy?{" "}
                <Signup onChange={handleCloseModal}/>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
