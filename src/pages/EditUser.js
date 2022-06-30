import React, {useState} from 'react';
import {Redirect, useLocation, useNavigate} from "react-router-dom";




const EditUser = () => {
    const navigate = useNavigate()
    let location = useLocation();
    let user = JSON.parse(localStorage.getItem(location.state));
    if (user === null) {
        window.location.href = '/';
    }
    const [updateStatus, setUpdateStatus] = useState()
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(user.password)
    const [name, setName] = useState(user.name)
    const [siteRole, setSiteRole] = useState(user.siteRole)
    const [date, setDate] = useState(user.date)

    function changeState(value,state){
        state(value)
    }

    function updateOnServer() {
        setUpdateStatus( <h4 className=" text-center text-warning">Loading...</h4>)
        fetch(`http://frisbee/adminRequest`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                'entityType':'user',
                'updatedData': {
                    'userId': location.state,
                    'email':email,
                    'password':password,
                    'name':name,
                    'siteRole':siteRole,
                    'date':date
            }}),
            headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(() =>
                {
                    setUpdateStatus( <h4 className=" text-center text-success">Success!</h4>)
                    user.email = email
                    user.password = password
                    user.name = name
                    user.siteRole = siteRole
                    user.date = date
                    localStorage.setItem(location.state, JSON.stringify(user))
                },
                () => {
                    setUpdateStatus( <h4 className=" text-center text-danger">Error!</h4>)
                })
    }

    return (
        <div >
            <button className="btn btn-lg btn-dark col-2 mt-3 mb-3 text-start" onClick={() => navigate('/')}>&lt;== Go back</button>
            <div className="ms-5 pt-5 d-flex justify-content-center ">



               <form className="col-4">
                   {updateStatus}
                   <div className="form-group row mb-3 mt-5">
                       <h5>Email</h5>
                       <input className="form-control" type={"email"} onChange={event => changeState(event.target.value,setEmail)} value={email} placeholder="email"/>
                   </div>
                   <div className="form-group row mb-3">
                       <h5>Password</h5>
                       <input className="form-control" type={"text"} onChange={event => changeState(event.target.value,setPassword)} value={password} placeholder="password"/>
                   </div>
                   <div className="form-group row mb-3">
                       <h5>Name</h5>
                       <input className="form-control" type={"text"} onChange={event => changeState(event.target.value,setName)} value={name} placeholder="name"/>
                   </div>
                   <div className="form-group row mb-3">
                       <h5>Site role</h5>
                       <p>(0 - default, 1 - banned, 2 - administrator)</p>
                       <input className="form-control" type={"number"} onChange={event => changeState(event.target.value,setSiteRole)} value={siteRole} placeholder="site role"/>
                   </div>
                   <div className="form-group row mb-3">
                       <h5>Date</h5>
                       <input className="form-control" type={"date"} onChange={event => changeState(event.target.value,setDate)} value={date} placeholder="date of birth"/>
                   </div>
                   <div className="form-group row mb-3">
                       <button type="button" className="btn btn-lg btn-primary" onClick={() => updateOnServer()}> Update </button>
                   </div>
               </form>
            </div>
        </div>
    );
};

export default EditUser;