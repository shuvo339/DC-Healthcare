import { MdOutlineArrowOutward } from "react-icons/md";

const CommonButton = ({buttonText}) => {
    return (
        <div>
             <button className="btn bg-[#FFC637] text-[#343268] rounded-xl">{buttonText}<MdOutlineArrowOutward /></button>
        </div>
    );
};

export default CommonButton;