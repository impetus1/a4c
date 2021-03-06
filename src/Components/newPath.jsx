import React from 'react'
import { Parallax } from "react-parallax";

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
const insideStyles = {
    padding: 10, 
    position: "center",
    //top: "100%",
    //left: "50%",
    //transform: "translate(-50%,-50%)"
  };
const image1 =
  "./Images/mid section.png";       
  /*right below div style inside styles is where any html/css code would. InsideStyles just
  provides some css changes without affecting app or index.css*/
const Blah = () => (
    <div>
        {/*<Header/>
        <nav class="primary-menu">
            <ul>
                <li>Home</li>
                <li>Resources</li>
                <li>Get Involved</li>
                <li>Founder Bios</li>
                <li>Contact Us</li>
            </ul>
        </nav>
        <div class="branding"><p class="heading1">Logo</p></div>*/}
    <div class="hero">
    <div style={styles}>
      <Parallax bgImage={image1} blur={{ min: -4, max: 7 }}>
        <div style={{ height: 1000, width: "100%" }}>
          <div style={insideStyles}>        
          <p class="heading2">
                We are a grassroots effort focused on
                fostering diversity and inclusion in Pasco
                County schools and community.
        </p>
        <p>
            [ Client’s “Value Statement” document ] Together, our commitment to diversity,
             inclusion, and equity has the potential to positively disrupt and transform entrenched practices and thinking.
              And as a result, we will hold schools in Land O’Lakes, Wesley Chapel, New Port Richey, and the Pasco County
               School System as a whole, accountable to a goal of graduating students who are engaged world citizens, with 
               a discerning intelligence, an understanding of inequality and power, and moral courage.
        </p>
        <button>Donate Now</button></div>
        
        <div class="community">
        <h3>Community</h3>
        <div class="box">
            <img src="https://via.placeholder.com/150" alt="place holder image"></img>
            <h4>Teacher Story</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit neque aspernatur necessitatibus id iusto, ab ex doloremque corporis adipisci, culpa obcaecati explicabo itaque recusandae, blanditiis sequi iure odio fugiat. Obcaecati!</p>
        </div>
        <div class="box">
                <img src="https://via.placeholder.com/150" alt="place holder image"></img>
                <h4>Event Story</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit neque aspernatur necessitatibus id iusto, ab ex doloremque corporis adipisci, culpa obcaecati explicabo itaque recusandae, blanditiis sequi iure odio fugiat. Obcaecati!</p>
        </div>
        <div class="box">
                <img src="https://via.placeholder.com/150" alt="place holder image"></img>
                <h4>Parent Story</h4>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit neque aspernatur necessitatibus id iusto, ab ex doloremque corporis adipisci, culpa obcaecati explicabo itaque recusandae, blanditiis sequi iure odio fugiat. Obcaecati!</p>
        </div>
    </div></div>
      </Parallax></div>

    </div>
   
    <div class="press">
        <div class="links">
            <h4>Press</h4>
            <ul class="clippings">
                <li>
                    <span class="heading">Agents for Change push...</span> 
                    <p>http://www.baynews9.com/fl/ tampa/news/2018/06/19/-pasco-county- agents-for-change--push-for-diversity-- inclusion-training-in-schools. </p>
                </li>
                <li>
                        <span class="heading">Pasco Moms ask School...</span> 
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit neque aspernatur necessitatibus id iusto, ab ex doloremque corporis adipisci,</p>
                    </li>
            </ul>
        </div>
        <div class="latest-photo">
            <img src="https://via.placeholder.com/600" alt="place holder image"></img>
        </div>
    </div>
    <footer>
        <div class="branding">LOGO</div>
        <button>Donate Now</button>
        <menu class="bottom-list">
            <ul>
                <li>Bios</li>
                <li>Press</li>
                <li>Contact Us</li>
                <li>Resources</li>
                <li>Donate</li>
                <li>Founder</li>
                <li>Connect With Us</li>
                <li>Facebook</li>
            </ul>
        </menu>
    </footer>

            </div>
);
export default Blah;