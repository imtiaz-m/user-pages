import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Profile.css'

const Profile = (props) => {

    const { image, name, email, phone, income } = props.people;

    //console.log(props);
    return (
        <div className="profile">
            <div>

                <img src={image} alt="" />
            </div>
            <div className="info">
                <h3 >{name}</h3>
                <br />
                <p>Email: {email}</p>
                <p>Contact: {phone}</p>
                <p>Yearly Income: ${income}</p>

                <button 
                className="main-btn"
                onClick={()=>props.addPeople(props.people)}>
                    <FontAwesomeIcon icon={faUserPlus} />Add Friend</button>

            </div>


        </div>
    );
};

export default Profile;