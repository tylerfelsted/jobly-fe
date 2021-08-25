import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="dark" varient="dark">
          <Container>
          <Navbar.Brand>
            <Link to='/'>Jobly</Link>
          </Navbar.Brand>
          <Nav>
            <NavLink to='/companies'>Companies</NavLink>
            <NavLink to='/jobs'>Jobs</NavLink>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
          </Nav>
          </Container>
        </Navbar>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
