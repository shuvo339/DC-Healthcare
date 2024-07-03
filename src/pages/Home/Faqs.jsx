import Subheading from "../../assets/components/Subheading/Subheading";

const Faqs = () => {
  return (
    <div className="mt-[60px] md:mt-[120px]">
      <Subheading text="Faq"></Subheading>
      <h1 className="text-4xl font-semibold text-[#020043] pb-8">
        Frequntly Asked Question
      </h1>

      <div className="space-y-3">
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium border-b">
          What are your office hours?
          </div>
          <div className="collapse-content">
            <p className="pt-3">Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium border-b">
          How can I schedule an appointment?
          </div>
          <div className="collapse-content">
            <p className="pt-3">You can schedule an appointment online through our website, by calling our office directly, or by visiting any of our clinic locations in person. Please have your insurance information and relevant medical history ready when scheduling.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium border-b">
          Do you accept insurance?
          </div>
          <div className="collapse-content">
            <p className="pt-3">Yes, we accept most major insurance plans. Please contact our office or check our website for a full list of accepted providers. If you have any questions about your specific insurance coverage, our staff will be happy to assist you.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium border-b">
          What should I bring to my appointment?
          </div>
          <div className="collapse-content">
            <p className="pt-3">Please bring your insurance card, a valid photo ID, a list of any medications you are currently taking, and any relevant medical records. If applicable, also bring referral forms or authorization from your primary care physician.</p>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-white">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium border-b">
          Do you offer telemedicine appointments?
          </div>
          <div className="collapse-content">
            <p className="pt-3">Yes, we offer telemedicine appointments for many of our services. You can schedule a virtual visit through our website or by calling our office. Telemedicine allows you to consult with our healthcare providers from the comfort of your home.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
