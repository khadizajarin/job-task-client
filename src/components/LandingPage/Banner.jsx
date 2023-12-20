import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero lg:p-40 bg-base-200 glass" >
            <div className="hero-content flex-col lg:flex-row">
                <img src="https://media.istockphoto.com/id/1341538285/photo/being-organased-saves-tame.webp?s=2048x2048&w=is&k=20&c=vJmXQ2nrWdd5SU9hTjQ5p0yD-qUu27Z0LP6Z1NfXTO8=" className="lg:max-w-sm rounded-lg shadow-2xl" />
                <div>
                <h1 className="text-5xl font-bold ">Manage Your Task Wisely!</h1>
                <p className="py-6 ">Effortlessly Organize Your Tasks! Introducing TaskMan, Your Ultimate Task Management Solution. Seamlessly plan, prioritize, and track your to-dos with our intuitive interface. Collaborate effortlessly, set deadlines, and stay on top of your goals. Boost productivity and efficiency. Join Now for a streamlined task management experience!</p>
                <Link to="/login"><button className="btn glass">Explore!</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;