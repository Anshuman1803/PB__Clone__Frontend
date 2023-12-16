import React, { useEffect, useState } from 'react'
import PaymentPopup from '../PaymentInegration/PaymentPopup';
import { addTempCourse } from '../ReduxSlice/UserReduxSlice'
import FSPbottomPoster from "../Assets/FSP_Bottom.webp"
import Footer from './Footer'
import { useDispatch, useSelector } from 'react-redux'
function FullStackProgramComponent() {
    const { userEmail } = useSelector((state) => state.AppUser.UserDetails.User[0]);
  const dispatch = useDispatch();
  const [IsPaymentClick, setIsPaymentClick] = useState(false);
  const [tempData, setTempData] = useState({
    "testID": 3,
    "testImg": 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp',
    "testTitle": "Full Stack Web Development",
    "testCategory": 'Web-Development',
    "testPrice": 30000,
    "testDate": "1st May",
    "userEmail" : userEmail
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const canclePayment = () => {
    setIsPaymentClick(false)
  }

  const handleBuyNow = (e) => {
    e.preventDefault();
    dispatch(addTempCourse(tempData))
    setIsPaymentClick(true)
  }

  const handleChangeBatchDate = (e) => {
    let batchDate = `${e.target.value} May`
    setTempData({ ...tempData, "testDate": batchDate });
  }
  return (

    <>
      <section className='FullStackProgramCompo__mainContainer'>

        <div className="FSP__TopContainer">

          <div className="FSP__topContainer_LeftBox">

            <p className='partnerwithText'>Partner with</p>
            <div className="FSP_partnerBox">
              <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/development-programs/header-logo.svg" alt="CompanyPartner" className='FSP_PartnerCompany' />
            </div>
            <h1 className='FSP_TopContainer__mainHeading'>Learn Full Stack Web Development & Build Real World Projects using React & Node</h1>
            <h3 className='FSP_TopContainer__SecondaryHeading'>Full Stack Web Development Certification Course - Accredited by Nasscom, approved by the Government India.</h3>
            <p className='downloadSyllabusButton'>Download Syllabus</p>

          </div>

          <div className="FSP__topContainer_RightBox">

            <div className="FSP_rightContainer_Cards">
              <p className="FSP_cards_firstItem">Next Batch starts: 1st May, 2023</p>
              <p className="FSP_cards_secondItem">Limited seats available</p>
            </div>


            <div className="FSP_rightContainer_Cards">
              <p className="FSP_cards_firstItem">Program Duration: 4 - 5 months</p>
              <p className="FSP_cards_secondItem">15-20 hours/week</p>
            </div>


            <div className="FSP_rightContainer_Cards">
              <p className="FSP_cards_firstItem">Learning htmlFormat</p>
              <p className="FSP_cards_secondItem">Recorded Lectures + Online Live Classes</p>
            </div>

          </div>
        </div>

        <div className="FSP__BatchSelectionContainer">
          <p className="FSP_batchSelectioNText">SELECT BATCH</p>

          <div className="FSP_Batch_cardMainContainer">


            <div className="FSP_BatchDate__cardContainer">

              <div className="FSP_BatchDate_Card">
                <input type="radio" value={"1st"} name='batchDate' id='batchFirst' defaultChecked onClick={handleChangeBatchDate} />
                <label className="FSP_batchInfo" htmlFor="batchFirst">
                  <span style={{ "color": "#707070", "fontWeight": "500", "fontSize": "17px" }}>1st May</span>
                  <span style={{ "color": "#f78077", "fontWeight": "300", "fontSize": "11px" }}>Entrolmetn started</span>
                </label>

              </div>

              <div className="FSP_BatchDate_Card">
                <input type="radio" value={"15th"} name='batchDate' id='batchsecond' onClick={handleChangeBatchDate} />
                <label className="FSP_batchInfo" htmlFor="batchsecond">
                  <span style={{ "color": "#707070", "fontWeight": "500", "fontSize": "17px" }}>15th May</span>
                  <span style={{ "color": "#f78077", "fontWeight": "300", "fontSize": "11px" }}>Entrolmetn started</span>
                </label>

              </div>


            </div>

            <div className="FSP__PriceCheckoutContainer">
              <p className="FSP_PriceTag">₹ 30000</p>
              <button className='EnrolButton fsp_Enrol' onClick={(e) => handleBuyNow(e)} >Enrol Now</button>
            </div>

          </div>


        </div>

        <div className="FSP__Tool__Container">

          <div className="FSP__TOOlDetailsBox">
            <h3 className="FSP_TOO_Heading">Languages & Tools you will learn</h3>
            <p className="FSP_Tool_DESC">Start learning web development from basics of HTML, CSS, Javascript.Master latest technologies like React, Node, Express. Get hands on Github, MongoDB, Google Analytics, Facebook Analytics</p>
          </div>
          <div className="FSP_toolPosterContainer">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/tools1.png" alt=" ToolsPoster" className='FSP_ToolPoster' />
          </div>

          {IsPaymentClick && <PaymentPopup propFun={canclePayment} />}
        </div>


        <div className="FSP_Mentor_cardContainer">

          <div className="FSP_mentorCard">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/Mamta.webp" alt="MentorPoster" className='FSP_mentorCard_Profile' />
            <p className="FSP_Mentorcard_mentorName">Mamta Kumari, Co-Founder PrepBytes</p>
            <p className="FSP_MentorCard__metnorEXP">Mamta has over 5 years of experience working in tech giants like Amazon and Samsung and has mentored more than 2000 students to help them enhance their coding skills. She is all set to guide you in your journey of web development</p>
          </div>

          <div className="FSP_mentorCard">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_rahul.webp" alt="MentorPoster" className='FSP_mentorCard_Profile' />
            <p className="FSP_Mentorcard_mentorName">Rahul Dutta, Software Developer OLA</p>
            <p className="FSP_MentorCard__metnorEXP">Rahul has work experience of over 3 years and is currently working as Software Developer in OLA. Rahul has mentored many students in past and is excited about sharing his knowledge here.</p>
          </div>

          <div className="FSP_mentorCard">
            <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/full-stack-course/mentor_harshita.webp" alt="MentorPoster" className='FSP_mentorCard_Profile' />
            <p className="FSP_Mentorcard_mentorName">Harshita Sharma, Product Engineer AskSid.ai</p>
            <p className="FSP_MentorCard__metnorEXP">Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.</p>
          </div>




        </div>


        <div className="FSP_Bottom_PosterContainer">
          <img src={FSPbottomPoster} alt="Poster" className='FSP_BottomPoster' />
        </div>
        <Footer></Footer>
      </section>

      <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
    </>
  )
}

export default FullStackProgramComponent
