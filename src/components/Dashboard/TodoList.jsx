import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';




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

        const [completed, setCompleted] = useState([]);

        useEffect(() => {
            axiosSecure.get('/completed')
            .then((res) => {
                setCompleted(res.data);
                console.log();
            })
            .catch((error) => {
                console.error(error);
            });
            } ,[axiosSecure])

        const handleDeleteFromTodo= (id)=> {
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
                                        text: "Your To-Do task has been deleted.",
                                        icon: "success"
                                    });
                                    const updatedTodos = todos.filter(todo => todo._id !== id);
                                    setTodos(updatedTodos);
                                }
                            })
                    }
                });
        
            }
        const handleDeleteFromOngoing= (id)=> {
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
                                    text: "Your On-Going task has been deleted.",
                                    icon: "success"
                                });
                                const updatedOngoing = goings.filter(going => going._id !== id);
                                setGoings(updatedOngoing);
                            }
                        })
                }
            });
    
        }
        const handleDeleteFromCompleted= (id)=> {
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
                    axiosSecure.delete(`/completed/${id}`)
                        .then(res => {
                            if (res.data.deletedCount > 0) { 
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Completed task has been deleted.",
                                    icon: "success"
                                });
                                const updatedCompleted = completed.filter(complete => complete._id !== id);
                                setCompleted(updatedCompleted);
                            }
                        })
                }
            });
    
        }



        useEffect(() => {
            fetchTodos();
            fetchGoings();
            fetchCompleted();
        }, [axiosSecure]);

    const fetchTodos = () => {
        axiosSecure.get('/todo')
            .then((res) => {
                setTodos(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const fetchGoings = () => {
        axiosSecure.get('/ongoing')
            .then((res) => {
                setGoings(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const fetchCompleted = () => {
        axiosSecure.get('/completed')
            .then((res) => {
                setCompleted(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleMoveToTodo = async (object) => {
        try {
            const task = {
                title: object.title,
                description: object.description,
                deadline: object.deadline,
                priority : object.priority  
            }
            console.log(task);
   
            const tasklist = await axiosSecure.post('/todo', task);
            console.log(tasklist.data)
            fetchTodos();
            fetchGoings();
            fetchCompleted();
        } catch (error) {
            console.error(error);
        }
    };

    const handleMoveToOngoing = async (object) => {
        try {
            const task = {
                title: object.title,
                description: object.description,
                deadline: object.deadline,
                priority : object.priority  
            }
            console.log(task);
   
            const tasklist = await axiosSecure.post('/ongoing', task);
            console.log(tasklist.data)
            fetchTodos();
            fetchGoings();
            fetchCompleted();
        } catch (error) {
            console.error(error);
        }
    };

    const handleMoveToCompeleted = async (object) => {
        try {
            const task = {
                title: object.title,
                description: object.description,
                deadline: object.deadline,
                priority : object.priority  
            }
            console.log(task);
            const tasklist = await axiosSecure.post('/completed', task);
            console.log(tasklist.data)
            fetchTodos();
            fetchGoings();
            fetchCompleted();
        } catch (error) {
            console.error(error);
        }
    };
          

    return ( 
        <div>

<div>
    

    </div>
            {/* todolist */}
           <div>
            <h1 className="text-3xl font-bold text-center my-4">To-Do List</h1>
            <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        <thead>
                        <tr>
                            <th>Task Name</th>
                            <th>Task Description</th>
                            <th>Deadline</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map((todo) => (
                                    <tr key={todo._id}>
                                        <td>{todo.title}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.deadline}</td>
                                        <td>{todo.priority}</td>
                                        <td><button className="btn glass" onClick={()=>handleDeleteFromTodo(todo._id)}>Delete</button></td>
                                        <td><button className="btn glass" onClick={()=>handleMoveToOngoing(todo)}> Move to On-going</button></td>
                                        <td><button className="btn glass" onClick={()=>handleMoveToCompeleted(todo)}> Move to Completed</button></td>
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
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Deadline</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            goings.map((going) => (
                                <tr key={going._id}>
                                    <td>{going.title}</td>
                                    <td>{going.description}</td>
                                    <td>{going.deadline}</td>
                                    <td>{going.priority}</td>
                                    <td><button className="btn glass" onClick={()=>handleDeleteFromOngoing(going._id)}>Delete</button></td>
                                    <td><button className="btn glass" onClick={()=>handleMoveToTodo(going)}> Move to Todo</button></td>
                                    <td><button className="btn glass" onClick={()=>handleMoveToCompeleted(going)}> Move to Completed</button></td>
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
                        <th>Task Name</th>
                        <th>Task Description</th>
                        <th>Deadline</th>
                        <th>Priority</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            completed.map((complete) => (
                                <tr key={complete._id}>
                                    <td>{complete.title}</td>
                                    <td>{complete.description}</td>
                                    <td>{complete.deadline}</td>
                                    <td>{complete.priority}</td>
                                    <td><button className="btn glass" onClick={()=>handleDeleteFromCompleted(complete._id)}>Delete</button></td>
                                    <td><button className="btn glass" onClick={()=>handleMoveToTodo(complete)}> Move to Todo</button></td>
                                    <td><button className="btn glass" onClick={()=>handleMoveToOngoing(complete)}> Move to Ongoing</button></td>
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