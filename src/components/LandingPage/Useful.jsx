import { Fade } from "react-awesome-reveal";

const Useful = () => {
    return (
        <div className="py-10">
            <hr className="divider" />
            <div className="text-center font-bold text-5xl bg-slate-300 mx-auto max-w-7xl" >
                
                <Fade cascade>
                    <div className="flex flex-col lg:flex-row items-center justify-center ">
                        <img src="https://media.istockphoto.com/id/1166516811/photo/silhouettes-of-happy-businessperson-success-of-business-concept.webp?b=1&s=170667a&w=0&k=20&c=_PFd-LPxhzgj4kjUt6jKThToyxU-m4mGBzOnjNLxyhk=" alt="" />
                        <p>Can be rely on to plan & ensure project deadlines are met.</p>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row  items-center justify-center ">
                        <p>Count on task management tools to flawlessly coordinate every event detail</p>
                        <img src="https://media.istockphoto.com/id/1204743098/photo/partnership-of-business-concept-group-of-businessperson-customer-support-teamwork.webp?b=1&s=170667a&w=0&k=20&c=_A273icsZtofWIdopwp9dyw55p0XQpqdiufCTXxi8GY=" alt="" /> 
                    </div>
                    <div className="flex flex-col lg:flex-row  items-center justify-center ">
                        <img src="https://media.istockphoto.com/id/1174511028/photo/stack-of-hands-unity-and-teamwork-concept.webp?b=1&s=170667a&w=0&k=20&c=iAcz6X92cheyPQJOw0cieUvKofnzPpAbnzHDGTWAqS4=" alt="" />
                        <p>To streamline recruitment ensuring efficient operations within the organization.  <br /></p>
                    </div>
                </Fade>    
            </div>
            <hr className="divider" />
            
        </div>
    );
};

export default Useful;