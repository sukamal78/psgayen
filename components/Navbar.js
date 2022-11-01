import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {FaFacebookF } from "react-icons/fa";

export default function Navbar() {
  const [mobilenav,setMobileNav] =useState(false)
  return (
    <>
      <div className="">
        <div className="max-w-full  bg-black text-white px-5  hover:text-yellow md:flex justify-between">
          <div className="flex items-center py-3">Parthasarathi Gayen</div>
          <div className="flex items-center py-3 font-2xl font-bold">
            <div className="px-2">
              <Link href="/">
                <a>Home</a>
              </Link>
            </div>
            <div className="px-2">
              <Link href="/books">
                <a>Books</a>
              </Link>
            </div>
            <div className="px-2">
              <Link href="/awards">
                <a>Awards</a>
              </Link>
            </div>
            <div className="px-2">
              <Link href="/about">
                <a>About</a>
              </Link>
            </div>
            <div className="px-2">
              <Link href="/galary">
                <a>Galary</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center py-3 bg-blue-600 px-10 rounded-xl mx-[30px]">
          <Link href="https://www.facebook.com/parthasarathi.gayen.1">
                <a><FaFacebookF/></a>
              </Link>
          </div>
        </div>
      </div>


      
    </>
  );
}
