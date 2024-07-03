import image1 from "../../assets/images/Group 12.png";
import image2 from "../../assets/images/Icons.png";
import star from "../../assets/images/fi-sr-star.png";
import image3 from "../../assets/images/Group 7.png";
import image4 from "../../assets/images/Group (1).png";
import image5 from "../../assets/images/Group.png";

const Highlights = () => {
  return (
    <div className="grid grid-cols-5 grid-rows-3 h-[320px] gap-1 md:gap-6">
      <div className="col-span-1 row-span-3 bg-white shadow-sm rounded-3xl p-4">
        <h1 className="text-[20px] md:text-[40px] font-semibold text-[#020043]">90%</h1>
        <p className="pb-7 text-sm">
          Patient satisfaction <br />
          rate, reflecting our <br />
          commitment.
        </p>
        <img className="mx-auto" src={image1} alt="" />
      </div>
      <div className="col-span-3 row-span-1">
        <h1 className="text-2xl md:text-5xl text-[#020043] font-semibold text-center">
          Comprehensive Care <br /> for Every Patient
        </h1>
      </div>
      <div className="col-span-1 row-span-3 bg-white shadow-sm rounded-3xl p-4">
        <h1 className="text-[20px] md:text-[40px] font-semibold">50+</h1>
        <p className="pb-10 text-sm">
        Free lession video <br />
        for patient
        </p>
        <img className="mx-auto" src={image5} alt="" />
      </div>
      <div className="col-span-1 row-span-2 bg-white shadow-sm rounded-3xl p-4">
        <h1 className="text-[20px] md:text-[40px] font-semibold text-[#020043]">500+</h1>
        <p className="text-sm">
          Board-certified <br />
          doctors
        </p>
        <div className="flex justify-end md:pt-0 pt-4">
          <img src={image2} alt="" />
        </div>
      </div>
      <div className="col-span-1 row-span-2 bg-white shadow-sm rounded-3xl p-4 mt-6">
        <div className="flex gap-2 items-center">
          <h1 className="text-[20px] md:text-[40px] font-semibold text-[#020043]">4.8</h1>
          <img className="size-4 md:size-7" src={star} alt="" />
        </div>
        <p className="pb-6 text-sm">
        Over 20,000 Patient
        </p>
        <img src={image3} alt="" />
      </div>

      <div className="col-span-1 row-span-2 bg-white shadow-sm rounded-3xl p-4">
        <h1 className="text-[20px] md:text-[40px] font-semibold text-[#020043]">$5000</h1>
        <p className="text-sm">
        Money spend <br />
        for poor patient
        </p>
        <div className="flex justify-end">
          <img src={image4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
