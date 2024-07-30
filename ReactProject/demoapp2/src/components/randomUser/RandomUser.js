import axios from 'axios';
import { useState } from 'react';
function RandomUsers() {
    const [randomuser, setRandomuser] = useState([]);
    const [data, setData] = useState([]);
    const getRandomUsers = () => {
        axios.get('https://randomuser.me/api/?results=30')
            .then((res) => {
                console.log(res.data);
                setRandomuser(res.data.results);
                setData(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    };
    // const filterData = (event) => {
    //     if(event.target.id==='male')
    //     {setData(data.filter((ele)=> ele.gender === 'male'))}
    //     else if(event.target.id==='female')
    //     {setData(data.filter((ele)=> ele.gender === 'female'))}
    //     else
    //     {setData(data)}
    // }
    const allData = () => {
        setRandomuser(data);
    } 
    const filterMale = () => {
        setRandomuser(data.filter((ele)=>ele.gender==='male'))
    }
    const filterFemale = () => {
        setRandomuser(data.filter((ele)=>ele.gender==='female'))
    }
    return (
        <div>
            <h2>Random Users</h2>
            <p style={{textAlign:"justify"}}>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is to find a random paragraph. 
                We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and click the button. Your chosen number of paragraphs will instantly appear.
                While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be useful. A few examples of how some people use this generator are listed in the following paragraphs.
            </p>
            <button onClick={getRandomUsers}>Get Users</button>
            {
                randomuser.length > 0 && <div style={{display:'flex',justifyContent:'center',marginTop:'30px'}}> 
                    <div><input id='all' type='radio' name='gender' defaultChecked onChange={allData}/> All</div>
                    <div><input id='male' type='radio' name='gender' onChange={filterMale} /> Male</div>
                    <div><input id='female' type='radio' name='gender' onChange={filterFemale} /> Female</div>
                </div> 
            }
            {
                randomuser.length > 0 ? (
                    <table
                        width={1100}
                        style={{ margin: "50px auto" }}
                        cellPadding={10}>
                        <thead style={{backgroundColor:'black',color:'white'}}>
                            <tr>
                                <th>Image</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>City</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign:'center'}}>
                            {randomuser.map((user) => {
                                return <tr>
                                    <td>
                                        <img
                                            src={user.picture.medium}
                                            width={100}
                                            height={100}
                                            alt=''
                                            style={{borderRadius:'50%'}}
                                        />
                                    </td>
                                    <td>{user.name.first}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.location.city}</td>
                                    <td>{user.email}</td>
                                </tr>
                            })}
                        </tbody>
                    </table> ):
                    <h2 style={{ marginTop: "50px", textAlign: "center", color: "red" }}>No Users Information</h2>
            }
        </div>
    )
}

export default RandomUsers; 