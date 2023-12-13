import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import poster from "../Assets/FormPopupImgae.svg"
import axios from 'axios'
function ElevationAcademyComponent() {
  const [PopupFormVisible, setPopupForm] = useState(false);
  const [ShowSyllabus, setShowSyllabus] = useState(false);
  const [Syllabus, setSyllabus] = useState([])
  useEffect(() => {
    axios.get("https://pb-clone.onrender.com/project/getSyllabus").then((response) => {
      setSyllabus(response.data)
    })
    window.scrollTo(0, 0);
  }, []);


  const handleShowSyllabus = (e) => {
    e.preventDefault();
    e.target.classList.toggle("fa-circle-minus")
    e.target.classList.toggle("fa-circle-plus")
    e.target.parentElement.nextSibling.classList.toggle("EA_ProgramSyllabus_ActiveContentBox")
    setShowSyllabus(!ShowSyllabus)

  }
  const handleShowForm = (e) => {
    e.preventDefault();
    setPopupForm(true)
  }
  const closeFun = (e) => {
    setPopupForm(false)
  }
  return (
    <>
      <section className='ElevationAcademy__MainContainer'>

        <div className="EA_MainContainer__TopMostContainer">

          <div className="EA_TopMostContainer__DetailsBox">
            <h2 className='EA_detailsBox_heading'>PrepBytes Elevation Academy - Full Stack Web Development Career</h2>

            <p className='EA_DetailsBox_Desc'>Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</p>
            <p className='EA_DetailsBox_ExtraDesc'> <i className="fa-solid fa-arrow-right rightArrowICON"></i>Complete Live Class from experts</p>
            <p className='EA_DetailsBox_ExtraDesc'><i className="fa-solid fa-arrow-right rightArrowICON"></i> Be the best Full stack developer</p>
            <p className='EA_DetailsBox_ExtraDesc'> <i className="fa-solid fa-arrow-right rightArrowICON"></i>Job Guarantee</p>

            <div className="EA_TopMost_container_buttoncontainer">
              <button className="EA_AppyNowButton" onClick={handleShowForm}>Apply Now</button>
              <button className="EA_AppyNowButton" onClick={handleShowForm}>Get a call back</button>
            </div>
          </div>
          <div className="EA_topPosterContainer">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp" alt="Poster" className='EA_TopMostContainer__Poster' />
          </div>

        </div>

        <div className="EA_BatchInformationContainer">

          <div className="EA_batchFor_Container">
            <h3 className='EA_BatchYear'>For 2023, 2022 & 2021 graduates</h3>
            <p className="EA_Batch_startingDateLabel">Batch Starting: 1st May 2023</p>
          </div>

          <div className="EA_Batch__SessionInforContainer">

            <div className="EA_Batch_SessionBox">
              <div className='Ea_batch_SessionIconContainer'>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/free_class.webp" alt="ICON" className='EA_Batch_sessionICon' />
              </div>
              <h3 className='Ea_SessionBoxTitle'>Free Webinar</h3>
              <p className="Ea_session_date">17th April</p>
            </div>

            <div className="EA_Batch_SessionBox">
              <div className='Ea_batch_SessionIconContainer'>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Start+Assesment.webp" alt="ICON" className='EA_Batch_sessionICon' />
              </div>
              <h3 className='Ea_SessionBoxTitle'>1:1 Counselling session</h3>
              <p className="Ea_session_date">From 18th April</p>
            </div>

            <div className="EA_Batch_SessionBox">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Batch+Starts.webp" alt="ICON" className='EA_Batch_sessionICon' />
              <h3 className='Ea_SessionBoxTitle'>Batch Start</h3>
              <p className="Ea_session_date">01 May'23, Mon-Fri (7-10PM)</p>
            </div>

          </div>

        </div>

        <div className="EA__Job_PathMainContainer">
          <h2 className="EA_jobPath_heading">How will you reach to your dream Job?</h2>

          <div className="EA_jobpathContainer">

            <div className="EA_JobPath_List_Container">

              <div className="EA_JobList_Box">
                <span className="EA_jobList_number">1</span>
                Application & Shortlisting
              </div>
              <div className="EA_JobList_Box">
                <span className="EA_jobList_number">2</span>
                Attend Free Webinar
              </div>
              <div className="EA_JobList_Box">
                <span className="EA_jobList_number">3</span>
                Batch Commencement
              </div>
              <div className="EA_JobList_Box">
                <span className="EA_jobList_number">4</span>
                7 Months Program
              </div>
              <div className="EA_JobList_Box">
                <span className="EA_jobList_number">5</span>
                Guaranteed Placement

              </div>

            </div>

            <div className="EA_JobPath_List_Desc_Container">

              <div className="EA_jobPath_descBox">
                <p className="EA_jobPath_descBox_text">Apply, fill the form & wait till we review your application. You will be selected based on the eligibility criteria (2023, 2022 & 2021 passouts)</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
              </div>


              <div className="EA_jobPath_descBox">
                <p className="EA_jobPath_descBox_text">Go through the free classes and learn the important concepts while understanding how the program unfolds.</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
              </div>


              <div className="EA_jobPath_descBox">
                <p className="EA_jobPath_descBox_text">Embark on your journey of success once you receive the offer letter for successful enrolment.</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Complete%2BEnrollment%2B.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
              </div>


              <div className="EA_jobPath_descBox">
                <p className="EA_jobPath_descBox_text">You have now signed up for a learning-filled journey of 7 months that ends with you being placed in your dream company.</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/4%2BMonths%2BPrograms.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
              </div>


              <div className="EA_jobPath_descBox">
                <p className="EA_jobPath_descBox_text">The program comes with interview opportunities and a placement guarantee of minimum 5 LPA.</p>
                <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview%2BOpportunities%2B.webp" alt="icon" className='Ea_JobPath_descBox_poster' />
              </div>


            </div>


          </div>



        </div>

        <h2 className='EA__CardContaienr__heading'>Why PrepBytes Elevation Academy?</h2>

        <div className="EA_CardContainer">

          <div className="EA__Card">
            <div className='EA_cardICon_Container'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Live+Learning.webp" alt="Poster" className='EA_CardIcon' />
            </div>
            <p className='EA_cardTitle'>Live Learning</p>
            <p className="EA_CardDesc">Master Mern Stack in Live Classes taken by Experts</p>
          </div>

          <div className="EA__Card">
            <div className='EA_cardICon_Container'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/1+week+of+Free+Classes.webp" alt="Poster" className='EA_CardIcon' />
            </div>
            <p className='EA_cardTitle'>Learn with Industry Experts</p>
            <p className="EA_CardDesc">Learn with leading tech mentors and gain access to real-time web development experience.</p>
          </div>

          <div className="EA__Card">
            <div className='EA_cardICon_Container'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Learn+by+Doing.webp" alt="Poster" className='EA_CardIcon' />
            </div>
            <p className='EA_cardTitle'>Learn by Doing</p>
            <p className="EA_CardDesc">Gain in depth experience by building real world projects</p>
          </div>

          <div className="EA__Card">
            <div className='EA_cardICon_Container'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Resume+Building.webp" alt="Poster" className='EA_CardIcon' />
            </div>
            <p className='EA_cardTitle'>Resume Building</p>
            <p className="EA_CardDesc">Get a resume that companies would shortlist</p>
          </div>

          <div className="EA__Card">
            <div className='EA_cardICon_Container'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Mock+Interviews.webp" alt="Poster" className='EA_CardIcon' />
            </div>
            <p className='EA_cardTitle'>Mock Interviews</p>
            <p className="EA_CardDesc">Interview practice with industry veterans with real-time feedbacks</p>
          </div>

          <div className="EA__Card">
            <div className='EA_cardICon_Container'>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview+Opportunities.webp" alt="Poster" className='EA_CardIcon' />
            </div>
            <p className='EA_cardTitle'>Interview Opportunities</p>
            <p className="EA_CardDesc">Get developer interview opportunities after course completion</p>
          </div>



        </div>

        <div className="EA_ProgramSyllabus_MainContainer">

          <h2 className="EA_ProgramSyllabus__Mainheading">Program Syllabus</h2>
          <h2 className="EA_ProgramSyllabus__Secondaryheading">Learn from the best and be prepared to crack full stack developer jobs</h2>

          {
            Syllabus?.map((ele) => {
              return <div className="EA_programSyllabus_Container" key={ele.syllabusID}>
                <h2 className="EA_ProgramSyllabus_Container_heading">{ele.syllabusDuration}</h2>

                <div className="EA_programSyllabus_box">
                  <p className="EA_programSyllabus_numbering"> <span>{ele.syllabusID}</span></p>
                  <p className="EA_programSyllabus_topic">{ele.syllabusTitle}</p>
                  <i className={`fa-solid fa-circle-plus EA_ProgramSyllabus_plusICon`} onClick={handleShowSyllabus}></i>
                </div>
                <div className="EA_ProgramSyllabus_ContentBox">
                  <h3 className="EA_programSyllabus_content_heading">{ele.syllabusContentTitle}</h3>
                  {
                    ele?.syllabusContent.map((content, index) => <p className="EA_ProgramSyllabus_Content" key={index + ele.syllabusID}>{content}</p>)
                  }
                </div>

              </div>
            })
          }
        </div>

      </section>
      <Footer></Footer>
      {PopupFormVisible && <PopupForm closeFun={closeFun} />}
      <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
    </>
  )
}

