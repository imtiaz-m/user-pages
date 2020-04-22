import React from 'react';

import People from '../../fakeData/People';
import { useState } from 'react/cjs/react.development';
import './User.css';
import Profile from '../Profile/Profile';




const User = () => {
    const first10 = People.slice(0, 12);
    const [people, setPeople] = useState(first10);
    const[count,setCount]=useState([]);

    const addPeople=(people)=>{
        console.log('add me',people);
        const newCount =[...count,people];
        setCount(newCount);

    }


    return (
        <div className="user-container">
            <div className="people">

                {
                    people.map(profile => <Profile 
                        addPeople={addPeople}
                        people={profile}
                        ></Profile>)
                }

            </div>

            <div className="count">
            <h5>Profile Information</h5>
            <h4>Friends:{count.length}</h4>
            <p>Total income:</p>
            </div>
        </div>
    );
};

export default User;
