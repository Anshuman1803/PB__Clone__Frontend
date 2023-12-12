import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Loader from './Loader';
import Footer from './Footer'
function ProjectComponent() {
  const [isLoading, setIsloading] = useState(false)
  const [currentProject, setCurrentProject] = useState([])
  const { topic } = useParams();
  useEffect(() => {
    setIsloading(true)
    axios.get(`http://localhost:5000/project/${topic}`).then((response) => {
      setCurrentProject(response.data[0]);
      setIsloading(false)
    });
    window.scrollTo(0, 0);
  }, [topic]);

  return (
    <>
      {
        isLoading ? <Loader /> : <>
          <section className="projectComponent_container">
            <div className="project__LInksContainer">
              <Link to={"/project/HTML"} className='projectNavigation_LinkItem'>HTML</Link>
              <Link to={"/project/CSS"} className='projectNavigation_LinkItem'>CSS</Link>
              <Link to={"/project/JavaScript"} className='projectNavigation_LinkItem'>JavaScript</Link>
              <Link to={"/project/React"} className='projectNavigation_LinkItem'>React</Link>
              <Link to={"/project/Node"} className='projectNavigation_LinkItem'>Node</Link>
              <Link to={"/project/Mongo"} className='projectNavigation_LinkItem'>Mongo</Link>
            </div>
            <div className="ProjectInformationContainer">

              <div className="CurrentProject__leftContainer">

                <div className="posterContainer">
                  <img src={currentProject?.project_poster} alt="Poster" className='CurrentProjectPoster' />
                </div>
                <div className="project_DESCContainer">
                  <a href={currentProject?.project_link} className="Project_title">{currentProject?.project_title}</a>
                  <p className="projectDesc">{currentProject?.project_desc}</p>
                </div>

              </div>


              <div className="CurrentProject__rightContainer">
                <h1 className='rightContainer_heading'>TOPICS</h1>
                {
                  currentProject?.project_topics?.map((ele, index) => {
                    return <p className='topicsCovered' key={index + 20 + 1}>{ele}</p>
                  })
                }


              </div>
            </div>


            <Footer></Footer>
          </section>
          <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
        </>
      }
    </>
  )
}

export default ProjectComponent
