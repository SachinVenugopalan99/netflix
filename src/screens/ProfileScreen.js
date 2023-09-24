import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

const ProfileScreen = () => {

    const user = useSelector(selectUser);

  return (
    <div className='profileScreen'>
        <Nav />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfb5Yu2HC0ijVPBRq801G2D45a9fLj3-f1UkNXxAaPZyBxkA8S3j6VKvGtEoBj_QzjznU&usqp=CAU' alt=''/>
            <div className='profileScreen__details'>
                <h2>{user.email}</h2>
                <div className='profileScreen__plans'>
                    <h3>Plans</h3>
                    <button onClick={() => auth.signOut()} className='profileScreen__signOut'>Sign Out</button>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen
