// import './App.css';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { BrowserRouter, Link, NavLink } from 'react-router-dom';
import JoblyApi from './api';
import useLocalStorage from './useLocalStorage';
import Routes from './Routes';
import UserContext from './userContext';
import jwt from 'jsonwebtoken';

function App() {
  const [ token, setToken ] = useLocalStorage('token');
  const [ currentUser, setCurrentUser ] = useState();
  console.log("Current User:", currentUser);

  useEffect(() => {
    async function getUser() {
      if(token){
        JoblyApi.setToken(token);
        const { username } = jwt.decode(token)
        const user = await JoblyApi.getUser(username);
        setCurrentUser(user);
      } else {
        JoblyApi.clearToken();
        setCurrentUser(null);
      }
    }
    getUser();
  }, [token])


  async function login(e, formData) {
    e.preventDefault();
    setToken(await JoblyApi.login(formData));
  }

  async function signup(e, formData) {
    e.preventDefault();
    setToken(await JoblyApi.register(formData));
  }

  function logout() {
    JoblyApi.token = null;
    setToken(null);
  }

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
            {!currentUser ? 
              <>
                <NavLink to='/login'>Log In</NavLink>
                <NavLink to='/signup'>Sign Up</NavLink>
              </>
              : 
              <> 
                <NavLink onClick={logout} to='/'>Log Out</NavLink>
                <NavLink to='/profile'>{currentUser.username}</NavLink>
              </>
            }
          </Nav>
          </Container>
        </Navbar>
        <UserContext.Provider value={{currentUser, setCurrentUser }}>
          <Routes login={login} signup={signup}/>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
