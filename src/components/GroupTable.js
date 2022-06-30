import React from 'react'

const GroupTable = () => {
    return (
        <div className="scrollHead">
            <table className="col-12 text-center">
                <thead>
                <tr>
                    <th className="col-1"  itemScope="col">
                        <button className="btn">Id</button>
                    </th>
                    <th className="col-5"  itemScope="col">Group name</th>
                    <th className="col-3"  itemScope="col">Date of create</th>
                    <th className="col-1"  itemScope="col">User value</th>
                    <th className="col-2"  itemScope="col"> Action </th>
                </tr>
                </thead>
            </table>
        </div>
    );
};

export default GroupTable;