import React, {useEffect, useState} from 'react'
import GroupTable from "./GroupTable";
import Groups from "./Groups";
import Users from "./Users";
import UserTable from "./UserTable";



function Table(props) {
    const [userData,setUserData] = useState([])
    const [groupData,setGroupData] = useState([])
    const [isChangeCounter, setIsChangeCounter] = useState(0)

    useEffect(() => {
        fetch(`http://frisbee/adminRequest`, {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify({'giveData':'give'}),
            headers: {'Content-Type': 'application/json'}})
            .then(response => response.json())
            .then((data) => {
                setUserData(data.users)
                setGroupData(data.groups)
            })

    },[isChangeCounter]);



    if (props.dataType === 'user') {
        return (
            <div>
                <UserTable />
                <div className="scrollTable">
                    <table className="table text-center table-borderless col-11">
                        <tbody className="">
                        {userData.map(object =>
                            <Users setIsChangeCounter={setIsChangeCounter} user={object} key={object.userId}/>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    } else {
        return (
            <div>
                <GroupTable />
                <div className="scrollTable">
                    <table className="table text-center table-borderless col-11">
                        <tbody className="">
                        {groupData.map(object =>
                            <Groups setIsChangeCounter={setIsChangeCounter} group={object} key={object.groupId}/>
                        )}
                        </tbody>
                    </table>
                </div>
            </div>

        )
    }
}

export default Table;
