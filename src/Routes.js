import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';
import CompanyList from './CompanyList';
import JobList from './JobList';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import EditProfileForm from './EditProfileForm';



function Routes({ login, signup }) {
  return (
    <Switch>
      <Route exact path='/'>
        <h1>Home Page</h1>
      </Route>
      <Route exact path='/companies'>
        <CompanyList />
      </Route>
      <Route exact path='/companies/:handle'>
        <CompanyDetails />
      </Route>
      <Route exact path='/jobs'>
        <JobList />
      </Route>
      <Route exact path='/login'>
        <LoginForm login={login}/>
      </Route>
      <Route exact path='/signup'>
        <SignupForm signup={signup} />
      </Route>
      <Route exact path='/profile'>
        <EditProfileForm />
      </Route>
    </Switch>
  )
}

export default Routes;