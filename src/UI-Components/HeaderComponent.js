import React, { useEffect, useState } from 'react'
import Logo from "../Assets/logoPrepBytes.svg"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userLogOut } from '../ReduxSlice/UserReduxSlice'
import { useDispatch } from 'react-redux'
function HeaderComponent() {
    const dispatch = useDispatch();
    const { isLoggedIN, User } = useSelector((state) => state.AppUser.UserDetails);
    const navigateTO = useNavigate();
    const [useDropDownShow, setUserDropDown] = useState(false);

    useEffect(()=>{
        setUserDropDown(false)
    }, []);
    return (
        <header className='App__header'>
            <Link to="/" className="App__header_LogoContainer">
                <img src={Logo} alt="PrepBytes__LOGO" className='LogoContainer__Logo' />
            </Link>

            <nav className='App__navbar'>

                {
                    !isLoggedIN && <div className="App__navbar_ButtonsContainer">
                        <button className='navbar__buttonContainer__buttons' onClick={() => navigateTO("/user/login")}>Log In</button>
                        <button className='navbar__buttonContainer__buttons' onClick={() => navigateTO("/user/register")}>Sign Up</button>
                    </div>
                }

                <div className="App__navbar__LinksContainer">

                    <div className="App__navbar__ItemsContainer">
                        <span className='navbar__ItemsContainer__Item'>Studey Material <i className="fa-solid fa-caret-down"></i></span>
                        <div className="dropDownContainer">
                            <Link to="/mockTest" className='dropDownContainer__Item'>Mock Tests</Link>
                            <Link to="/videoTutorial" className='dropDownContainer__Item'>Video Tutorial</Link>
                        </div>
                    </div>

                    <div className="App__navbar__ItemsContainer">
                        <span className='navbar__ItemsContainer__Item'> Courses and Programs <i className="fa-solid fa-caret-down"></i></span>
                        <div className="dropDownContainer">
                            <Link to="/online-full-stack-developer-mern-certification-program" className='dropDownContainer__Item'>Master Competitive Programming</Link>
                            <Link to="/master-competitive-programming" className='dropDownContainer__Item'>Full Stack Program</Link>
                        </div>
                    </div>

                    <Link to="/elevation-academy" className="App__navbar__ItemsContainer">
                        <span className='navbar__ItemsContainer__Item'>  Elevation Academy </span>
                    </Link>

                    <div className="App__navbar__ItemsContainer">
                        <span className='navbar__ItemsContainer__Item'>Projects <i className="fa-solid fa-caret-down"></i></span>
                        <div className="dropDownContainer project__dropDownContainer">
                            <Link to="/project/HTML" className='dropDownContainer__Item'>HTML</Link>
                            <Link to="/project/CSS" className='dropDownContainer__Item'>CSS</Link>
                            <Link to="/project/JavaScript" className='dropDownContainer__Item'>JavaScript</Link>
                            <Link to="/project/React" className='dropDownContainer__Item'>React JS</Link>
                            <Link to="/project/Node" className='dropDownContainer__Item'>Node Js</Link>
                            <Link to="/project/Mongo" className='dropDownContainer__Item'>MongoDB</Link>
                        </div>
                    </div>

                    {
                        isLoggedIN && <div className="App__navbar__UserContainer">
                            <div className="UserBox" onClick={() => setUserDropDown(!useDropDownShow)}>
                                <span className='userInitials'>{User[0]?.userName[0]} </span>
                                <span className='greetingText'>Hi {User[0]?.userName}</span>
                            </div>
                            {
                                useDropDownShow && <div className="dropDownContainer userDropownContainer">
                                    <Link to="/user/dashboard" className='dropDownContainer__Item'>Dashboard</Link>
                                    <span style={{ "color": "#ff8787" }} className='dropDownContainer__Item' onClick={() => {
                                        dispatch(userLogOut());
                                        navigateTO("/")
                                    }} >Log Out</span>
                                </div>
                            }
                        </div>
                    }
                </div>



            </nav>
            <i className="fa-solid fa-bars header__hamMenuButton"></i>
        </header>
    )
}

export default HeaderComponent
