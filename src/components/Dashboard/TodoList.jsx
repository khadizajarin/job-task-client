import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';



const TodoList = () => {
    const [todos, setTodos] = useState([]);

    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        axiosSecure.get('/todo')
    .then((res) => {
        setTodos(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    } ,[axiosSecure])

    const [goings, setGoings] = useState([]);

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

    const [completed, setcompleted] = useState([]);

    useEffect(() => {
        axiosSecure.get('/completed')
    .then((res) => {
        setcompleted(res.data);
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
                    axiosSecure.delete(`/todo/${id}`)
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

            {/* todolist */}
           <div>
            <h1 className="text-3xl font-bold text-center my-4">To-Do List</h1>
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
                                todos.map((todo,index) => (
                                    <tr key={todo._id}>
                                        <th>{index+1}</th>
                                        <td>{todo.title}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.deadline}</td>
                                        <td>{todo.priority}</td>
                                        <td><button className="btn glass" onClick={()=>handleDelete(todo._id)}>Delete</button></td>
                                    </tr>
                                    ))}
                                    </tbody>
                    </table>
            </div>
           </div>



            {/* ongoing list */}
            <div>
            <h1 className="text-3xl font-bold text-center my-4">On-Going List</h1>
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


            {/* Completed lists */}
            <div>
            <h1 className="text-3xl font-bold text-center my-4">Completed</h1>
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
                            completed.map((complete,index) => (
                                <tr key={complete._id}>
                                    <th>{index+1}</th>
                                    <td>{complete.title}</td>
                                    <td>{complete.description}</td>
                                    <td>{complete.deadline}</td>
                                    <td>{complete.priority}</td>
                                    <td><button className="btn glass" onClick={()=>handleDelete(complete._id)}>Delete</button></td>
                                </tr>
                                ))}
                                </tbody>
                </table>
            </div>
            </div>
        </div>

    );
};

export default TodoList;