import React from 'react'
import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from '../UI-Components/Loader'
const MockTestComponent = lazy(() => import('../UI-Components/MockTestComponent'));
const VideoTutComponent = lazy(() => import('../UI-Components/VideoTutComponent'));
const ProjectComponent = lazy(() => import('../UI-Components/ProjectComponent'));
const FullStackProgramComponent = lazy(() => import('../UI-Components/FullStackProgramComponent'));
const CompetitiveProgrammingComponent = lazy(() => import('../UI-Components/CompetitiveProgrammingComponent'));
const ElevationAcademyComponent = lazy(() => import('../UI-Components/ElevationAcademyComponent'));
const UserFormContainer = lazy(() => import('../UI-Components/User_AuthComponents/UserFormContainer'));
const UserRegister = lazy(() => import('../UI-Components/User_AuthComponents/UserRegister'));
const UserLogin = lazy(() => import('../UI-Components/User_AuthComponents/UserLogin'));
const Dashboard = lazy(() => import('../UI-Components/Dashboard/Dashboard'));

const HomePage = lazy(() => import('../UI-Components/HomePage'))
function AppRouter() {
    return (
        <Routes>
            <Route path='/' element={<Suspense fallback={<Loader />}>
                <HomePage />
            </Suspense>} />

            <Route path="/mockTest" element={<Suspense fallback={<Loader />}>
                <MockTestComponent /> </Suspense>}>
            </Route>

            <Route path="/videoTutorial" element={<Suspense fallback={<Loader />}>
                <VideoTutComponent /> </Suspense>} />
            <Route path='/project/:topic' element={<Suspense fallback={<Loader />}>
                <ProjectComponent /> 
                
                
                </Suspense>} />

            <Route path='/online-full-stack-developer-mern-certification-program' element={<Suspense fallback={<Loader />}>
                <FullStackProgramComponent /> </Suspense>} />
            <Route path='/master-competitive-programming' element={<Suspense fallback={<Loader />}>
                <CompetitiveProgrammingComponent /> </Suspense>} />
            <Route path='/elevation-academy' element={<Suspense fallback={<Loader />}>
                <ElevationAcademyComponent /> </Suspense>} />

            <Route path='/user' element={<Suspense fallback={<Loader />}>
                <UserFormContainer /> </Suspense>}>
                <Route path='/user/login' element={<Suspense fallback={<Loader />}>
                    <UserLogin /> </Suspense>} />
                <Route path='/user/register' element={<Suspense fallback={<Loader />}>
                    <UserRegister /> </Suspense>} />
            </Route>

            <Route path='/user/dashboard' element={<Suspense fallback={<Loader />}>
                <Dashboard /> </Suspense>}>
            </Route>

        </Routes>
    )
}

export default AppRouter
