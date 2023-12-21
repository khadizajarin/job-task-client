import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div className="hero lg:p-40 bg-yellow-300 text-gray-800 glass" >
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://images.unsplash.com/photo-1668714742426-c47d8a0e6ae4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="lg:max-w-sm shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold ">
                <Typewriter
                        options={{ loop: true, autoStart: true }}
                        onInit={(typewriter) => {
                            typewriter.typeString('Manage Your Task Wisely!')
                            .pauseFor(5000)
                            .callFunction(() => {
                                console.log('String typed out!');
                            })
                            .start();
                        }}
                        />
                </h1>
                <p className="py-6 ">Effortlessly Organize Your Tasks! Introducing TaskMan, Your Ultimate Task Management Solution. Seamlessly plan, prioritize, and track your to-dos with our intuitive interface. Collaborate effortlessly, set deadlines, and stay on top of your goals. Boost productivity and efficiency. Join Now for a streamlined task management experience!</p>
                <Link to="/login"><button className="btn glass">Explore!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;