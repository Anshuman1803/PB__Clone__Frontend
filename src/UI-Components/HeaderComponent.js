import React from 'react'
import Logo from "../Assets/logoPrepBytes.svg"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function HeaderComponent() {
    const { isLoggedIN} = useSelector((state) => state.AppUser.UserDetails)
    return (
        <header className='App__header'>
            <div className="App__header_LogoContainer">
                <img src={Logo} alt="PrepBytes__LOGO" className='LogoContainer__Logo' />
            </div>

            <nav className='App__navbar'>

                {
                    !isLoggedIN && <div className="App__navbar_ButtonsContainer">
                        <button className='navbar__buttonContainer__buttons'>Log In</button>
                        <button className='navbar__buttonContainer__buttons'>Sign Up</button>
                    </div>
                }

                <div className="App__navbar__LinksContainer">

                    <div className="App__navbar__ItemsContainer">
                        <span className='navbar__ItemsContainer__Item'>Studey Material <i className="fa-solid fa-caret-down"></i></span>
                        <div className="dropDownContainer">
                            <Link className='dropDownContainer__Item'>Mock Tests</Link>
                            <Link className='dropDownContainer__Item'>Video Tutorial</Link>
                        </div>
                    </div>

                    <div className="App__navbar__ItemsContainer">
                        <span className='navbar__ItemsContainer__Item'> Courses and Programs <i className="fa-solid fa-caret-down"></i></span>
                        <div className="dropDownContainer">
                            <Link className='dropDownContainer__Item'>Master Competitive Programming</Link>
                            <Link className='dropDownContainer__Item'>Full Stack Program</Link>
                        </div>
                    </div>

                    <div className="App__navbar__ItemsContainer">
                        <span className='navbar__ItemsContainer__Item'>  Elevation Academy </span>
                    </div>

                    <div className="App__navbar__ItemsContainer">
                        <span className='navbar__ItemsContainer__Item'>Projects <i className="fa-solid fa-caret-down"></i></span>
                        <div className="dropDownContainer project__dropDownContainer">
                            <Link className='dropDownContainer__Item'>HTML</Link>
                            <Link className='dropDownContainer__Item'>CSS</Link>
                            <Link className='dropDownContainer__Item'>JavaScript</Link>
                            <Link className='dropDownContainer__Item'>React JS</Link>
                            <Link className='dropDownContainer__Item'>Node Js</Link>
                            <Link className='dropDownContainer__Item'>MongoDB</Link>
                        </div>
                    </div>

                    {
                        isLoggedIN && <div className="App__navbar__UserContainer">
                            <div className="UserBox">
                                <span className='userInitials'>A</span>
                                <span className='greetingText'>Hi Anshuman</span>
                            </div>

                        </div>
                    }
                </div>



            </nav>
            <i className="fa-solid fa-bars header__hamMenuButton"></i>
        </header>
    )
}

export default HeaderComponent
