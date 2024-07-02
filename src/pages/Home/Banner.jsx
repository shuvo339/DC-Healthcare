import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import pic from '../../assets/pic.png'

const Banner = () => {
    return (
        <div  style={{backgroundImage: `url("https://i.ibb.co/GtVjD4X/banner-bg.png")`}} className='bg-center w-full bg-cover bg-no-repeat p-4 min-h-[650px] flex flex-col md:flex-row justify-center items-center gap-6 md:gap-20'>
            <div className="text-white max-w-[700px] space-y-4 p-3 md:pl-12 mt-20 md:mt-1">
                <h2 className="text-4xl md:text-5xl font-bold">I'm Md. Shafiullah Shuvo</h2>
                <h3 className="text-2xl md;text-3xl font-bold">Frontend Web Developer</h3>
                <p className="max-w-[590px] text-lg md:text-xl">Dedicated Frontend Developer skilled in React.js, JavaScript, Tailwind CSS, and more. Passionate about crafting user-friendly web interfaces and currently expanding my backend knowledge.</p>
               
                <div className="flex gap-12 pt-3 md:pt-8">
              <a className="cursor-pointer"  href="https://www.linkedin.com/in/md-shafiullah-shuvo" target="_blank">
                <FaLinkedin className="text-5xl text-[#0a66c2]" />
              </a>
              <a className="cursor-pointer"  href="https://github.com/shuvo339" target="_blank">
                <FaGithub className="text-5xl text-[#1DA1F2]" />
              </a>
              <a className="cursor-pointer" href="https://www.facebook.com/safiullahshuvo" target="_blank">
                <FaFacebook className="text-5xl text-[#1877F2]" />
              </a>
            </div>
            </div>
            <div className="">
                <img className="rounded-full" src={pic} alt="" />
            </div>
        </div>
    );
};

export default Banner;