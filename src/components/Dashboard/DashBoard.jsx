import { NavLink, Outlet } from "react-router-dom";
import Footer from "../LandingPage/Footer";


const DashBoard = () => {
    return (
        <div>
            <div className="lg:flex">
            <div className="lg:w-96  bg-green-800">
                <ul className="menu [&_li>*]:rounded-none ">
                    <li><NavLink to='/'  activeClassName="active-link" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }} >Home</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/profile"  activeClassName="active-link" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        Profile</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/dashboard/create"  activeClassName="active-link" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        Create a Task</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/dashboard/todo"  activeClassName="active-link" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                        Task Lists</NavLink>
                    </li>    
                </ul>
            </div>
            <div className="lg:flex-1">
                <Outlet></Outlet>
               
            </div>
        
        </div>
        <div className="bg-amber-800 h-1 w-full"></div>
        
        <Footer></Footer>
        </div>
    );
};

export default DashBoard;