import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {Helmet} from "react-helmet"
import "./style.css";
import "./swiper-bundle.min.css"
const LandingPage = () =>{

    const dev = true;
    return (
        <>
        {/**
    <Helmet>

    <script src="./javascript/swiper-bundle.min.js" type="text/javascript"/>

    <script src="https://kit.fontawesome.com/a25d427fc1.js" type="text/javascript"/>

    <script src="./javascript/logic.js" type="text/javascript"/>

    <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js" type="text/javascript"/>

    <script src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js" type="text/javascript"/>

    </Helmet>

      <div>
        <div className="container">

          <div className="fixed">
            <nav className="navstyle">
              <div className="logodiv">
                <img src="./final_half_logo.png" className="logo" />
              </div>
              <div>
                <a href="https://masterly.vercel.app/login" className="login_btn">Log in</a>
                <a href="https://masterly.vercel.app/signup" className="signin_btn">Sign up</a>
              </div>
            </nav>
          </div>
          <div className="content">
            <h1 className="anim">I'm Masterly</h1>
            <p className="anim">The “Student Community Application” project is an innovative educational technology
              initiative that
              acknowledges the diverse aspects of the modern student experience beyond traditional classroom learning,
              as explored in this detailed report which delves into the project’s goals, approaches, and the
              importance of its key features—the “Mock Test” and “Resume Builder” modules.</p>
            <a href="#" className="signin_btn anim">Learn More</a>
          </div>
          <img src="images/image.webp" className="feature_img anim" />
        </div>
        <div className="aboutus">
          <div className="containeraboutus">
            <div className="content-section">
              <div className="title">
                <h1>About us</h1>
              </div>
              <div className="content">
                <h3>Unveiling the Innovative Student Community Application: Enhancing the Modern Student Experience
                </h3>
                <p>I am deeply involved in the development of the “Student Community Application” project, which
                  aims to revolutionize educational technology. This visionary project acknowledges that the
                  student experience goes beyond traditional classroom learning. I have extensively researched and
                  analyzed the project’s objectives, methodologies, and the crucial role played by its core
                  components—the “Mock Test” and “Resume Builder” modules. This comprehensive report provides an
                  in-depth exploration of the project’s significance and potential impact on the student
                  community.</p>
                <div className="signin_btn"><a href="#">Read More</a></div>
              </div>
              <div className="social">
                <a href><i className="fab fa-facebook-f" /></a>
                <a href><i className="fab fa-twitter" /></a>
                <a href><i className="fab fa-instagram" /></a>
              </div>
            </div>
            <div className="image-section">
              <img src="images/aboutus.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="feature">
          <h5>Feature</h5>
          <h1>What I Do</h1>
          <div className="containerfeature">
            <div className="box">
              <ion-icon className="icons" name="reader-outline" />
              <h2>Professional Resume Builder for Students</h2>
              <p>The Resume Builder Module is a cutting-edge tool that empowers students </p>
              <ion-icon className="arrow" name="arrow-forward-outline" />
            </div>
            <div className="box">
              <ion-icon className="icons" name="bar-chart-outline" />
              <h2>Enhancing Student Experience </h2>
              <p>I provide comprehensive educational consulting services, helping students </p>
              <ion-icon className="arrow" name="arrow-forward-outline" />
            </div>
            <div className="box">
              <ion-icon className="icons" name="briefcase-outline" />
              <h2>Mock Tests</h2>
              <p>The Mock Test Module is designed to provide students with a realistic and interactive platform for
                practicing </p>
              <ion-icon className="arrow" name="arrow-forward-outline" />
            </div>
          </div>
        </div>
        <div className="slide_body">
          <div className="slide_container swiper">
            <div className="slide_content">
              <div className="card_wrapper swiper-wrapper">
                <div className="card swiper-slide">
                  <div className="image_content">
                    <span className="overlay" />
                    <div className="card_image">
                      <img src="images/profile1.webp" alt="" className="card_img" />
                    </div>
                  </div>
                  <div className="card_content">
                    <h2 className="name">Jacob Thompson</h2>
                    <p className="description">The mock test module provided a comprehensive and accurate simulation
                      of the actual exam, helping me gauge my performance and identify areas of improvement.
                    </p>
                    <button className="button">View More</button>
                  </div>
                </div>
                <div className="card swiper-slide">
                  <div className="image_content">
                    <span className="overlay" />
                    <div className="card_image">
                      <img src="images/profile2.webp" alt="" className="card_img" />
                    </div>
                  </div>
                  <div className="card_content">
                    <h2 className="name">Emily Johnson</h2>
                    <p className="description">The mock test module provided a comprehensive and accurate simulation
                      of the actual exam, helping me gauge my performance and identify areas of improvement.
                    </p>
                    <button className="button">View More</button>
                  </div>
                </div>
                <div className="card swiper-slide">
                  <div className="image_content">
                    <span className="overlay" />
                    <div className="card_image">
                      <img src="images/profile3.webp" alt="" className="card_img" />
                    </div>
                  </div>
                  <div className="card_content">
                    <h2 className="name">Michael Anderson</h2>
                    <p className="description">
                      The resume builder module was user-friendly and provided helpful tips and templates,
                      enabling me to create a professional and standout resume effortlessly.
                    </p>
                    <button className="button">View More</button>
                  </div>
                </div>
                <div className="card swiper-slide">
                  <div className="image_content">
                    <span className="overlay" />
                    <div className="card_image">
                      <img src="images/profile4.jpeg" alt="" className="card_img" />
                    </div>
                  </div>
                  <div className="card_content">
                    <h2 className="name">Jacob Thompson</h2>
                    <p className="description">The mock test module provided a comprehensive and accurate simulation
                      of the actual exam, helping me gauge my performance and identify areas of improvement.
                    </p>
                    <button className="button">View More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next swiper-navbtn" />
            <div className="swiper-button-prev swiper-navbtn" />
            <div className="swiper-pagination" />
          </div>
        </div>
        <div className="contact_body">
          <div className="contact_container">
            <div className="contact-left">
              <h2 className="contact_left_heading">Contact Us Here</h2>
              <form action="#">
                <div className="form_element">
                  <input type="text" id="contact_name" className="form_input" />
                  <label htmlFor="contact_name">Full Name</label>
                </div>
                <div className="form_element">
                  <input type="text" id="contact_email" className="form_input" />
                  <label htmlFor="contact_email">Email</label>
                </div>
                <div className="form_element">
                  <textarea name id="contact_message" cols={30} rows={10} className="form_input" defaultValue={""} />
                  <label htmlFor="contact_message">Your Message</label>
                </div>
                <input type="button" className="form_btn" defaultValue="Send" />
              </form>
            </div>
            <div className="contact_right">
              <h2>Stay In Touch</h2>
              <p><strong>Email:</strong></p>
              <p>MasterlyOfficial@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer_body">
          <footer>
            <div className="row">
              <div className="col">
                <img src="images/logo.webp" className="footer_logo" />
                <p>The "Student Community Application" project represents a visionary leap in educational
                  technology, driven by the recognition that the modern student experience encompasses far more
                  than just classroom learning.</p>
              </div>
              <div className="col">
                <h3>Office <div className="underline"><span /></div></h3>
                <p>IT Park</p>
                <p>Bhawarkua, Indore</p>
                <p>Madhya Pradesh, PIN 452001, India</p>
                <p className="footer_email">MasterlyOfficial@gmail.com</p>
                <h4>+91 0123456789</h4>
              </div>  
              <div className="col">
                <h3>Links <div className="underline"><span /></div></h3>
                <ul className="footer_ul">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Features</a></li>
                  <li><a href="#">Contacts</a></li>
                </ul>
              </div>
              <div className="col">
                <h3>Newsletter <div className="underline"><span /></div></h3>
                <form className="footer_form">
                  <i className="fa-regular fa-envelope" />
                  <input type="email" placeholder="Enter Your Email id" required />
                  <button type="submit"><i className="fa-solid fa-arrow-right" /></button>
                </form>
              </div>
            </div>
            <hr />
            <p className="copyright">Masterly @ 2023 - All Right Reserved</p>
          </footer>
        </div>
      </div>
      */ }
    <div className="h-[100vh] bg-[#ffffff]">

                <iframe  className="h-[100vh]" src={dev?'https://abdulaaqilkhan.github.io/MasterlyLanding/':'http://127.0.0.1:5500/Masterly/Masterly/index.html'} width="100%" height="100%"  seamless="seamless"  style={{overflow: 'hidden'}}/>
                </div>
    </>)
}
export default LandingPage;