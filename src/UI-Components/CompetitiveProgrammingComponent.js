import React, { useState } from 'react'

import Footer from './Footer'
import PaymentPopup from '../PaymentInegration/PaymentPopup';
import { useDispatch } from 'react-redux'
import { addTempCourse } from '../ReduxSlice/UserReduxSlice'
function CompetitiveProgrammingComponent() {
  const [IsPaymentClick, setIsPaymentClick] = useState(false);

  const [tempData, setTempData] = useState({
    "testID": 1,
    "testImg": 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp',
    "testName": "master-competitive-programming",
    "testCategory": 'Programming-Course',
    "testPrice": 25000,
    "testDate": ""
  });


  const dispatch = useDispatch();

  const handleActiveOption = (e, batchDate) => {
    setTempData({ ...tempData, "testDate": batchDate });

    const batchSelection__option = document.querySelectorAll(".batchSelection__option");
    batchSelection__option.forEach((option) => {

      option.addEventListener("click", (e) => {

        batchSelection__option.forEach((item) => {
          item.classList.remove("batchSelection__SelectedOption");
        });
        option.classList.add("batchSelection__SelectedOption");
      })

    })
  }

  const handleBuyNow = (e) => {
    e.preventDefault();
    dispatch(addTempCourse(tempData))
    setIsPaymentClick(true)
  }
  const canclePayment = () => {
    setIsPaymentClick(false)
  }
  return (
    <>
      <section className="CompetititveProgramming__MainContainer">

        <div className="CompetitivePrograming__TopContainer">

          <div className="CP_topContainer__DetailsColumn">

            <h2 className='DetailsColumn__MainHeading'>MASTER COMPETITIVE PROGRAMMING</h2>
            <p className='DetailsColumn__Desc'>Master Competitive Programming Fom Zero And Become A Top-Rated <span className='DetailsColumn_ImpDesc'>Coder Under The Guidance Of Top Competitive Programmers</span></p>
            <a className='EnrolButton EntrolButtonLInk' href='#selectBatch'>Enrol Now</a>

          </div>

          <div className="CP_topContainer__PosterClumn">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp" alt="CompanyLogo" className='FANGPoster' />
          </div>

          <div className="CP_topContainer__ExtraInfroColumn">

            <div className="ExtraInfoBox">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp" alt="icon" className='ExtraInfoBox_Icon' />
              <p className='ExtraInfoBox_Text'>9 months intensive bootcamp</p>
            </div>

            <div className="ExtraInfoBox">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp" alt="icon" className='ExtraInfoBox_Icon' />
              <p className='ExtraInfoBox_Text'>Quick doubt resolution</p>
            </div>

            <div className="ExtraInfoBox">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp" alt="icon" className='ExtraInfoBox_Icon' />
              <p className='ExtraInfoBox_Text'>Live coding sessions with top-rated coders</p>
            </div>

            <div className="ExtraInfoBox">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp" alt="icon" className='ExtraInfoBox_Icon' />
              <p className='ExtraInfoBox_Text'>Get certificate on course completion</p>
            </div>

          </div>

        </div>

        <div className="CP_mentorInfo_Container">

          <h2 className="CP_mentorInforContainer_Heading">Get Guidance From Industry Leading Mentors</h2>
          <h3 className='CP_mentorInforContainer_Heading'>Other Mentors You Will Be Interacting With</h3>

          <div className="CP_mentorInfo_CardContainer">

            <div className="CP_mentorInfo_Cards">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp" alt="MentorProfile" className='mentorProfileIMG' />
              <div className='metnorInfo'>
                <p className="metnorname">Mamta</p>
                <p className="mentorPost">Co-Founder, Prepbytes</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp" alt="CompanyLOGO" className='mentorCompany_Logo' />
              </div>
            </div>

            <div className="CP_mentorInfo_Cards">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Kushdeep.webp" alt="MentorProfile" className='mentorProfileIMG' />
              <div className='metnorInfo'>
                <p className="metnorname">Kushdeep</p>
                <p className="mentorPost">SDE, ShareChat</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-01.webp" alt="CompanyLOGO" className='mentorCompany_Logo' />
              </div>
            </div>

            <div className="CP_mentorInfo_Cards">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Aveek.webp" alt="MentorProfile" className='mentorProfileIMG' />
              <div className='metnorInfo'>
                <p className="metnorname">Aveek</p>
                <p className="mentorPost">Mentor, Prepbytes</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-02.webp" alt="CompanyLOGO" className='mentorCompany_Logo' />
              </div>
            </div>

          </div>
        </div>

        <div className="batchSelectionContainer" id='selectBatch'>
          <p className='SelectBatchText'>Select Batch</p>

          <div className="batchSelection__option batchSelection__SelectedOption" onClick={(e) => handleActiveOption(e, "1st May")}>
            <p className="batchStartingDate">1st May</p>
            <p className="bathStartingDate_text">Enrolment Started</p>
          </div>

          <div className="batchSelection__option" onClick={(e) => handleActiveOption(e, "15th May")}>
            <p className="batchStartingDate">15th May</p>
            <p className="bathStartingDate_text">Enrolment Started</p>
          </div>

          <div className="batchPriceContainer">
            <p className="batchPrice_text">₹25000</p>
            <button className='EnrolButton' onClick={(e) => handleBuyNow(e)}>Enrol Now</button>
          </div>
          {IsPaymentClick && <PaymentPopup propFun={canclePayment} />}
        </div>

        <Footer></Footer>
      </section>
      <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
    </>
  )
}

export default CompetitiveProgrammingComponent
