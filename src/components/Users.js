import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';





function Users(props) {
    const navigate = useNavigate()
    const [deleteCounter, setDeleteCounter] = useState(0)
    let state = props.user.userId
    localStorage.setItem(state, JSON.stringify(props.user))

    function deleteObject() {
        if (deleteCounter === 0) {
            alert("Click another time to confirm delete");
            setDeleteCounter(1)
        } else {
            fetch(`http://frisbee/adminRequest`, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify({
                    'entityType': 'user',
                    'deleteObject': {
                        'id': props.user.userId
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
            <td className="col-1 align-self-center"  itemScope="col">{props.user.userId}</td>
            <td className="col-2 align-self-center"  itemScope="col">{props.user.email}</td>
            <td className="col-2 align-self-center"  itemScope="col">{props.user.password}</td>
            <td className="col-2 align-self-center"  itemScope="col">{props.user.name}</td>
            <td className="col-1 align-self-center"  itemScope="col">{props.user.siteRole}</td>
            <td className="col-2 align-self-center"  itemScope="col">{props.user.date}</td>

            <td className="col-2 d-flex align-self-center justify-content-evenly">
                <button className="col-5 btn btn-sm btn-dark w-20"  onClick={() => navigate(`/user`, {state})}>edit</button>
                <button className="col-5 btn btn-sm btn-danger w-20" title={"Need double click to delete"} onClick={deleteObject}> delete</button>
            </td>
        </tr>
    )



}

export default Users;