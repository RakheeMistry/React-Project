import './Profile.css';
import { useState } from "react";
function Profile() {
    let [styles,setStyles] = useState({
        bgColor: "white",
        textColor: "black",
        title:"Check to Switch Dark Mode"
    });
    let [profile, setProfile] = useState(
        {
            username: "Jay Sinha",
            email: "jayshinha08@gmail.com",
            gender: "male",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1NnEIyhibEevNFyX2yLBltxxtjvazVcHS0MRLYFDY_qBvINHK23miG6X63cgbPHzGu0&usqp=CAU"
        }
    );

    const changeToZiya = () => {
        setProfile({
            username: "Ziya Sharma",
            email: "ziya@gmail.com",
            gender: "female",
            image: "https://i.pinimg.com/originals/08/16/eb/0816ebc536f6ced30e394c3f46e36ef5.jpg"
        })
    }

    const changeToJay = () => {
        setProfile({
            username: "Jay Sinha",
            email: "jayshinha08@gmail.com",
            gender: "male",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs1NnEIyhibEevNFyX2yLBltxxtjvazVcHS0MRLYFDY_qBvINHK23miG6X63cgbPHzGu0&usqp=CAU"
        })
    }

    const changeStyle = (event) => {
        if(event.target.checked){
            setStyles({
                bgColor:'black',
                textColor:'white',
                title:'Uncheck to Switch Light Mode',
            })
        } else {
            setStyles({
                bgColor:'white',
                textColor:'black', 
                title:'Check to Switch Dark Mode',
            })
        }
    }


    return (
        <div className="profileContainer">
            <section className="imageSection">
                <img src={profile.image} width="100%" height="100%" alt="user" />
            </section>
            <section className="contentSection" 
                style={{backgroundColor: styles.bgColor, color: styles.textColor}}>
                <dl>
                    <dt>
                        <b>User Name</b>
                    </dt>
                    <dd>{profile.username}</dd>
                    <dt>
                        <b>Email</b>
                    </dt>
                    <dd>{profile.email}</dd>
                    <dt>
                        <b>Gender</b>
                    </dt>
                    <dd>{profile.gender}</dd>
                    <dt>
                        <b>Description</b>
                    </dt>
                    <dd>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </dd>
                </dl>
                <button onClick={changeToJay}>Jay Sinha</button>
                <button onClick={changeToZiya}>Ziya Sharma</button>
                <br />
                <input type='checkbox' onChange={changeStyle}/>{styles.title}
            </section>
        </div>
    );
}

export default Profile;