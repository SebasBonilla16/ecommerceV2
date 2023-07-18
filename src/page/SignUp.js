import React, { useState } from "react";
import loginSignUpImage from "../imgs/signup animation.gif";
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { ImagetoBase64 } from "../utility/ImagetoBase64.js";
import { toast } from "react-hot-toast";

const Signup = () => {
    const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmpassword: "",
    image : "",
  });
  console.log(data);
  
  const handleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleShowConfirmPassword = () => {
    setConfirmPassword((preveState) => !preveState);
  };

  const handleOnChange = (e) => {
    const {name,value} = e.target
    setData((preve) => {
        return{
            ...preve,
            [name] : value
        }
    })
  }
// COME BACK TO THIS, STILL GETTING ERROR CODE WHEN UPLOADING IMG FOR PROFILE
  const handleUploadProfileImage = async(e) => {
    const data = await ImagetoBase64(e.target.files[0]);
    console.log(data);
  
    setData((preve) => {
      return {
        ...preve,
        image: data
      };
    });
  };
  
  console.log(process.env.REACT_APP_SERVER_DOMAIN)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmpassword } = data;
    if (firstName && email && password && confirmpassword) {
      if (password === confirmpassword) {
        const response = await fetch(`${process.env.REACT_APP_SERVER_DOMAIN}/Signup`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
  
        const dataRes = await response.json();
        console.log(dataRes);
  
        // alert(dataRes.message);
        toast(dataRes.message)
        if(dataRes.alert){
          navigate("/Login");
        }
      } else {
        alert("Failed to sign up");
      }
    } else {
      alert("Passwords do not match");
    }
  };
  
  
  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-slate-#fafafa m-auto flex flex-col p-4">
        {/* <h1 className='text-center text-2xl font-bold'>Sign Up</h1> */}
        <div className="w-180 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative">
         
          {/* COME BACK TO THIS, GETTING ERROR CODE WHEN UPLOADING IMG TO PROFILE, NEED TO FIX WHEN HAVE TIME!!! */}
          <img src={data.image ? data.image : loginSignUpImage} className="w-full h-full"/>
        
        <label htmlFor="profileImage">
          <div className="absolute bottom-0 h-1/4 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
            <p className="text-sm p-1 text-neutral-50">Upload</p>
          </div>
          <input type={"file"} id="profileImage" accept="image/*" className="hidden" onChange={handleUploadProfileImage}/>
          </label>
        </div>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 mb-2 w-full bg-slate-300 px-2 px-y-1 rounded focus-within:outline-blue-300"
            value={data.firstName}
            onChange={handleOnChange}
          />

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 mb-2 w-full bg-slate-300 px-2 px-y-1 rounded focus-within:outline-blue-300"
            value={data.lastName}
            onChange={handleOnChange}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-300 px-2 px-y-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 px-y-1 bg-slate-300 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-300 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <label htmlFor="confirmpassword">Confirm Password</label>
          <div className="flex px-2 px-y-1 bg-slate-300 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmpassword"
              name="confirmpassword"
              className="w-full bg-slate-300 border-none outline-none"
              value={data.confirmpassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[120px] m-auto w-full bg-sky-500 hover:bg-sky-600 cursor-pointer text-neutral-50 text-xl font-medium text-center py-1 rounder-full mt-4">
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Already have an account?{" "}
          <Link to={"/Login"} className="text-sky-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
