import React, { useEffect, useState } from 'react'

import Footer from './Footer'
import PaymentPopup from '../PaymentInegration/PaymentPopup';
import { useDispatch } from 'react-redux'
import { addTempCourse } from '../ReduxSlice/UserReduxSlice'
function CompetitiveProgrammingComponent() {
  const dispatch = useDispatch();
  const [IsPaymentClick, setIsPaymentClick] = useState(false);

  const [tempData, setTempData] = useState({
    "testID": 1,
    "testImg": 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp',
    "testTitle": "master-competitive-programming",
    "testCategory": 'Programming-Course',
    "testPrice": 25000,
    "testDate": "1st May"
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


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

        <h2 className="Cp_ProvidedFacility__heading">Master Competitive Programming With Us</h2>

        <div className="Cp_ProvidedFacility_MainContainer">

          <div className="CP_ProvidedFacility__leftContainer">

            <div className="CP_ProvidedFacility_ListBox">
              <div className="Cp_ProvidedFacilityIConContainer">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp" alt="FaciltyICON" className='CP_ProvidedFacility__ICON' />
              </div>
              <div className="CP_ProvidedFacility_DescBox">
                <h4 className='CP_ProvidedFacilityDESC_title'>Personalised Program</h4>
                <p className="CP_ProvidedFacility_DESC">Master your skills from where you are, with India's only personalised program</p>
              </div>

            </div>

            <div className="CP_ProvidedFacility_ListBox">
              <div className="Cp_ProvidedFacilityIConContainer">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Quick+Doubt+Support.webp" alt="FaciltyICON" className='CP_ProvidedFacility__ICON' />
              </div>
              <div className="CP_ProvidedFacility_DescBox">
                <h4 className='CP_ProvidedFacilityDESC_title'>Quick Doubt Support</h4>
                <p className="CP_ProvidedFacility_DESC">Get your doubts cleared by coding experts and have a smooth learning</p>
              </div>

            </div>



            <div className="CP_ProvidedFacility_ListBox">
              <div className="Cp_ProvidedFacilityIConContainer">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_250+Coding+Questions.webp" alt="FaciltyICON" className='CP_ProvidedFacility__ICON' />
              </div>
              <div className="CP_ProvidedFacility_DescBox">
                <h4 className='CP_ProvidedFacilityDESC_title'>250+ Coding Questions</h4>
                <p className="CP_ProvidedFacility_DESC">Best way to master a language is by coding in the language</p>
              </div>

            </div>


            <div className="CP_ProvidedFacility_ListBox">
              <div className="Cp_ProvidedFacilityIConContainer">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Hours+of+Videos.webp" alt="FaciltyICON" className='CP_ProvidedFacility__ICON' />
              </div>
              <div className="CP_ProvidedFacility_DescBox">
                <h4 className='CP_ProvidedFacilityDESC_title'>50+ Hours of Videos</h4>
                <p className="CP_ProvidedFacility_DESC">Recorded video lectures by experts to help you understand the concepts easily</p>
              </div>

            </div>

          </div>

          <div className="CP_ProvidedFacility__MiddleContainer">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vector.svg" alt="MiddleImage" className='CP_providiedFacility__poster' />
          </div>

          <div className="CP_ProvidedFacility__RightContainer">

            <div className="CP_ProvidedFacility_ListBox CP_ProvidedFacility_RightListBox">
              <div className="Cp_ProvidedFacilityIConContainer">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Expert+Mentors.webp" alt="FaciltyICON" className='CP_ProvidedFacility__ICON' />
              </div>
              <div className="CP_ProvidedFacility_DescBox">
                <h4 className='CP_ProvidedFacilityDESC_title'>Expert Mentors</h4>
                <p className="CP_ProvidedFacility_DESC">Get career guidance, mentorship, time management strategies from industry experts</p>
              </div>

            </div>

            <div className="CP_ProvidedFacility_ListBox CP_ProvidedFacility_RightListBox">
              <div className="Cp_ProvidedFacilityIConContainer">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Get+certificate-01.webp" alt="FaciltyICON" className='CP_ProvidedFacility__ICON' />
              </div>
              <div className="CP_ProvidedFacility_DescBox">
                <h4 className='CP_ProvidedFacilityDESC_title'>Get Certified</h4>
                <p className="CP_ProvidedFacility_DESC">Get recognized on course completion with highly reputed PrepBytes certificates</p>
              </div>

            </div>


            <div className="CP_ProvidedFacility_ListBox CP_ProvidedFacility_RightListBox">
              <div className="Cp_ProvidedFacilityIConContainer">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_20+Live+Coding+Sessions.webp" alt="FaciltyICON" className='CP_ProvidedFacility__ICON' />
              </div>
              <div className="CP_ProvidedFacility_DescBox">
                <h4 className='CP_ProvidedFacilityDESC_title'>20+ Live Coding Sessions</h4>
                <p className="CP_ProvidedFacility_DESC">Code live and get mentorship with the top-rated coders of the country.</p>
              </div>

            </div>

            <div className="CP_ProvidedFacility_ListBox CP_ProvidedFacility_RightListBox">
              <div className="Cp_ProvidedFacilityIConContainer">
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Tech-Apti+MCQ+Tests.webp" alt="FaciltyICON" className='CP_ProvidedFacility__ICON' />
              </div>
              <div className="CP_ProvidedFacility_DescBox">
                <h4 className='CP_ProvidedFacilityDESC_title'>40+ Coding quizes</h4>
                <p className="CP_ProvidedFacility_DESC">Small quizzes after every topic to give you a quick check on your understandings</p>
              </div>

            </div>





          </div>

        </div>

        <div className="CP_StatesContainer">

          <div className="CP_statesBOX">
            <p className="StatesBox_title">10K+</p>
            <p className="statesbox_desc">Students Enrolled</p>
          </div>

          <div className="CP_statesBOX">
            <p className="StatesBox_title">1000K+</p>
            <p className="statesbox_desc">Doubts Solved</p>
          </div>

          <div className="CP_statesBOX">
            <p className="StatesBox_title">2k+ hrs</p>
            <p className="statesbox_desc">Mentor Interaction</p>
          </div>

        </div>

        <div className="CP_codingContests_container">
          <h2 className='CodingContests_container_heading'>Crack Reputed Coding Contests</h2>
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/MCP-company-new.webp" alt="Poster" className='CP_CodingContests_Poster' />
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


        <div className="CP_bottomCard_Container">
          <h3 className="CP_bottomContainer_heading">By The End Of This Course, You Will Be Able To</h3>

          <div className="CP_bottomCard_Box">

            <div className="CP__Bottom_card">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/1.webp" alt="Number" className='CP_bottomCard_imges'/>
            <p className="CP_bottomCard_DESC">4 star and above in CodeChef</p>
            </div>

            <div className="CP__Bottom_card">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/2.webp" alt="Number" className='CP_bottomCard_imges'/>
            <p className="CP_bottomCard_DESC">Crack contests like Facebook Hacker Cup, Google Kickstart, ACM ICPC</p>
            </div>

            <div className="CP__Bottom_card">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/3.webp" alt="Number" className='CP_bottomCard_imges'/>
            <p className="CP_bottomCard_DESC">Candidate master and above in CodeForces</p>
            </div>

            <div className="CP__Bottom_card">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/4.webp" alt="Number" className='CP_bottomCard_imges'/>
            <p className="CP_bottomCard_DESC">Specialist and above in SPOJ.com</p>
            </div>


          </div>
        </div>

        <Footer></Footer>
      </section>
      <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
    </>
  )
}

export default CompetitiveProgrammingComponent