export default ElevationAcademyComponent



function PopupForm({ closeFun }) {
  return (
    <div className='popupForm_mainContainer'>
      <div className="FormContainer">
        <img src={poster} alt="" className='PopupFormPoster' />
        <div className="Popup__formBox">

          <i className="fa-solid fa-xmark closePopupBtn_ICON" onClick={closeFun}></i>
          <h2 className='Popup_formBox_heading'>Take a step towards your dream job</h2>

          <div className="popup__formItemBox">
            <label htmlFor="degreeBox" className='Popup_formitem__label'>Highest Degree *</label>
            <select name="degreeBox" id="degreeBox" className='Poup_formItem'>
              <option className="optionValue" value=""></option>
              <option className="optionValue" value="B.Tech / BE">B.Tech / BE</option>
              <option className="optionValue" value="BCA">BCA</option>
              <option className="optionValue" value="BSc">BSc</option>
              <option className="optionValue" value="BCom">BCom</option>
              <option className="optionValue" value="BA">BA</option
              ><option className="optionValue" value="B.Pharma">B.Pharma</option>
              <option className="optionValue" value="B.Arch">B.Arch</option>
              <option className="optionValue" value="BBA">BBA</option>
              <option className="optionValue" value="Diploma">Diploma</option>
              <option className="optionValue" value="M.Tech">M.Tech</option>
              <option className="optionValue" value="MCA">MCA</option>
              <option className="optionValue" value="MSc">MSc</option>
              <option className="optionValue" value="MCom">MCom</option>
              <option className="optionValue" value="MA">MA</option>
              <option className="optionValue" value="MBA">MBA</option>
              <option className="optionValue" value="Others">Others</option>
            </select>
          </div>

          <div className="popup__formItemBox">
            <label htmlFor="batchBox" className='Popup_formitem__label'>Branch</label>
            <select name="batchBox" id="batchBox" className='Poup_formItem'>
              <option className="optionValue" value=""></option>
              <option className="optionValue" value="CSE / IT">CSE / IT</option>
              <option className="optionValue" value="Electrical/Electronics">Electrical/Electronics</option>
              <option className="optionValue" value="Others">Others</option>
            </select>
          </div>

          <div className="popup__formItemBox">
            <span className='Popup_formitem__label'>Are you a Working Professional? *</span>
            <div className="formPopup__ProfessioanlButtonContainer">
              <p className='optionButtons'>Yes</p>
              <p className='optionButtons'>No</p>
            </div>
          </div>

          <div className="PopupForm_term_ConditionBox" style={{ "fontSize": "16px" }}>
            <input type="checkbox" name='termCheckbox' /> I agree to the <span style={{ "color": "#4b8ce8" }}>terms and conditions.</span>
          </div>

          <button className='submitButton'>Submit</button>
        </div>

      </div>

    </div>
  )
}