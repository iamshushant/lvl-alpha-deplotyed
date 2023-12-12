import React from "react";
import { toast } from "react-toastify";

const Header = () => {
  return (
    <>
      <nav className=" bg-slate-800 p-5">
        <div className=" text-white mr-6 text-center">
          <span className="font-semibold text-xl tracking-tight">
            Health Data
          </span>
        </div>
      </nav>
    </>
  );
};

export default Header;
