import CommonButton from "../../assets/components/CommonButton/CommonButton";
import Subheading from "../../assets/components/Subheading/Subheading";
import image from '../../assets/images/Rectangle 24.png'

const Mission = () => {
  return (
    <div className="mt-[60px] md:mt-[120px] flex flex-col md:flex-row gap-3 md:gap-10">
      <div className="w-full md:w-1/2">
        <Subheading text="Who we are"></Subheading>
        <h1 className="text-4xl font-semibold text-[#020043]">We Help To Get <br /> Soultions</h1>
        <p className="max-w-[450px] py-5 text-[#4D4C7B]">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.
        </p>
       <CommonButton buttonText="Learn more"></CommonButton>
      </div>
      <div className="w-full md:w-1/2 relative">
        <img src={image} alt="" />
        <div className="w-[300px] md:w-[395px] h-[150px] md:h-[210px] p-4 md:p-10 bg-[#343268] rounded-[32px] text-white absolute bottom-0 left-0 md:-bottom-10 md:-left-24">
            <h1 className="text-2xl pb-3">Our mission is simple</h1>
            <p className="opacity-80">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
        </div>
      </div>
    </div>
  );
};

export default Mission;
