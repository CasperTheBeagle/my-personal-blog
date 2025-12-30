import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white border-b border-brown-300">
      {/* Logo */}
      <div className="text-2xl font-bold text-brown-600 tracking-tighter">
        hh.
      </div>

      {/* Buttons: ใช้สี brown-600 ตาม Design */}
      <div className="flex gap-3">
        <button className="px-5 py-2 text-sm font-medium text-brown-600 bg-white border border-brown-300 rounded-full hover:bg-brown-100 transition cursor-pointer">
          Log in
        </button>
        <button className="px-5 py-2 text-sm font-medium text-white bg-brown-600 rounded-full hover:bg-brown-500 transition cursor-pointer">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;