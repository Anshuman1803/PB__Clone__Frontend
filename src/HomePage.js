import React from 'react'
import Hero_Image from './Assets/Hero_BG.svg'
import aws_AchievementImg from "./Assets/aws-Achievement.webp"
import futerSkils_AchievementImg from "./Assets/futureSkils-Achievement.webp"
import Google_AchievementImg from "./Assets/Google-launchpad_Achievement.webp"
import leads_AchievementImg from "./Assets/leads_Achievement.webp"
import StudentImage from './Assets/StudentIMG.svg'

function HomePage() {
    return (
        <section className='homeSection__Container'>

            <div className="homeSectionContainer__HeroContainer">


                <div className="HeroContainer__LeftSection">
                    <h1 className='HeroLeftSection__FirstSentence'>Start your journey of success</h1>
                    <h2 className='HeroLeftSection__SecondSentence'>Personalised Coding Programs to make coding easier for you</h2>
                    <h3 className='HeroLeftSection__ThirdSentence'>Want to know how PrepBytes can help you?</h3>
                    <button className='knowMoreButton'>Know More</button>
                </div>

                <div className="HeroContainer__RightSection">
                    <img src={Hero_Image} alt="Hero_Poster" className='RightSection_HeroPoster' />
                </div>

                <div className="HeroContainer__achievementContainer">

                    <div className="achievementContainer_PosterContainer">
                        <img src={aws_AchievementImg} alt="AchievementPoster" className='AchievementPoster' />
                    </div>

                    <div className="achievementContainer_PosterContainer">
                        <img src={futerSkils_AchievementImg} alt="AchievementPoster" className='AchievementPoster' />
                    </div>
                    <div className="achievementContainer_PosterContainer">
                        <img src={Google_AchievementImg} alt="AchievementPoster" className='AchievementPoster' />
                    </div>
                    <div className="achievementContainer_PosterContainer">
                        <img src={leads_AchievementImg} alt="AchievementPoster" className='AchievementPoster' />
                    </div>
                </div>

            </div>

            <div className="CodingJourney__Container">
                <div className="CodingJourneyContainer__LeftContainer">
                    <img src={StudentImage} alt="" />
                </div>
                <div className="CodingJourneyContainer__RightContainer">

                </div>

            </div>
        </section>
    )
}

export default HomePage
