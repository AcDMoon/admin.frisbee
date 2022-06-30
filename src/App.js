import {Route, Routes} from "react-router-dom"
import DashBoard from "./pages/DashBoard";
import React from 'react'
import EditUser from "./pages/EditUser";
import EditGroup from "./pages/EditGroup";


function App() {
return (

    <Routes>
        <Route path="/" element={<DashBoard/>}/>
        <Route path="/user\/user" element={<DashBoard/>}/>
        <Route path="/user" element={<EditUser/>}/>
        <Route path="/group" element={<EditGroup/>}/>
        <Route path='*' element={<DashBoard/>}/>
    </Routes>

)
}

export default App;
