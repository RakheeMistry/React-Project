import { useState } from "react";
import { newusers } from "../../model/NewUser";
function Userlist() {
    const [state, setstate] = useState([{
        name: 'Raj Sinha',
        city: 'Delhi',
        email: 'Raj@gmail.com'
    }, {
        name: 'Raj Sinha',
        city: 'Delhi',
        email: 'Raj@gmail.com'
    }, {
        name: 'Raj Sinha',
        city: 'Delhi',
        email: 'Raj@gmail.com'
    }]);

    const updateTable = (event) => {
        if (event.target.id==='btn1') {
            setstate(
                [{
                    name: 'Raj Sinha',
                    city: 'Delhi',
                    email: 'Raj@gmail.com',
                }, {
                    name: 'Raj Sinha',
                    city: 'Delhi',
                    email: 'Raj@gmail.com',
                }, {
                    name: 'Raj Sinha',
                    city: 'Delhi',
                    email: 'Raj@gmail.com',
                }]);
          } else { setstate(newusers); }
    };
    return (
        <div>
            <h2>User List</h2>
            <table frame='box' rules="all" cellPadding={10} width={500}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.map((data) => {
                            return (
                                <tr>
                                    <td>{data.name}</td>
                                    <td>{data.city}</td>
                                    <td>{data.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <div style={{ textAlign: 'center', width: '500px' }}>
                <button id="btn1" onClick={updateTable}>Old Users</button>
                <button id="btn2" onClick={updateTable}>Change Users</button>
            </div>
        </div>
    )
}

export default Userlist;