import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CompanyDetails from './CompanyDetails';
import CompanyList from './CompanyList';



function Routes() {
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
        <h1>Jobs</h1>
      </Route>
      <Route exact path='/login'>
        <h1>Log In</h1>
      </Route>
      <Route exact path='/signup'>
        <h1>Sign up</h1>
      </Route>
      <Route exact path='/profile'>
        <h1>User Profile</h1>
      </Route>
    </Switch>
  )
}

export default Routes;