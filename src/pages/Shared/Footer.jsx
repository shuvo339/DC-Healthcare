import logo from "../../assets/images/logo light.png";
import fb from "../../assets/images/fb.png";
import insta from "../../assets/images/insta.png";
import linkdin from "../../assets/images/linkedin.png";
import youtube from "../../assets/images/youtube.png";

const Footer = () => {
  return (
    <footer className="mt-[60px] md:mt-[120px] py-6 bg-[#020043] flex flex-col md:flex-row md:justify-around justify-center items-center  gap-6 px-4 text-white min-h-[400px]">
      <div className="flex justify-start items-center">
        <aside className="flex items-center md:items-start justify-center flex-col">
          <img className="" src={logo} alt="" />

          <p className="text-center md:text-left text-[#507E97] py-6 text-sm">
            123 Main Street Anytown, USA <br />Postal Code: 12345 Support:
          </p>
          <p className="text-center md:text-left text-[#507E97] text-sm">
             support@oyolloo.com <br />(Available : 10:00am to 07:00pm)
          </p>
          
        </aside>
      </div>
      <nav className="flex flex-col justify-start items-center md:items-start opacity-75 gap-2 text-sm">
        <a className="link link-hover">Home</a>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Success Page</a>
        <a className="link link-hover">Terms and Conditions</a>
      </nav>

      <nav className="flex flex-col justify-start items-center md:items-start opacity-75 gap-2 text-sm">
        <a className="link link-hover">Services</a>
        <a className="link link-hover">Scheduling</a>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Patient Portal</a>
      </nav>
     
      <nav className="flex flex-col items-center md:items-start gap-2">
        <h2 className="opacity-75">Follow Us</h2>
        <div className="grid grid-flow-col gap-5 items-center justify-center mt-1">
          <a className="cursor-pointer">
          <img className="" src={fb} alt="" />
          </a>
          <a className="cursor-pointer">
          <img className="" src={insta} alt="" />
          </a>
          <a className="cursor-pointer">
          <img className="" src={linkdin} alt="" />
          </a>
          <a className="cursor-pointer">
          <img className="" src={youtube} alt="" />
          </a>
        </div>
        <p className="opacity-80 pt-6">@docplus 2024</p>
      </nav>
    </footer>
  );
};

export default Footer;
