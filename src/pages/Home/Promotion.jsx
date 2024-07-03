import CommonButton from "../../assets/components/CommonButton/CommonButton";
import { MdOutlineArrowOutward } from "react-icons/md";
import logo from '../../assets/images/logo dark.png'

const Promotion = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.ibb.co/pLwm1XC/Rectangle-32.png")`,
      }}
      className="min-h-[475px] rounded-[32px] mt-[60px] md:mt-[120px] bg-center bg-cover bg-no-repeat"
    >
      <div className="relative bg-gradient-to-r from-[#0c0b31] to-[#6f6c97] min-h-[475px] pl-12 opacity-80 rounded-[32px] flex items-center">
        <div>
          <h2 className="text-white text-[40px] font-semibold pb-6">Get Your <br /> First Appointment <br />at 50% Off!</h2>
           <div className="flex gap-6">
           <CommonButton buttonText="Appoinment"></CommonButton>
           <button className="btn btn-outline text-white border-white  rounded-xl">Learn more <MdOutlineArrowOutward /></button>
           </div>
        </div>
        <img className="absolute top-16 right-12" src={logo} alt="" />
      </div>
    </div>
  );
};

export default Promotion;
