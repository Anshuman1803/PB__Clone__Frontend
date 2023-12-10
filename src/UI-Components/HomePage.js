import React from 'react'
import Hero_Image from '../Assets/Hero_BG.svg'
import aws_AchievementImg from "../Assets/aws-Achievement.webp"
import futerSkils_AchievementImg from "../Assets/futureSkils-Achievement.webp"
import Google_AchievementImg from "../Assets/Google-launchpad_Achievement.webp"
import leads_AchievementImg from "../Assets/leads_Achievement.webp"
import StudentImage from '../Assets/StudentIMG.svg'
import Arrow from "../Assets/ArrowSign.svg"
import finalGoal from "../Assets/achieve_your_coding_dream.svg"
import FirstIcon from '../Assets/Journey__One.svg'
import TwoIcon from '../Assets/Journey__Two.svg'
import ThreeIcon from '../Assets/Journey__Three.svg'
import FourIcon from '../Assets/Journey__Four.svg'
import ComptativePoster from '../Assets/master_competetive_pgm.webp'
import FullStackPoster from '../Assets/Full_Stack.webp'
import ProjectPoster from '../Assets/Project_Poster.webp'
import CarrerFirstIMg from '../Assets/CarrerImgOne.svg'
import CarrerSecondIMg from '../Assets/CarrerImgTwo.svg'
import CarrerThirdIMg from '../Assets/CarrerImgThree.svg'
import CurriculumICON from '../Assets/industry_vetted_curriculum.svg'
import PlacementICON from '../Assets/exclusive_placement.svg'
import ProjectICON from '../Assets/real_life_projects.svg'
// import FounderImg from './Assets/mamta_mentor.png'
import { Link } from 'react-router-dom'
import Footer from './Footer'
function HomePage() {
    return (
        <section className='homeSection__Container'>

            <div className="homeSectionContainer__HeroContainer">


                <div className="HeroContainer__LeftSection">
                    <h1 className='HeroLeftSection__FirstSentence'>Start your journey of success</h1>
                    <h2 className='HeroLeftSection__SecondSentence'>Personalised Coding Programs to make coding easier for you</h2>
                    <h3 className='HeroLeftSection__ThirdSentence'>Want to know how PrepBytes can help you?</h3>
                    <a href="#courseType" className='knowMoreButton'>Know More</a>
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
                    <img src={StudentImage} alt="studnetPoster" />
                </div>
                <div className="CodingJourneyContainer__RightContainer">

                    <h2 className="CodingJourneyRightContainer__heading"> How PrepBytes Mentorship driven Personalised Learning works?</h2>

                    <div className="CodingJourney__StepContainer StepContainer__First">
                        <h3 className="StepContainer__heading StepContainer__headingFirst">PERSONALISED LECTURES & WEEKLY PLAN</h3>
                        <div className="StepContainer__Box StepContainer__FirstBox">
                            <p className='SetpContainer_Box_Text'>Get learning videos & weekly plan based on your coding skills</p>
                            <img src={FirstIcon} alt="Step__ICON" className='StepContainer_ICON' />
                        </div>
                        <img src={Arrow} alt="ArrowSignImages" className='StepContainer__arrowImages StepContainer__firstArrowImages' />
                    </div>

                    <div className="CodingJourney__StepContainer StepContainer__Second">
                        <h3 className="StepContainer__heading StepContainer__headingSecond">PERSONALISED CODING ASSIGNMENTS</h3>
                        <div className="StepContainer__Box StepContainer__SecondBox">
                            <p className='SetpContainer_Box_Text'>Practice coding questions that adapts based on your progress</p>
                            <img src={TwoIcon} alt="Step__ICON" className='StepContainer_ICON' />
                        </div>
                        <img src={Arrow} alt="ArrowSignImages" className='StepContainer__arrowImages StepContainer__SecondArrowImages' />
                    </div>

                    <div className="CodingJourney__StepContainer StepContainer__Third">
                        <h3 className="StepContainer__heading StepContainer__headingThird">DOUBT SOLVING BY CODING EXPERTS</h3>
                        <div className="StepContainer__Box StepContainer__ThirdBox">
                            <p className='SetpContainer_Box_Text'>Getting Stuck While Coding? Get all your doubts resolved.</p>
                            <img src={ThreeIcon} alt="Step__ICON" className='StepContainer_ICON' />
                        </div>
                        <img src={Arrow} alt="ArrowSignImages" className='StepContainer__arrowImages StepContainer__firstArrowImages' />
                    </div>

                    <div className="CodingJourney__StepContainer StepContainer__Fourth">
                        <h3 className="StepContainer__heading StepContainer__headingFourth">DOUBT SOLVING BY CODING EXPERTS</h3>
                        <div className="StepContainer__Box StepContainer__FourthBox">
                            <p className='SetpContainer_Box_Text'>Getting Stuck While Coding? Get all your doubts resolved.</p>
                            <img src={FourIcon} alt="Step__ICON" className='StepContainer_ICON' />
                        </div>
                        <img src={Arrow} alt="ArrowSignImages" className='StepContainer__arrowImages StepContainer__SecondArrowImages' />
                    </div>

                    <div className="CodingJourney__FinalGoalContainer">
                        <img src={finalGoal} alt="FinalGoal" className='CodingJourney__finalGoalImage' />
                    </div>
                </div>

            </div>

            <div className="CourseTypes__MainContainer" id='courseType'>
                <h2 className='CourseTypes__MainContainer__Heading'>I WANT TO</h2>

                <div className="CourseType__CardContainer">

                    <Link className="CourseType__Card" to={"/online-full-stack-developer-mern-certification-program"}>
                        <img src={FullStackPoster} alt="Poster" className='CourseType_CardPoster' />
                        <p className="CourstType__CardText">PREPARE FOR CAMPUS PLACEMENTS</p>
                        <p className="CourseType__CardArrowButton"><i className="fa-solid fa-arrow-right arrowICON"></i></p>
                    </Link>

                    <Link className="CourseType__Card" to={"/master-competitive-programming"}> 
                        <img src={ComptativePoster} alt="Poster" className='CourseType_CardPoster' />
                        <p className="CourstType__CardText">MASTER COMPETITIVE PROGRAMMING</p>
                        <p className="CourseType__CardArrowButton"><i className="fa-solid fa-arrow-right arrowICON"></i></p>
                    </Link>

                    <Link className="CourseType__Card" to={"/project/html"}>
                        <img src={ProjectPoster} alt="Poster" className='CourseType_CardPoster' />
                        <p className="CourstType__CardText">BUILD DEVELOPMENT PROJECTS</p>
                        <p className="CourseType__CardArrowButton"><i className="fa-solid fa-arrow-right arrowICON"></i></p>
                    </Link>

                </div>
            </div>

            <div className="SwitchCarrer__MainContainer">
                <div className="SwitchCarrer__LeftContainer">

                    <h3 className='LeftContainer__headingText'>Are you an Experienced Professional willing to Switch?</h3>

                    <div className="CarrerPlanBox">
                        <img src={CurriculumICON} alt="CarrterPlanICON" className='CarrerPlanICON' />
                        <p className='CarrerPlanBox_Text'> INDUSTRY VETTED CURRICULUM STRUCTURED FOR YOU</p>
                    </div>

                    <div className="CarrerPlanBox">
                        <img src={PlacementICON} alt="CarrterPlanICON" className='CarrerPlanICON' />
                        <p className='CarrerPlanBox_Text'> REAL LIFE PROJECTS BUILT ON DEMAND TECH STACK</p>
                    </div>

                    <div className="CarrerPlanBox">
                        <img src={ProjectICON} alt="CarrterPlanICON" className='CarrerPlanICON' />
                        <p className='CarrerPlanBox_Text'> EXCLUSIVE PLACEMENT SUPPORT TEAM WITH JOB GURANTEE</p>
                    </div>
                    <p className="courseName">PrepBytes Elevation Academy - <span className='courseName_Text'> 4 months Full Stack Program with Job Guarantee</span></p>

                    <button className='knowMoreButton LeftContainer__KnowMoreButton'>Know More</button>
                </div>

                <div className="SwitchCarrer__RightContainer">
                    <img src={CarrerFirstIMg} alt="Poster" className='SwtichCarrerPoster CarrerFirstIMg' />
                    <img src={CarrerSecondIMg} alt="Poster" className='SwtichCarrerPoster CarrerSecondIMg' />
                    <img src={CarrerThirdIMg} alt="Poster" className='SwtichCarrerPoster CarrerThirdIMg' />
                </div>
                <h3 className='LeftContainer__headingText headingFirst'>Are you an Experienced Professional willing to Switch?</h3>

            </div>

            <Footer></Footer>
            <div className='helpContainer__Message'>Need Help? Talk to us on  079 6900 2111 or Request Callback</div>
        </section>
    )
}

export default HomePage
