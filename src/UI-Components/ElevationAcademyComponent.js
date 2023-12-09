import React from 'react'

function ElevationAcademyComponent() {
  return (
    <>
      <section className='ElevationAcademy__MainContainer'>

        <div className="EA_MainContainer__TopMostContainer">

          <div className="EA_TopMostContainer__DetailsBox">
            <h2 className='EA_detailsBox_heading'>PrepBytes Elevation Academy - Full Stack Web Development Career</h2>

            <p className='EA_DetailsBox_Desc'>Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</p>
            <p className='EA_DetailsBox_ExtraDesc'>Complete Live Class from experts</p>
            <p className='EA_DetailsBox_ExtraDesc'>Be the best Full stack developer</p>
            <p className='EA_DetailsBox_ExtraDesc'>Job Guarantee</p>
          </div>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp" alt="Poster" className='EA_TopMostContainer__Poster' />
        </div>
      </section>

      <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
    </>
  )
}

export default ElevationAcademyComponent
