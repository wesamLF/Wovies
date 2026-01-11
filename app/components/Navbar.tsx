"use client";


import Link from 'next/link'
import MyFav from './MyFav';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow section-px z-50" >
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              </Link>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52 "
          >
            <li><Link href="/movies/new">Newly Released</Link></li>
            <li><Link href="/movies/popular">Popular</Link></li>
            <li><Link href="/actors/popular">Actors</Link></li>


          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl">MySite</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><Link href="/movies/new">Newly Released</Link></li>
          <li><Link href="/movies/popular">Popular</Link></li>
          <li><Link href="/actors/popular">Actors</Link></li>


        </ul>
      </div>

      <div className="navbar-end">
        <MyFav />

      </div>
    </div>
  )
}

export default Navbar