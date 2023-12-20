
import Footer from "./LandingPage/Footer";
import Navbar from "./LandingPage/Navbar";


const ErrorRoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex items-center justify-center">
                <h2 className="text-3xl">Oppss! Something is wrong!</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorRoute;