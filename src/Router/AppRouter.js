import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../UI-Components/HomePage'
import MockTestComponent from '../UI-Components/MockTestComponent'
import VideoTutComponent from '../UI-Components/VideoTutComponent'
import ProjectComponent from '../UI-Components/ProjectComponent'
import FullStackProgramComponent from '../UI-Components/FullStackProgramComponent'
import CompetitiveProgrammingComponent from '../UI-Components/CompetitiveProgrammingComponent'
import ElevationAcademyComponent from '../UI-Components/ElevationAcademyComponent'
import UserFormContainer from '../UI-Components/User_AuthComponents/UserFormContainer'
import UserRegister from '../UI-Components/User_AuthComponents/UserRegister'
import UserLogin from '../UI-Components/User_AuthComponents/UserLogin'
import Dashboard from '../UI-Components/Dashboard/Dashboard'

function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />

            <Route path="/mockTest" element={<MockTestComponent />}>
            </Route>

            <Route path="/videoTutorial" element={<VideoTutComponent />} />
            <Route path='/project/:topic' element={<ProjectComponent />} />

            <Route path='/online-full-stack-developer-mern-certification-program' element={<FullStackProgramComponent />} />
            <Route path='/master-competitive-programming' element={<CompetitiveProgrammingComponent />} />
            <Route path='/elevation-academy' element={<ElevationAcademyComponent />} />

            <Route path='/user' element={<UserFormContainer />}>
                <Route path='/user/login' element={<UserLogin />} />
                <Route path='/user/register' element={<UserRegister />} />
            </Route>

            <Route path='/user/dashboard' element={<Dashboard />}>
            </Route>

        </Routes>
    )
}

export default AppRouter
