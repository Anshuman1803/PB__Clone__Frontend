import React, { useEffect, useState } from 'react'
import axios from 'axios'
function VideoTutComponent() {
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/video").then((response) => {
      setVideoData(response.data)
    })
  }, [])
  return (
    <>
      <div className='videoComponet__mainContainer'>

        <div className="videoComponent__headerContainer">
          <div className="headerContaienr__leftContainer">
            <h1 className='videoCompoLeftContainer__heading'>Prepbytes Video Library</h1>
            <p className='videoCompoLeftContainer__Text'>Increase your knowledge with PrepBytes free videos. PrepBytes video library is a repository of more than 250 videos containing videos on Competitive Programming , Language Fundamentals - C, C++, Java, Data Structures and Algorithms, Aptitude, Operating System, Interview Questions and much more all at one place.</p>

          </div>
          <div className="headerContaienr__rightContainer">
            <img src="https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png" alt="Poster" className='headerContainer__poster' />
          </div>
        </div>

        <h3 className='videoComponent__categoryText'>CATEGORIES</h3>

        <section className='videoComponent__CardContainer'>
          {
            videoData?.map((data) => {
              return <div key={data._id} className='video__Card'>
                <img src={data.videoPoster} alt="videoThumbnail" className='Video_thumbnail' />
                <p className="videocard__title">{data.videoTitle}</p>
                <p className="videocard__Desc">{data.videoDesc}</p>
                <div className="videoCard__CountContainer">
                  <img src="data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=" alt="YouTubeICon" />
                  <span className='videoCard__Count'>{data.videoCount} Videos</span>
                </div>
              </div>
            })
          }
        </section>

      </div>

      <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>

    </>
  )
}

export default VideoTutComponent
