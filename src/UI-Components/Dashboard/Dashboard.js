import React, { useEffect, useState } from 'react'
import UnauthorizedPage from '../UnauthorizedPage'
import { useSelector } from 'react-redux'
import axios from 'axios'
function Dashboard() {
  const [activeSidebar, setActivesidebar] = useState(false);
  const [testData, setTestData] = useState([])
  const { isLoggedIN } = useSelector((state) => state.AppUser.UserDetails);


  useEffect(() => {
    axios.get("http://localhost:5000/getTestdata").then((response) => {
      setTestData(response.data);
    })
  }, [])
  return (
    <div className='Dashbord__Container'>
      {
        isLoggedIN ? <>
          <aside className={` ${activeSidebar ? "activeSidebar" : "dashboard__sideBar"} `}>
            <p className='Dashboard_sideBar__item activeItem'><i className="fa-solid fa-graduation-cap sidebar__icon"></i> <span className='sidebar_item_text'>My Course</span></p>

            <p className='Dashboard_sideBar__item'><i className="fa-regular fa-user sidebar__icon"></i> <span className='sidebar_item_text'>My Profile</span></p>

            <p className='Dashboard_sideBar__item'><i className="fa-solid fa-users sidebar__icon"></i> <span className='sidebar_item_text'>Share & Earn</span></p>

          </aside>

          <div className="dashboard__courseDetails">

            <div className="CourseDetails__headingContainer">
              <i className={`fa-solid ${activeSidebar ? "fa-xmark" : "fa-bars"} dashboard__sidebarHamMenu`} onClick={() => setActivesidebar(!activeSidebar)}></i>
              <p className='CourseDetails__tabText'>Courses</p>
            </div>

            <div className="courseDetails__cardContainer">
              {testData.length > 0 ? <>

                {
                  testData.map((data) => {
                    return <div className='courseDetails__card' key={data._id}>
                      <img src={data.testImg} alt="icon" className='CourseDetails_cardICON' />
                      <p className='card__itemText'>{data.testName}</p>
                      <p className='card__itemText'>₹{data.testPrice}</p>
                      <p className='card__itemText'>topic: {data.testCategory}</p>

                    </div>
                  })
                }
              </> : <p style={{ color: "tomato", fontWeight: "700", width: "100%", marginTop: "20px", fontSize: "15px" }}>You are not purchased anything.</p>

              }
            </div>

          </div>
        </> : <UnauthorizedPage />
      }
    </div>
  )
}

export default Dashboard
