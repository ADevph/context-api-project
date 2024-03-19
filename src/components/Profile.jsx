import React, {useContext} from 'react';
import UserContext from '../context/UserContext';



const Profile = () => {

    const {user} = useContext(UserContext)

    if(!user) return <p>
        please login
    </p>

    return <div>
        welcome {user.name}!
    </div>
};

export default Profile;