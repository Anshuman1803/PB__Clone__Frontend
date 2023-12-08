import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import illustratedIMG from "../../Assets/registrationPOSTER.webp"
function UserFormContainer() {
    return (
        <div className="UserForm__MainContainer">
            <div className="UserFormContainer__LeftContainer">
                <img src={illustratedIMG} alt="Poster" className='illustratedIMG' />
                <div className='UserForm__Achievements'>
                    <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp" alt="PBLOGO" className='UserForm_pbLOGO' />

                    <div className="UserForm__AchievementBox">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp" alt="StudentICON" className='UserForm__AchievementICON' />
                        <p className='userForm_AchievementText'> <span className='AchievementCount'>10K+</span>Students Enrolled</p>
                    </div>

                    <div className="UserForm__AchievementBox">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp" alt="StudentICON" className='UserForm__AchievementICON' />
                        <p className='userForm_AchievementText'> <span className='AchievementCount'>1000+</span>Reach in Colleges</p>
                    </div>

                    <div className="UserForm__AchievementBox">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp" alt="StudentICON" className='UserForm__AchievementICON' />
                        <p className='userForm_AchievementText'> <span className='AchievementCount'>10K+</span>Hours of Learning</p>
                    </div>

                    <div className="UserForm__AchievementBox">
                        <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp" alt="StudentICON" className='UserForm__AchievementICON' />
                        <p className='userForm_AchievementText'> <span className='AchievementCount'>150K+</span>Social Community</p>
                    </div>
                </div>
            </div>
            <div className="UserFormContainer__FormContainer">

                <div className="FormContainer_Box">
                    <div className='FormContainer__Heading'>

                        <NavLink className="heading__navITEM" to="/user/register">SIGNUP</NavLink>
                        <NavLink className="heading__navITEM" to="/user/login">LOGIN</NavLink>
                    </div>

                    <div className="OutletContainer">

                        <Outlet />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default UserFormContainer
