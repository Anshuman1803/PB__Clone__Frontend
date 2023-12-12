import React from 'react'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_head'>
                <div className='column1'>
                    <div className='followUs'>
                        FOLLOW US
                        <div className='brands'>
                            <i className="fa-brands fa-square-facebook followusICON" style={{ "color": "#3c5b90" }}></i>
                            <i className="fa-brands fa-square-instagram followusICON" style={{ "color": "red" }}></i>
                            <i className="fa-brands fa-linkedin followusICON" style={{ "color": "#3668bf" }}></i>
                            <i className="fa-brands fa-square-youtube followusICON" style={{ "color": "red" }}></i>
                        </div>
                    </div>
                    <div className='contactUs'>
                        CONTACT US
                        <div className='contact'>
                            <p><i className="fa-solid fa-phone-volume" style={{ "color": "#383838" }}></i>+91-7969 0021 11</p>
                            <p><i className="fa-solid fa-comments" style={{ "color": "#383838" }}></i>support@prepbytes.com</p>
                        </div>
                    </div>
                </div>
                <div className='column2'>
                    <div className='latestArticles'>
                        LATEST ARTICLES
                        <div className='para'>
                            <p>sed Command in Linux Unix With Examples</p>
                            <p>scp Command in Linux with Examples</p>
                            <p>chown Command in Linux with Examples</p>
                            <p>cp Command Linux Examples</p>
                            <p>Touch Command in Linux with Examples</p>
                        </div>
                    </div>
                    <div className='popularArticles'>
                        POPULAR ARTICLES
                        <div className='para'>
                            <p>dd command linux</p>
                            <p>ifconfig Command in Linux</p>
                            <p>with Examples</p>
                            <p>pwd Command in Linux with</p>
                            <p>Examples</p>
                            <p>diff Command Linux</p>
                            <p>Examples</p>
                            <p>Top Commandn in Linux with</p>
                            <p>Examples</p>
                        </div>
                    </div>
                </div>
                <div className='column3'>
                    <div className='quickLinks'>
                        QUICK LINKS
                        <div className='links'>
                            <p>Interview Notes</p>
                            <p>Mock Test</p>
                            <p>Placement</p>
                            <p>Programs</p>
                            <p>Coding Courses</p>
                            <p>About Us</p>
                            <p>Blog</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer_foot'>
                <p>Copyright <i className="fa-regular fa-copyright" style={{"color": "#4f4f4f"}}></i> 2023</p>
                <div className='foot_left'>
                    <p>Privacy Policy</p>
                    <p>Refund policy</p>
                    <p>Terms of Use</p>
                </div>
            </div>
        </footer>
    )
}
