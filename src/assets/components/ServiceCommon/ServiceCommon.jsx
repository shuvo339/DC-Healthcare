import { MdOutlineArrowOutward } from "react-icons/md";
const ServiceCommon = ({img, title, para}) => {
    return (
        <div className="relative w-full">
        <img className="rounded-[30px] w-full" src={img} alt="" />
        <div className="w-[320px] h-[144px] p-4 bg-[#020043] bg-opacity-55 rounded-[20px] text-white absolute bottom-5 left-5">
          <h1 className="text-2xl pb-2">{title}</h1>
          <div className="flex items-end">
          <p className="opacity-80 text-[14px] pr-4">
            {para}
          </p>
          <div className="size-10 p-3 rounded-full bg-[#FFC637]">
          <MdOutlineArrowOutward />
          </div>
          </div>
        </div>
      </div>
    );
};

export default ServiceCommon;