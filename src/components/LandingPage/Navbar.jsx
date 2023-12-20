import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvide/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then( () => {
            Swal.fire(
                'Logged Out Successful!',
                'success'
              )
        })
        .catch( error => {
            console.error(error);
        })

    }
    const NavOptions = <>  
            <li><NavLink to = "/" style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Home</NavLink></li>
            {/* <li><NavLink to = "" style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>Ongoing Task</NavLink></li> */}
            {user && (
                <>
                <li><NavLink to = '/dashboard' style={({ isActive }) => ({ 
                color: isActive ? 'white' : '' })}>DashBoard</NavLink></li></>
            )}

        </>

    return (
        <div className="navbar bg-base-100" >
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {NavOptions}
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">TaskMan</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {NavOptions}
                </ul>
            </div>
            <div className="navbar-end">
            {
                    user ?
                    <>
                       <img className="rounded-full w-6 mr-3" src={user.photoURL} alt="" />
                        <p className=" mr-3 md:block hidden">{user.email}</p>
                        <button 
                            className="btn glass"
                            onClick={handleLogOut}
                        >Log Out</button>
                    </> :
                    <>
                        <Link to="/login"><button className="btn glass"> Login</button></Link>
                    </>   
                    
                }
            </div>
        </div>
    );
};

export default Navbar;