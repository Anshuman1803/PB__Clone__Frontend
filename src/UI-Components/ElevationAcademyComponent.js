import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import poster from "../Assets/FormPopupImgae.svg"
import axios from 'axios'
import Loader from './Loader';
import PaymentPopup from '../PaymentInegration/PaymentPopup';
import { useDispatch, useSelector } from 'react-redux'
import { addTempCourse } from '../ReduxSlice/UserReduxSlice'

function ElevationAcademyComponent() {
  const [PopupFormVisible, setPopupForm] = useState(false);
  const [ShowSyllabus, setShowSyllabus] = useState(false);
  const [Syllabus, setSyllabus] = useState([])
  const [Mentors, setMentors] = useState([])
  const [isLoading, setIsloading] = useState(false)
  useEffect(() => {
    setIsloading(true)
    axios.get("https://pb-clone.onrender.com/getSyllabus").then((response) => {
      setSyllabus(response.data)
      setIsloading(false)
    });
    axios.get("https://pb-clone.onrender.com/mentors").then((response) => {
      setMentors(response.data)
      setIsloading(false)
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

  const placementCompanyImages = [
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Paytm_Logo.webp"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/info_edge_Logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/SAP_Logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intuit_Logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Microsoft_Logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Thoughtfocus_Logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/99_Games_Logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Samsung_Logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Amazon_Logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Buy_Hatke_logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intel_logo.svg"
    },
    {
      "SRC": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Teksystems_logo.svg"
    },
  ]
  return (
    <>
      {
        isLoading ? <Loader /> : <>
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

            <div className="EA_newBatchInformatioNContainer">
              <div className="EA_newBatchInformation_details">
                <p className="EA_newBatchInformation_mainheading">
                Upcoming Elevation Academy Batch - Full Stack Web Development Career - May 2023 now OPEN
                </p>
                <button className='applyNowButton' onClick={handleShowForm}>Apply Now</button>
              </div>
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/batches-back.webp" alt="Poster" className='EA_newBatchPoster' />

            </div>

            <div className="EA_PlacementInformationContainer">
              <h2 className="EA_PlacementInformationContainer__MainHeading">Where our Students are placed</h2>
              <h3 className="EA_PlacementInformationContainer__SecondaryHeading">"You guarantee hard work, We guarantee placements"</h3>
              <div className="EA_placementCompanyPostersContainer">
                {
                  placementCompanyImages.map((images, index) => {
                    return <div className='EA_PlacementCompany_Cards' key={index + 7781} >
                      <img src={images.SRC} alt="PlacmentCompany" className='EA_PlacementCompnayImages' />
                    </div>
                  })
                }



              </div>

            </div>

            <div className="HomePage__PBMentors_CardContainer">
              <div className="PBMentors__TopCOntainer">
                <h2 className='PBMentors__TopCOntainer_Heading'>Our Mentors</h2>
                <p className='PBMentors__TopCOntainer_SecondaryHeading'>Learn directly from experienced software developers and master full stack.</p>
              </div>

              <div className="PBMentors__BottomCOntainer">

                {
                  Mentors.filter((mentor, index) => index <=2).map((mentor)=>{
                    return <div className="PB_mentorBottom_Cards" key={mentor._id}>
                    <div className="MentorProfileBox">
                      <img src={mentor.mentorCoverPoster} alt="COver" className='mentorProfile_coverImg' />
                      <img src={mentor.mentorPfoile} alt="Profile" className='mentorProfile_ProfileImage' />
                      <p className="mentorProfile_mentorName">{mentor.mentorName}</p>
                      <p className="mentorProfile_MentorPost">{mentor.mentorPost}</p>
                    </div>
                    <p className="PB_mentorDesc">{mentor.mentorDesc}</p>
                    <img src={mentor.mentorCompanyPoster} alt="CompanyLOGO" className='PB_mentorCompany' />
                  </div>
                  })
                }
              </div>
            </div>


          </section>
          <Footer></Footer>
          {PopupFormVisible && <PopupForm closeFun={closeFun} />}
          <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
        </>
      }
    </>
  )
}

export default ElevationAcademyComponent


function PopupForm({ closeFun }) {

  const [IstermChecked, setTermChecked] = useState(false)
  const [Message, setMessage] = useState({ "msgVal": "" });
  const [IsUserLoading, setIsUserLoading] = useState(false);
  const [ShowPaymentPopup, setShowPaymentPopup] = useState(false);
  const dispatch = useDispatch();
  const { User } = useSelector((state) => state.AppUser.UserDetails);
  const [userDetails, setUserDetails] = useState({
    "userName": "",
    "userEmail": "",
    "userPhone": "",
    "userDegree": "",
    "userBranch": "",
    "IsProfessional": "",
  });
  const tempData = {
    "testID": 10,
    "testImg": "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp",
    "testTitle": "Elevation Academy",
    "testCategory": "Full-Stack-Web Development",
    "testPrice": 70000,
    "userEmail": User.length > 0 ? User[0].userEmail : ""
  }

  const canclePayment = (e) => {
    setShowPaymentPopup(false)
  }

  const handleOnChangeInput = (e) => {
    setMessage({ "msgVal": "" })
    setUserDetails({
      ...userDetails, [e.target.name]: e.target.value
    });
  }

  const handlecheckedMark = (e) => {
    setTermChecked(!IstermChecked);
    setMessage({ "msgVal": "" })
  }

  const handleyesnoClick = (e) => {
    setMessage({ "msgVal": "" })
    if (e.target.innerHTML === 'Yes') {
      setUserDetails({
        ...userDetails, "IsProfessional": true
      });
      e.target.classList.add("activeProfessional");
      e.target.nextSibling.classList.remove("activeProfessional")
    } else {
      setUserDetails({
        ...userDetails, "IsProfessional": false
      });
      e.target.classList.add("activeProfessional");
      e.target.previousSibling.classList.remove("activeProfessional")
    }
  }

  const handleSubmitClick = (e) => {
    e.preventDefault();

    if (userDetails.userName.length === 0 || userDetails.userEmail.length === 0 || userDetails.userPhone.length === 0 || userDetails.userDegree.length === 0 || userDetails.userBranch.length === 0) {
      setMessage({ "msgVal": "One or more required fields is missing or invalid" });
    } else if (userDetails.IsProfessional.length === 0) {
      setMessage({ "msgVal": "Please select 'Are you a Working Professional?" });
    } else if (!IstermChecked) {
      setMessage({ "msgVal": "Please agree to the terms and conditions" });
    } else {
      setIsUserLoading(true)
      axios.post("https://pb-clone.onrender.com/EA_registration", userDetails).then((response) => {
        setIsUserLoading(false);

        if (response.data.resMsg === 'Registred Successfully') {
          setShowPaymentPopup(true);
          dispatch(addTempCourse(tempData))
        }
        setMessage({ "msgVal": response.data.resMsg });
      });
    }
  }
  return (
    <div className='popupForm_mainContainer'>
      <div className="FormContainer">
        <img src={poster} alt="" className='PopupFormPoster' />
        <div className="Popup__formBox">

          <i className="fa-solid fa-xmark closePopupBtn_ICON" onClick={closeFun}></i>
          <h2 className='Popup_formBox_heading'>Take a step towards your dream job</h2>


          <div className="popup__formItemBox">
            <label htmlFor="nameBox" className='Popup_formitem__label' >Name *</label>
            <input type="text" className='Poup_formItem' id='nameBox' onChange={handleOnChangeInput} name="userName" />
          </div>

          <div className="popup__formItemBox">
            <label htmlFor="emailBox" className='Popup_formitem__label' >Email *</label>
            <input type="text" className='Poup_formItem' id='emailBox' onChange={handleOnChangeInput} name="userEmail" />
          </div>

          <div className="popup__formItemBox">
            <label htmlFor="phoneBox" className='Popup_formitem__label' >Phone *</label>
            <input type="text" className='Poup_formItem' id='phoneBox' onChange={handleOnChangeInput} name="userPhone" />
          </div>

          <div className="popup__formItemBox">
            <label htmlFor="degreeBox" className='Popup_formitem__label'>Highest Degree *</label>
            <select name="userDegree" id="degreeBox" className='Poup_formItem' onChange={handleOnChangeInput}>
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
            <select name="userBranch" id="batchBox" className='Poup_formItem' onChange={handleOnChangeInput}>
              <option className="optionValue" value=""></option>
              <option className="optionValue" value="CSE / IT">CSE / IT</option>
              <option className="optionValue" value="Electrical/Electronics">Electrical/Electronics</option>
              <option className="optionValue" value="Others">Others</option>
            </select>
          </div>

          <div className="popup__formItemBox">
            <span className='Popup_formitem__label'>Are you a Working Professional? *</span>
            <div className="formPopup__ProfessioanlButtonContainer">
              <button className='optionButtons' onClick={handleyesnoClick}>Yes</button>
              <button className='optionButtons' onClick={handleyesnoClick}>No</button>
            </div>
          </div>

          <div className="PopupForm_term_ConditionBox" style={{ "fontSize": "16px" }}>
            <input type="checkbox" name='termCheckbox' onClick={handlecheckedMark} /> I agree to the <span style={{ "color": "#4b8ce8" }}>terms and conditions.</span>
          </div>

          <button className='submitButton' onClick={handleSubmitClick}>Submit</button>
          {
            Message.msgVal && <p className='formResponseMsg'>{Message.msgVal}</p>
          }
          {
            IsUserLoading && <p className='formResponseMsg'>Registering...</p>
          }
        </div>

      </div>
      {ShowPaymentPopup && <PaymentPopup propFun={canclePayment} />}
    </div>
  )
}



