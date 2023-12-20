import { useContext } from "react";
import { AuthContext } from "../AuthProvide/AuthProvider";
import {motion} from "framer-motion";
import Swal from "sweetalert2";

const Profile = () => {
    const  {user, logOut} = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
        .then( () => {
            Swal.fire(
                'Logged Out!',
                'You are logged out successfully!',
                'success'
              )
        })
        .catch( error => {
            console.error(error);
        })
    }
    return (
        <div className="">

        <motion.div className="" style={{backgroundImage: 'url()'}} initial={{ x : 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <h2 className="text-4xl text-center font-bold text-white">About You:</h2>
        
            <div className="flex justify-center items-center h-screen">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <img src={user.photoURL} alt="" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title">{user.displayName}</h2>
                    <p>{user.email}</p>
                    <div className="card-actions">
                        <button className="btn glass" onClick={handleLogOut}>LogOut</button>
                    </div>
                    </div>
                </div>
            </div>

        </motion.div>    
        </div>
    );
};

export default Profile;