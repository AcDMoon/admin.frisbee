import React from 'react'

const UserTable = () => {
    return (
        <div className="scrollHead">
            <table className="col-12 text-center">
                <thead >
                <tr>
                    <th className="col-1" itemScope="col">
                        <button className="btn text-primary">Id</button>
                    </th>
                    <th className="col-2" itemScope="col">Email</th>
                    <th className="col-2" itemScope="col">Password</th>
                    <th className="col-2" itemScope="col">Name</th>
                    <th className="col-1" itemScope="col">Site role</th>
                    <th className="col-2" itemScope="col">Date of birth</th>
                    <th className="col-2" itemScope="col">Action</th>
                </tr>
                </thead>
            </table>
        </div>
    );
};

export default UserTable;