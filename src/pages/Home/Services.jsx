import CommonButton from "../../assets/components/CommonButton/CommonButton";
import ServiceCommon from "../../assets/components/ServiceCommon/ServiceCommon";
import Subheading from "../../assets/components/Subheading/Subheading";
import image1 from "../../assets/images/Rectangle 27-2.png";
import image2 from "../../assets/images/Rectangle 27-1.png";
import image3 from "../../assets/images/Rectangle 27.png";

const Services = () => {
  return (
    <div className="mt-[60px] md:mt-[120px] grid grid-col-1 md:grid-cols-2 gap-6">
      <div className="w-full">
        <Subheading text="Service"></Subheading>
        <h1 className="text-4xl font-semibold text-[#020043]">
          Empowering Health, <br />
          Enriching Lives
        </h1>
        <p className="max-w-[380px] py-8 text-[#4D4C7B]">
          We are committed to providing high-quality, compassionate care to
          every patient we serve. Whatever your healthcare needs may be, you can
          trust us to be your partner in health and wellness.
        </p>
        <CommonButton buttonText="Appoinment"></CommonButton>
      </div>

      <ServiceCommon img={image1} title="Advanced Technology" para="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"></ServiceCommon>
      <ServiceCommon img={image2} title="Online Doctor Meet" para="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision"></ServiceCommon>
      <ServiceCommon img={image3} title="Consultancy your health" para="Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision "></ServiceCommon>

    </div>
  );
};

export default Services;
