import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo dark.png'
import { MdOutlineArrowOutward } from "react-icons/md";
const Navbar = () => {
  const navItems = (
    <>
      <li className='text-[#020043]'><Link to='/'>Home</Link></li>
      <li className='text-[#020043]'><Link to='/services'>Services</Link></li>
      <li className='text-[#020043]'><Link to='/blog'>Blog</Link></li>
      <li className='text-[#020043]'><Link to='/about'>About Us</Link></li>
    </>
  );
  return (
    <div className="navbar mt-4 mb-6">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {
              navItems
            }
          </ul>
        </div>
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {
          navItems
         }
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline text-[#343268] w-[174px] rounded-xl h-12">Appoinment <MdOutlineArrowOutward /></a>
      </div>
    </div>
  );
};

export default Navbar;
