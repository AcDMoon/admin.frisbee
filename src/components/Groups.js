import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";


function Groups(props) {
    const navigate = useNavigate()
    const [deleteCounter, setDeleteCounter] = useState(0)
    let state = props.group.groupId
    localStorage.setItem(state, JSON.stringify(props.group))

    function deleteObject() {
        if (deleteCounter === 0) {
            setDeleteCounter(1)
        } else {
            fetch(`http://frisbee/adminRequest`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    'entityType': 'group',
                    'deleteObject': {
                        'id': props.group.groupId
                    }
                }),
                headers: {'Content-Type': 'application/json'}
            })
                .then(() => {
                    props.setIsChangeCounter(Math.random() * 11111111)
                })
        }
    }

    return (

        <tr className="border-top border-dark d-flex">
            <td className="col-1 align-self-center"   itemScope="col">{props.group.groupId}</td>
            <td className="col-5 align-self-center"   itemScope="col">{props.group.groupName}</td>
            <td className="col-3 align-self-center"   itemScope="col">{props.group.dateOfCreate}</td>
            <td className="col-1 align-self-center"   itemScope="col">{props.group.userValue}</td>
            <td className="col-2 d-flex align-self-center justify-content-evenly" itemScope="col">
                <button className="col-5 btn btn-sm btn-dark w-90" onClick={() => navigate(`/group`, {state})}>edit</button>
                <button className="col-5 btn btn-sm btn-danger w-90" title={"Need double click to delete"} onClick={deleteObject}>delete</button>
            </td>
        </tr>

    )
}

export default Groups;