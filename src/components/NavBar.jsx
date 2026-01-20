// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuth } from '../context/AuthContext';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-green-theme">
          <Link to="/">hh.</Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            // Logged in user menu
            <>
              <Link to="/dashboard">
                <Button variant="ghost" className="text-base rounded-full px-6">
                  Dashboard
                </Button>
              </Link>
              <Link to="/profile">
                <Button variant="ghost" className="text-base rounded-full px-6">
                  Profile
                </Button>
              </Link>
              {user.role === 'admin' && (
                <Link to="/admin/dashboard">
                  <Button variant="ghost" className="text-base rounded-full px-6 bg-purple-100 text-purple-700 hover:bg-purple-200">
                    Admin
                  </Button>
                </Link>
              )}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-base rounded-full px-6">
                    <div className="flex items-center gap-2">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{user.name}</span>
                    </div>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings" className="w-full">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                  {user.role === 'admin' && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link to="/admin/dashboard" className="w-full">Admin Panel</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/admin/articles" className="w-full">Articles</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/admin/users" className="w-full">Users</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            // Logged out user menu
            <>
              <Link to="/about">
                <Button variant="ghost" className="text-base rounded-full px-6">
                  About
                </Button>
              </Link>
              <Link to="/login">
                <Button variant="ghost" className="text-base rounded-full px-6">
                  Log in
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 text-base">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full px-6 py-4 shadow-lg">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start text-lg">
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              {user ? (
                // Logged in mobile menu
                <>
                  <DropdownMenuItem>
                    <Link to="/dashboard" className="w-full">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/settings" className="w-full">Settings</Link>
                  </DropdownMenuItem>
                  {user.role === 'admin' && (
                    <>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Link to="/admin/dashboard" className="w-full">Admin Panel</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/admin/articles" className="w-full">Articles</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link to="/admin/users" className="w-full">Users</Link>
                      </DropdownMenuItem>
                    </>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                    Sign Out
                  </DropdownMenuItem>
                </>
              ) : (
                // Logged out mobile menu
                <>
                  <DropdownMenuItem>
                    <Link to="/" className="w-full">Home</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/about" className="w-full">About</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/login" className="w-full">Log in</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link to="/signup" className="w-full">Sign up</Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
};

export { NavBar };