import { createHashRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Component/Home/Home';
import Movies from './Component/Movies/Movies';
import People from './Component/People/People';
import Tv from './Component/Tv/Tv';
import RouteLayout from './Layout/RouteLayout';
import Notfound from './Component/Notfound/Notfound';
import ItemDetails from './Component/ItemDetails/ItemDetails';
import Register from './Component/Register/Register';
import Login from './Component/Login/Login';
import jwtDecode from 'jwt-decode';
import { useEffect, useState } from 'react';
import Profile from './Component/Profile/Profile';
import ProtectedRoute from './Component/ProtectedRoute/ProtectedRoute';




function App() {

  useEffect(()=>
  {
    if (localStorage.getItem('userToken')!==null)
    {
      saveUserData();
    }

  },[])

  const [userData, setuserData] = useState(null);

  function saveUserData()
  {
    let encodedToken= localStorage.getItem('userToken');
    let decodedToken=jwtDecode(encodedToken);
    setuserData(decodedToken);
  }

  let routes= createHashRouter([
    {path:'/',element:<RouteLayout userData={userData} setuserData={setuserData}/>,children:[
      {path:'/home',element:<ProtectedRoute  userData={userData} ><Home/></ProtectedRoute>},
      {path:'/movies',element:<ProtectedRoute  userData={userData} ><Movies/></ProtectedRoute>},
      {path:'/tv',element:<ProtectedRoute  userData={userData} ><Tv/></ProtectedRoute>},
      {path:'/people',element:<ProtectedRoute  userData={userData} ><People/></ProtectedRoute>},
      {path:'/profile',element:<ProtectedRoute  userData={userData} ><Profile userData={userData}/></ProtectedRoute>},
      {path:'/details/:id/:media',element:<ProtectedRoute  userData={userData} ><ItemDetails/></ProtectedRoute>},
      {path:'/register' ,element:<Register/>},
      {path:'/login' ,element:<Login saveUserData={saveUserData}/>},
      {path:'*',element:<ProtectedRoute><Notfound/></ProtectedRoute>},
      {index:true,element:<Register/>}
      
    ]}
  ])
  return (
    <>
   <RouterProvider router={routes}/>
   
    </>
  );
}

export default App;
