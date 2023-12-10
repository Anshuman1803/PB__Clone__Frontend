import React from 'react'
import {useNavigate} from 'react-router-dom'
function UnauthorizedPage() {
  const navigateTO = useNavigate();
  return (
    <div className='UnauthorizedPageContainer'>
      <h1 className='unAuthMsg'>Locked for you</h1>
      <button className='knowMoreButton' onClick={()=> navigateTO("/")}>Go To Home Page</button>
    </div>
  )
}

export default UnauthorizedPage
