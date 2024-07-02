import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
const Navbar = () => {
  const navItems = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-6 py-2 text-lg rounded-md font-semibold underline"
              : "px-6 py-2 text-lg rounded-md"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-6 py-2 text-lg rounded-md font-semibold underline"
              : "px-6 py-2 text-lg rounded-md"
          }
          to="/education"
        >
            Education
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-6 py-2 text-lg rounded-md font-semibold underline"
              : "px-6 py-2 text-lg rounded-md"
          }
          to="/about"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "pl-6 py-2 text-lg rounded-md font-semibold underline"
              : "pl-6 py-2 text-lg rounded-md"
          }
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-black bg-opacity-55 text-white absolute w-full">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 z-30 p-2 shadow bg-base-100 rounded-box w-48"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl flex items-center"><img className="h-12 md:pl-0 pl-6" src={logo} alt="" /><span className="pl-4 text-4xl font-bold bg-gradient-to-r from-stone-200 via-slate-200 to-stone-400 inline-block text-transparent bg-clip-text">Shuvo</span></Link>
        </div>
        <div className="navbar-end hidden lg:flex justify-end">
          <ul className="menu menu-horizontal">
            {
                navItems
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
