import Banner from "./LandingPage/Banner";
import Footer from "./LandingPage/Footer";
import Navbar from "./LandingPage/Navbar";
import Useful from "./LandingPage/Useful";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Useful></Useful>
            <Footer></Footer>
        </div>
    );
};

export default Home;