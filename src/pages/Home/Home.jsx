import Banner from "./Banner";
import Faqs from "./Faqs";
import Highlights from "./Highlights";
import Mission from "./Mission";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Highlights></Highlights>
            <Mission></Mission>
            <Services></Services>
            <Testimonial></Testimonial>
            <Faqs></Faqs>
        </div>
    );
};

export default Home;