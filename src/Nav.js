import React, { useEffect, useState } from 'react'
import './Nav.css'
import { useNavigate } from 'react-router-dom';

const Nav = () => {

const [show, handleShow] = useState(false);
const navigate = useNavigate()

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true)
    } else {
        handleShow(false)
    }
}

    useEffect(() => {
        window.addEventListener('scroll', transitionNavBar);
        return () => window.removeEventListener('scroll', transitionNavBar);
    },[])

  return (
    <div className={`nav ${show ? 'nav__black' : ''}`}>
        <div onClick={() => navigate('/')} className='nav__contents'>
        <img className='nav__logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt=''/>
        <img onClick={() => navigate('/profile')} className='nav__avatar' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfb5Yu2HC0ijVPBRq801G2D45a9fLj3-f1UkNXxAaPZyBxkA8S3j6VKvGtEoBj_QzjznU&usqp=CAU' alt=''/>
        </div>
        </div>
  )
}

export default Nav;
