import React, { useEffect, useState } from 'react'
import PaymentPopup from '../PaymentInegration/PaymentPopup';
import { useDispatch } from 'react-redux'
import { addTempCourse } from '../ReduxSlice/UserReduxSlice'
import Footer from './Footer'
function FullStackProgramComponent() {
  const dispatch = useDispatch();
  const [IsPaymentClick, setIsPaymentClick] = useState(false);
  const [tempData, setTempData] = useState({
    "testID": 3,
    "testImg": 'https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/master_competetive_pgm.webp',
    "testName": "Full Stack Web Development",
    "testCategory": 'Web-Development',
    "testPrice": 30000,
    "testDate": "1st May"
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
            <a href="www.google.com" className='downloadSyllabusButton'>Download Syllabus</a>

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


          {IsPaymentClick && <PaymentPopup propFun={canclePayment} />}
        </div>

        <Footer></Footer>
      </section>

      <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
    </>
  )
}

export default FullStackProgramComponent
