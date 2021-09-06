import { useContext } from 'react';
import UserContext from './hooks/userContext';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function Home() {
  const { currentUser } = useContext(UserContext);

  if(currentUser) {
    return (
      <Container>
        <Row className="justify-content-center">
        <Col md="auto"><h1>Jobly</h1></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto"><p>Every job in one convenient location</p></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto"><h2>Welcome Back, {currentUser.firstName}</h2></Col>
      </Row>
      </Container>
    )
  }
  

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="auto"><h1>Jobly</h1></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto"><p>Every job in one convenient location</p></Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="auto"><Button as={NavLink} to="/login">Log In</Button></Col>
        <Col md="auto"><Button as={NavLink} to="/signup">Sign Up</Button></Col>
      </Row>
    </Container>
  )
}

export default Home;