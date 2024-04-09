import axios from "axios";
import { useState } from "react";
function UserAxios() {
    const [users, setUsers] = useState([]);
    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res) => {
                console.log(res.data);
                setUsers(res.data)
            }) 
            .catch((err) => { }) 
    }
    return (<div>
        <h2>Axios Example</h2>
        <p>Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing.</p>
        <button onClick={getUsers}>Get Users</button>
        {
        users.length > 0 ? (<div> 
           <ul>
           {
                users.map((user)=>{
                    return <li>{user.name}</li>
                })
            }
           </ul>
        </div>) : (<h2>No Users Information</h2>)
        }
    </div>)
}

export default UserAxios;