import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompanyDetails from './companies/CompanyDetails';
import CompanyList from './companies/CompanyList';
import JobList from './jobs/JobList';
import SignupForm from './users/SignupForm';
import LoginForm from './users/LoginForm';
import EditProfileForm from './users/EditProfileForm';
import Home from './Home';



function Routes({ login, signup }) {
  return (
    <Switch>
      <Route exact path='/'>
        <Home />
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