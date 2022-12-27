import React from 'react'
import { Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <div style={{background: "pink", borderBottom: "solid pink"}}>
      <Nav style={{paddingTop: "1rem", display: "flex"}} className="justify-content-end" activeKey="/home">
        <img style={{width: "10%"}} src='https://www.freeiconspng.com/thumbs/cat-png/cat-png-17.png' alt="img of a cow"></img>
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link eventKey="link-1">Breeds</Nav.Link>
          <Nav.Link eventKey="link-2">About Us</Nav.Link>
            <Nav.Link eventKey="link-3">Thank You</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default NavigationBar;