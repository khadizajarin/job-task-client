import { NavLink, Outlet } from "react-router-dom";


const DashBoard = () => {
    return (
        <div className="lg:flex">
            <div className="lg:w-96 lg:h-full bg-gray-300">
                <ul className="menu">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li>
                        <NavLink to="/dashboard/profile">
                        Profile</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/dashboard/create">
                        Create a Task</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/dashboard/todo">
                        To-Do Task</NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/going">
                        On-going Task</NavLink>
                    </li> 
                    <li>
                        <NavLink to="/dashboard/completed">
                        Completed Task</NavLink>
                    </li> 
                    
                </ul>
            </div>
            <div className="lg:flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;