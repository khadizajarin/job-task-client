import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const OnGoing = () => {

    const [goings, setGoings] = useState([]);
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/ongoing')
    .then((res) => {
        setGoings(res.data);
        console.log();
      })
      .catch((error) => {
        console.error(error);
      });
    } ,[axiosSecure])

    const handleDelete= (id)=> {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/ongoing/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                        <th>List No.</th>
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Deadline</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            goings.map((going,index) => (
                                <tr key={going._id}>
                                    <th>{index+1}</th>
                                    <td>{going.title}</td>
                                    <td>{going.description}</td>
                                    <td>{going.deadline}</td>
                                    <td>{going.priority}</td>
                                    <td><button className="btn glass" onClick={()=>handleDelete(going._id)}>Delete</button></td>
                                </tr>
                                ))}
                                </tbody>
                </table>
            </div>
        </div>
    );
};

export default OnGoing;