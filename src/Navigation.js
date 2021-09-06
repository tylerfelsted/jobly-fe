import { useContext } from 'react';
import UserContext from './hooks/userContext';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

function Navigation({ logout }) {
  const { currentUser } = useContext(UserContext);


  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to='/'>Jobly</Navbar.Brand>
        <Nav>
          
          {!currentUser ? 
            <>
              <Nav.Link as={NavLink} to='/login'>Log In</Nav.Link>
              <Nav.Link as={NavLink} to='/signup'>Sign Up</Nav.Link>
            </>
            : 
            <> 
              <Nav.Link as={NavLink} to='/companies'>Companies</Nav.Link>
              <Nav.Link as={NavLink} to='/jobs'>Jobs</Nav.Link>
              <Nav.Link as={NavLink} to='/profile'>Profile</Nav.Link>
              <Nav.Link as={NavLink} onClick={logout} to='/'>Log Out {currentUser.username}</Nav.Link>
            </>
          }
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation;