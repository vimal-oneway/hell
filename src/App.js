import React,{useState} from 'react';
import {Home} from './page/Home';
import {Tickets} from './page/Tickets'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Dashboard} from './page/Dashboard'
import {ViewBus} from './page/ViewBus'

import { Login } from './page/Login';
import { Register } from './page/Register';
const App = () => {
  const initialUserData = {
    email:'',
    userId:null,
    product:''
  }

  const [userData,setUserData] = useState(initialUserData);

  
    return (
      <BrowserRouter>
          <Routes >
                <Route index element={<Home userData={userData}/>}/>
                <Route path='/tickets' element={<Tickets  userData = {userData}/>}/>
                <Route path='/viewBus/:id' element={<ViewBus userData={userData}/>}/>
                <Route path='/dashboard' element={<Dashboard  userData = {userData}/>}/>
                <Route path='/login' element={<Login userData = {userData}/>}/>
                <Route path='/register' element={<Register  userData = {userData}/>}/>
          </Routes>
      </BrowserRouter>
    );
  
}

export default App;
