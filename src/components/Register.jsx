import Footer from "./LandingPage/Footer";
import Navbar from "./LandingPage/Navbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvide/AuthProvider";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'


const Register = () => {
    const { createUser, locationState } = useContext(AuthContext); 
    console.log("location in register page ", locationState );
    const navigate = useNavigate();


    const handleRegister = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        const passRegex =  /^(?=.*[A-Z])(?=.*[\W_]).{6,}$/;

        if (!passRegex.test(password)) {
            return (
                Swal.fire({
                    title: 'Error!',
                    text: 'Password must be at least 6 characters long, contain a capital letter and a special character.',
                    icon: 'error',
                    confirmButtonText: 'OK Buddy Cool! Let me Fix it!'
                  })
            )
        }

        createUser(email,password)
        .then(result => {
            console.log(result.user)
            navigate(locationState? locationState : '/')
            Swal.fire(
                'Good job!',
                'Allah tumi sign up kore felso!',
                'success'
              )
        })
        .catch(error => {
            console.error(error); 
        
        })
    }

    return (
        <div>
            <Navbar></Navbar>
            <div className="hero bg-base-200">
                <div className="hero-content  py-16 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register to Explore!</h1>
                        <p className="py-6">Sign up now and unlock the power of streamlined task management with our user-friendly registration process.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn glass">Register</button>
                            <p className="py-6">Already have a account? Proceed to <Link className="text-gray-900 font-bold" to='/login' >Login</Link></p>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>  
    );
};

export default Register;