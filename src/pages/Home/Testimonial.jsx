import Subheading from "../../assets/components/Subheading/Subheading";
import sarah from '../../assets/images/sarah.png'
import david from '../../assets/images/david.png'
import micheal from '../../assets/images/micheal.png'
import star from '../../assets/images/fi-sr-star.png'

const Testimonial = () => {
  return (
    <div className="mt-[60px] md:mt-[120px]">
      <Subheading text="Testimonial"></Subheading>
      <h1 className="text-4xl font-semibold text-[#020043] pb-8">
        What they say about us
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-12">
            <div>
                <h2 className="text-xl font-semibold">Expertise and Compassion <br />Combined</h2>
                <p className="text-sm py-3">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                <div className="flex gap-4">
                    <img src={sarah} alt="" />
                    <div>
                        <h1 className="text-sm"><span className="font-bold">Sarah D, </span>IT Professional</h1>
                        <div className="flex gap-1 pt-1">
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold">Life-Saving Care, Life-Changing <br />Experience</h2>
                <p className="text-sm py-3">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                <div className="flex gap-4">
                    <img src={micheal} alt="" />
                    <div>
                        <h1 className="text-sm"><span className="font-bold">Michael R, </span>Business Executive</h1>
                        <div className="flex gap-1 pt-1">
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl font-semibold">A Partner in Health and <br />Wellness</h2>
                <p className="text-sm py-3">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become my trusted partner in health and</p>
                <div className="flex gap-4">
                    <img src={david} alt="" />
                    <div>
                        <h1 className="text-sm"><span className="font-bold">David S, </span>Lawyer</h1>
                        <div className="flex gap-1 pt-1">
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                            <img className="size-4" src={star} alt="" />
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default Testimonial;
