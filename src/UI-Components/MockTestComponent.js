import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import axios from 'axios'
import Loader from './Loader';
import PaymentPopup from '../PaymentInegration/PaymentPopup';
import { useDispatch } from 'react-redux'
import { addTempCourse } from '../ReduxSlice/UserReduxSlice'
function MockTestComponent() {
  const [isLoading, setIsloading] = useState(false)
  const [TestData, setTestData] = useState([]);
  const [IsPaymentClick, setIsPaymentClick] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    setIsloading(true)
    axios.get("https://pb-clone.onrender.com/mocktest").then((response) => {
      setTestData(response.data);
      window.scrollTo(0, 0);
      setIsloading(false)
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
      {
        isLoading ? <Loader /> : <>
          <section className='MockTestComponent__MainContainer'>

            <div className="MockComponent__header">
              <h2 className='MockComponent__header_Text'>Mock Tests</h2>
              <p className='MockComponent__header_desc'>Technical and Aptitude Test is a very important process of most of the placement tests. Crack your next placement with series of PrepBytes practice and mock tests. Practice subject-wise and company-wise tests. Take real-time mock tests with other students and test your preparation.</p>
            </div>

            <h2 className='MockComponent__mainHeading'>Featured Mock Tests</h2>

            <div className="MockTest__CardContainer MockTest__PastCardContainer">
              <h1 className='TestHeading'>Past Mock Tests</h1>

              {
                TestData?.filter((data) => data.testCategory === "FeaturedMock").map((testData) => {
                  return <div className='MockText_TopicCard MockTest_PastCard' key={testData._id}>

                    <div className="PastCard__iconContainer">
                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi42MDEiIGhlaWdodD0iMjYuNjAxIiB2aWV3Qm94PSIwIDAgMjYuNjAxIDI2LjYwMSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzM5NjlhZDtzdHJva2U6IzM5NjlhZDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIwLjUiIGN5PSIwLjUiIHI9IjAuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIgNikiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTIxLjg1MiwzLjc0OWExMi44LDEyLjgsMCwwLDAtMTguMSwxOC4xLDEyLjgwNSwxMi44MDUsMCwwLDAsMTUuNjc1LDEuOSwxLDEsMCwwLDAtMS4wMzYtMS43MTEsMTAuOSwxMC45LDAsMSwxLDMuMzgyLTMuMjUxLDEsMSwwLDAsMCwxLjY2MywxLjExMiwxMi43NjksMTIuNzY5LDAsMCwwLTEuNTgtMTYuMTU3WiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjM3LDE4N2ExLDEsMCwwLDAtMSwxdjguOWExLDEsMCwwLDAsMiwwVjE4OEExLDEsMCwwLDAsMjM3LDE4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjQuMiAtMTc3LjY1KSIvPjwvZz48L3N2Zz4=" alt="ICON" />

                      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDE4IDIwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojNWY4ZGM0O308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIj48cGF0aCBjbGFzcz0iYSIgZD0iTTMxOS45ODYsMTguNzA4QTIuNjYsMi42NiwwLDEsMSwzMTcuMzI3LDE2LDIuNjg0LDIuNjg0LDAsMCwxLDMxOS45ODYsMTguNzA4Wm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMDIuNiAtMTUuMzc1KSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMzAxLjk0MSw2LjY2N2EzLjMwNywzLjMwNywwLDAsMS0zLjI3My0zLjMzMywzLjI3MywzLjI3MywwLDEsMSw2LjU0NSwwQTMuMzA3LDMuMzA3LDAsMCwxLDMwMS45NDEsNi42NjdabTAtNS40MTdhMi4wODQsMi4wODQsMCwxLDAsMi4wNDUsMi4wODMsMi4wNjcsMi4wNjcsMCwwLDAtMi4wNDUtMi4wODNabTAsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4Ny4yMTMpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0zMTkuOTg2LDM2MC4wNDFhMi42NiwyLjY2LDAsMSwxLTIuNjU5LTIuNzA4QTIuNjg0LDIuNjg0LDAsMCwxLDMxOS45ODYsMzYwLjA0MVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzAyLjYgLTM0My4zNzQpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0zMDEuOTQxLDM0OGEzLjMzNCwzLjMzNCwwLDEsMSwzLjI3My0zLjMzM0EzLjMwNywzLjMwNywwLDAsMSwzMDEuOTQxLDM0OFptMC01LjQxN2EyLjA4NCwyLjA4NCwwLDEsMCwyLjA0NSwyLjA4M0EyLjA2NywyLjA2NywwLDAsMCwzMDEuOTQxLDM0Mi41ODJabTAsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4Ny4yMTMgLTMyNy45OTkpIi8+PHBhdGggY2xhc3M9ImEiIGQ9Ik0yMS4zMTgsMTg5LjM3NmEyLjY2LDIuNjYsMCwxLDEtMi42NTktMi43MDhBMi42ODQsMi42ODQsMCwwLDEsMjEuMzE4LDE4OS4zNzZabTAsMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE1LjM4NiAtMTc5LjM3NikiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTMuMjczLDE3Ny4zMzVhMy4zMzQsMy4zMzQsMCwwLDEsMC02LjY2NywzLjMzNCwzLjMzNCwwLDAsMSwwLDYuNjY3Wm0wLTUuNDE3YTIuMDg0LDIuMDg0LDAsMCwwLDAsNC4xNjcsMi4wODQsMi4wODQsMCwwLDAsMC00LjE2N1ptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0xNjQuMDAxKSIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMTE1LjE2Nyw5Ni4yOTFhLjgxNC44MTQsMCwwLDEtLjcxMi0uNDIxLjg0My44NDMsMCwwLDEsLjMwNi0xLjEzN2w3LjU5Mi00LjQwOGEuODA5LjgwOSwwLDAsMSwxLjExNi4zMTIuODQzLjg0MywwLDAsMS0uMzA2LDEuMTM3bC03LjU5Miw0LjQwOEEuOC44LDAsMCwxLDExNS4xNjcsOTYuMjkxWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDkuOTYzIC04Ni42OSkiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTEyMi43OCwyNzIuMjk1YS44LjgsMCwwLDEtLjQtLjEwOWwtNy41OTItNC40MDhhLjg0My44NDMsMCwwLDEtLjMwNi0xLjEzNy44MDkuODA5LDAsMCwxLDEuMTE2LS4zMTJsNy41OTIsNC40MDhhLjg0My44NDMsMCwwLDEsLjMwNiwxLjEzN0EuODE2LjgxNiwwLDAsMSwxMjIuNzgsMjcyLjI5NVptMCwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA5Ljk4NSAtMjU1LjgxOSkiLz48L2c+PC9zdmc+" alt="ICON" />
                    </div>

                    <img src={testData.testImg} alt="TestICON" className='testPoster' />

                    <p className="PastCard__testTitle">
                      {testData.testTitle}
                    </p>

                    <div className="PastCard_testInfoBox">
                      <p className="PastCard_InfoText">
                        <span> {testData.testDate}</span>
                        <span>Date</span>
                      </p>
                      <p className="PastCard_InfoText">
                        <span>{testData.testParticipants}</span>
                        <span>Participants</span>
                      </p>
                      <p className="PastCard_InfoText">
                        <span> {testData.testDurition} min</span>
                        <span>Duration</span>
                      </p>

                    </div>
                    <p className='Cardtest__Price'>₹{testData.testPrice}</p>
                    <button className='TestNowButton' onClick={(e) => handleBuyNow(e, testData)}>Buy Now</button>
                  </div>
                })
              }
            </div>



            <div className="MockTest__CardContainer">
              <h1 className='TestHeading'>Topic-Wise</h1>

              {
                TestData?.filter((data) => data.testCategory === "TopicWise").map((testData) => {
                  return <div className='MockText_TopicCard' key={testData._id}>

                    <img src={testData.testImg} alt="TestTopicIcon" className='topicWiseIcon' />

                    <p className='Cardtest_topicName'>{testData.testTitle}</p>
                    <p className='Cardtest__Price'>₹{testData.testPrice}</p>

                    <button className='TestNowButton' onClick={(e) => handleBuyNow(e, testData)}>Buy Now</button>
                  </div>
                })
              }
            </div>

            <div className="MockTest__CardContainer">
              <h1 className='TestHeading'>Company-Wise</h1>

              {
                TestData?.filter((data) => data.testCategory === "CompanyWise").map((testData) => {
                  return <div className='MockText_TopicCard MockText_ComapnyCard' key={testData._id}>

                    <img src={testData.testImg} alt="TestTopicIcon" className='CompanyWiseIcon' />

                    <p className='Cardtest__Price'>₹{testData.testPrice}</p>

                    <button className='TestNowButton' onClick={(e) => handleBuyNow(e, testData)}>Buy Now</button>
                  </div>
                })
              }
            </div>

            {IsPaymentClick && <PaymentPopup propFun={canclePayment} />}
            <Footer></Footer>
          </section >
          <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
        </>
      }

    </>
  )
}

export default MockTestComponent
