import React, {useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";

const EditGroup = () => {
    const navigate = useNavigate()
    let location = useLocation();
    let group = JSON.parse(localStorage.getItem(location.state));
    if (group === null) {
        window.location.href = '/';
    }
    const [updateStatus, setUpdateStatus] = useState()
    const [groupName, setGroupName] = useState(group.groupName)
    const [dateOfCreate, setDateOfCreate] = useState(group.dateOfCreate)



    function changeState(value,state){
        state(value)
    }

    function updateOnServer() {
        setUpdateStatus( <h4 className=" text-center text-warning">Loading...</h4>)
        fetch(`http://frisbee/adminRequest`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({
                'entityType':'group',
                'updatedData': {
                    'groupId': location.state,
                    'groupName':groupName,
                    'dateOfCreate':dateOfCreate,
                }}),
            headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then(() =>
                {
                    setUpdateStatus( <h4 className=" text-center text-success">Success!</h4>)
                    group.groupName = groupName
                    group.dateOfCreate = dateOfCreate
                    localStorage.setItem(location.state, JSON.stringify(group))
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
                        <h5>Group name</h5>
                        <input className="form-control" type={"text"} onChange={event => changeState(event.target.value,setGroupName)} value={groupName} placeholder="group name"/>
                    </div>
                    <div className="form-group row mb-3">
                        <h5>Date of create</h5>
                        <input className="form-control" type={"date"} onChange={event => changeState(event.target.value,setDateOfCreate)} value={dateOfCreate} placeholder="date of create"/>
                    </div>
                    <div className="form-group row mb-3">
                        <button type="button" className="btn btn-lg btn-primary" onClick={() => updateOnServer()}> Update </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditGroup;