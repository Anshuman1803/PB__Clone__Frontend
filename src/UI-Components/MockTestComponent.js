import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PaymentPopup from '../PaymentInegration/PaymentPopup';
import { useDispatch } from 'react-redux'
import { addTempCourse } from '../ReduxSlice/UserReduxSlice'
function MockTestComponent() {
  const [TestData, setTestData] = useState([]);
  const [IsPaymentClick, setIsPaymentClick] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://localhost:5000/mocktest").then((response) => {
      setTestData(response.data);
    });
  }, []);

  const canclePayment = () => {
    setIsPaymentClick(false)
  }
  const handleBuyNow = (e, testData) => {
      e.preventDefault();
      dispatch(addTempCourse(testData));
      setIsPaymentClick(true)
  }
  return (
    <>
      <section className='MockTestComponent__MainContainer'>

        <div className="MockComponent__header">
          <h2 className='MockComponent__header_Text'>Mock Tests</h2>
          <p className='MockComponent__header_desc'>Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.</p>
        </div>

        <div className="MockTest__CardContainer">
          <h1 className='TestHeading'>Aptitude-Tests</h1>

          {
            TestData?.filter((data) => data.testCategory === "Aptitude").map((testData) => {
              return <div className='MockText_TopicCard' key={testData._id}>

                <img src={testData.testImg} alt="TestTopicIcon" />

                <p className='Cardtest_topicName'>{testData.testName}</p>
                <p className='Cardtest__Price'>₹{testData.testPrice}</p>

                <button className='TestNowButton' onClick={(e) => handleBuyNow(e, testData)}>Buy Now</button>
              </div>
            })
          }
        </div>

        <div className="MockTest__CardContainer">
          <h1 className='TestHeading'>Computer Networks</h1>

          {
            TestData?.filter((data) => data.testCategory === "ComputerNetworks").map((testData) => {
              return <div className='MockText_TopicCard' key={testData._id}>

                <img src={testData.testImg} alt="TestTopicIcon" className='TestTopicIcon' />

                <p className='Cardtest_topicName'>{testData.testName}</p>
                <p className='Cardtest__Price'>₹{testData.testPrice}</p>

                <button className='TestNowButton' onClick={(e) => handleBuyNow(e, testData)}>Buy Now</button>
              </div>
            })
          }
        </div>

        <div className="MockTest__CardContainer">
          <h1 className='TestHeading'>Data Structures</h1>

          {
            TestData?.filter((data) => data.testCategory === "DataStructures").map((testData) => {
              return <div className='MockText_TopicCard' key={testData._id}>

                <img src={testData.testImg} alt="TestTopicIcon" className='TestTopicIcon' />

                <p className='Cardtest_topicName'>{testData.testName}</p>
                <p className='Cardtest__Price'>₹{testData.testPrice}</p>

                <button className='TestNowButton' onClick={(e) => handleBuyNow(e, testData)}>Buy Now</button>
              </div>
            })
          }
        </div>
        {IsPaymentClick && <PaymentPopup propFun={canclePayment} />}

      </section>
      <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
    </>
  )
}

export default MockTestComponent
