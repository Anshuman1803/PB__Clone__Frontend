import React, {useEffect } from 'react'


import Footer from './Footer'
function ProjectComponent() {
  useEffect(()=>{
    window.scrollTo(0, 0);
  }, [])
  return (
    <div>
                  <Footer></Footer>
       <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
    </div>
  )
}

export default ProjectComponent
