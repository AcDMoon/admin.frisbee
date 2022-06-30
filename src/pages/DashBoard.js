import React, {useState} from 'react'
import Table from "../components/Table";



function DashBoard() {
    const [userTable, setUserTable] = useState('')
    const [groupTable, setGroupTable] = React.useState('')
    const [editForm, setEditForm] = React.useState('')


    function editStateEditForm(newForm){
        setEditForm(newForm)
    }


    function giveUserTable() {
        setGroupTable('')
        setUserTable(<Table dataType={'user'} form={editStateEditForm}/>)
    }

    function giveGroupTable() {
        setUserTable('')
        setGroupTable(<Table dataType={'group'} form={editStateEditForm}/>)
    }


    return (
        <div className="App">
            <div className="row d-flex mb-5">
                <button className="btn-primary btn btn-lg col-2 me-3" onClick={giveUserTable}> Users </button>
                <button className="btn-primary btn btn-lg col-2" onClick={giveGroupTable}> Groups </button>
            </div>
            <div className="">{userTable}</div>
            <div className="">{groupTable}</div>
            <div className="mt-5">{editForm}</div>

        </div>
    );
}

export default DashBoard;