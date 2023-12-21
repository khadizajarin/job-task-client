import { Fade } from "react-awesome-reveal";

const Useful = () => {
    return (
        <div className="py-10 bg-amber-800  text-gray-900">
            
            <div className="text-center font-bold text-5xl mx-auto max-w-7xl" >
                
                <Fade cascade>
                    <div className="flex flex-col lg:flex-row items-center justify-center ">
                        <img className="w-96 h-80" src="https://plus.unsplash.com/premium_photo-1661777954541-acb17c07eeb1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <p>Can be rely on to plan & ensure project deadlines are met.</p>
                    </div>
                    <div className="flex flex-col-reverse lg:flex-row  items-center justify-center ">
                        <p>Count on task management tools to flawlessly coordinate every event detail</p>
                        <img className="w-96 h-80" src="https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
                    </div>
                    <div className="flex flex-col lg:flex-row  items-center justify-center ">
                        <img className="w-96 h-80" src="https://media.istockphoto.com/id/1445439274/photo/human-icon-print-screen-on-wooden-cube-block-with-space-for-human-resource-management-and.webp?s=2048x2048&w=is&k=20&c=wrzbcE6sWjFfgn2hFOcsmthBlTbBUPYMdmTCAK7ldrA=" alt="" />
                        <p>To streamline recruitment ensuring efficient operations within the organization.  <br /></p>
                    </div>
                </Fade>    
            </div>
            
            
        </div>
    );
};

export default Useful;