import React from 'react'
import { useSelector } from 'react-redux'
import { userLogOut } from '../ReduxSlice/UserReduxSlice'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
function MobileNavBar({handleHideNav}) {
    const navigateTO = useNavigate();
    const dispatch = useDispatch();
    const { isLoggedIN, User } = useSelector((state) => state.AppUser.UserDetails);
    return (
        <aside className='mobileNavbar__Conainer'>

            {isLoggedIN && <div className="mobileNav__UserBox">
                <p className="mobileNav__userGreeting"><i className="fa-solid fa-user"></i>Hi {User[0]?.userName}</p>
                <Link to="/user/dashboard" className='mobileNav__userGreeting' onClick={handleHideNav}><i className="fa-solid fa-chalkboard-user"></i>My Dashboard</Link>
            </div>}

            <Link onClick={handleHideNav} to="/mockTest" className='mobilenav__items'>Mock Tests</Link>

            <Link onClick={handleHideNav} to="/videoTutorial" className='mobilenav__items'>Video Tutorial</Link>

            <Link onClick={handleHideNav} to="/online-full-stack-developer-mern-certification-program" className='mobilenav__items'> Full Stack Program</Link>

            <Link onClick={handleHideNav} to="/master-competitive-programming" className='mobilenav__items'>Master Competitive Programming</Link>

            <Link onClick={handleHideNav} to="/elevation-academy" className='mobilenav__items'>  Elevation Academy </Link>

            <Link onClick={handleHideNav} to="/project/HTML" className='mobilenav__items'>Project</Link>

            {isLoggedIN ? <Link className='mobilenav__items Mobilenav__loginSignUpLink' onClick={() => {
                dispatch(userLogOut());
                handleHideNav();
                navigateTO("/")
            }}>Log Out</Link> : <Link to="/user/login" className='mobilenav__items Mobilenav__loginSignUpLink' onClick={handleHideNav}>Login/SignUp</Link>}
        </aside>
    )
}

export default MobileNavBar
