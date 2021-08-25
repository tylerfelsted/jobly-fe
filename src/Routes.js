import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



function Routes() {
  return (
    <Switch>
      <Route exact path='/'>
        <h1>Home Page</h1>
      </Route>
      <Route exact path='/companies'>
        <h1>Companies</h1>
      </Route>
      <Route exact path='/companies/:handle'>
        <h1>Company Details</h1>
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