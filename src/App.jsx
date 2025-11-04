import './App.css'
import logo from "./images/brand_logo.png"
import item from "./images/shoe_image.png"
import flipkart from "./images/flipkart.png"
import amazon from "./images/amazon.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react'

function App() {
  const [showmenu,setShowmenu]=useState(false);
  const handleToggle=()=>{
    setShowmenu(!showmenu);
    console.log(showmenu)
  }
  return (
 
    <Container className=' containerwrapper'>
       <Row>
        <div className="p-2 navwrapper mb-5">
        <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
       <span className='mobileview'>
          <div className="hamburger-menu" onClick={handleToggle}>
          <button>
            <GiHamburgerMenu />
          </button>
        </div>
         <div className={`lists ${showmenu?'active':''}`}>
          <ul>
            <li>MENU</li>
            <li>LOCATION</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className={`loginbtnwrapper ${showmenu?'active':''}`}>
          <Button className='loginbtn' >Login</Button>
        </div>
       </span>
      </nav>
       </div>
       </Row>
       <Row className='contentwrapper'>
       <Col  md={{span:7}} className='p-0 order-1 order-sm-2 ' >
        <div className="content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p className='contentdiscription'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className="shopbuttons">
            <Button className='shopbtn'>Shop Now</Button>
          <Button className='categorybtn'>Category</Button>
          </div>
          <div className="socialmedia">
            <p>Also Available On</p>
            <img src={flipkart} alt="" className='pe-4' />
            <img src={amazon} alt="" />
          </div>
        </div>
       </Col>
       <Col md={5}  className='imagecontainer p-0 order-sm-1 order-md-2'>
        <div className="item">
          <img src={item} alt="" />
        </div>
        </Col>
       </Row>
    </Container>
  )
}

export default App
