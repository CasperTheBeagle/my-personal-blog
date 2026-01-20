// src/components/NavBar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // ไอคอน
import { Button } from "@/components/ui/button"; // ใช้ปุ่มจาก shadcn
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-green-theme">
          hh.
        </div>

        {/* Desktop Menu (ซ่อนบนมือถือ) */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost" className="text-base rounded-full px-6">
            Log in
          </Button>
          <Button className="bg-black text-white hover:bg-gray-800 rounded-full px-6 text-base">
            Sign up
          </Button>
        </div>

        {/* Mobile Menu Icon (แสดงเฉพาะมือถือ) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown (แสดงเมื่อกด Hamburger) */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full px-6 py-4 shadow-lg">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start text-lg">
                Menu
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuItem>
                <Button variant="ghost" className="w-full justify-start">
                  Log in
                </Button>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Button className="w-full bg-black text-white hover:bg-gray-800">
                  Sign up
                </Button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </nav>
  );
};

export { NavBar };