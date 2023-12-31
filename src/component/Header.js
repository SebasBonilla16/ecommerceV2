import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/Happy Feet Co. Mascot.png";
import { FaUserAlt } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux"; // Add the import statement for useDispatch
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData.email);
  const dispatch = useDispatch();

  const handleShowMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout Successfully");
  };

  console.log(process.env.REACT_APP_ADMIN_EMAIL);
  return (
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={""} className="flex items-center">
          <div className="h-16">
            <img src={logo} className="h-full" alt="Logo" />
          </div>
          <span className="ml-2 text-lg font-bold">Happy Feet Co.</span>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""}>Home</Link>
            <Link to={"/shop/64b62e2009c407c446f2ed6b"}>Shop</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/contact"}>Contact</Link>
          </nav>
          <div className="text-2xl relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className="text-2xl" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-10 h-10 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img src={userData.image} className="h-full w-full" />
              ) : (
                <FaUserAlt />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white py-2 shadow drop-shadow-md flex flex-col">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproducts"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    New products
                  </Link>
                )}
                {userData.image ? (
                  <p
                    className="cursor-pointer text-neutral-50 px-2 bg-sky-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
                <nav className="text-base md:text-lg flex flex-col md:hidden">
                  <Link to={""} className="px-2 py-1">
                    Home
                  </Link>
                  <Link to={"/shop/64b62e2009c407c446f2ed6b"} className="px-2 py-1">
                    Shop
                  </Link>
                  <Link to={"/about"} className="px-2 py-1">
                    About
                  </Link>
                  <Link to={"/contact"} className="px-2 py-1">
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
