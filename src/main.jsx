import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main';
import ErrorRoute from './components/ErrorRoute';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import AuthProvider from './components/AuthProvide/AuthProvider';
import DashBoard from './components/Dashboard/DashBoard';
import PrivateRoute from './components/PrivateRoute';
import Profile from './components/Dashboard/Profile';
import CreateTask from './components/Dashboard/CreateTask';
import TodoList from './components/Dashboard/TodoList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorRoute></ErrorRoute>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element: <Register></Register>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
    children:[
      {
        path:'/dashboard/profile',
        element:<PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path:'/dashboard/create',
        element:<PrivateRoute><CreateTask></CreateTask></PrivateRoute>
      },
      {
        path:'/dashboard/todo',
        element:<PrivateRoute><TodoList></TodoList></PrivateRoute>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
</React.StrictMode>,
)
