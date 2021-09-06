import { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from './Input';
import { Container, Form, Button } from 'react-bootstrap';
import UserContext from '../hooks/userContext';
import JoblyApi from '../api';

function EditProfileForm() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [ formData, setFormData ] = useState({firstName: currentUser.firstName,
                                              lastName: currentUser.lastName,
                                              email: currentUser.email,
                                              password: ""});
  const history = useHistory();

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e, formData) {
    e.preventDefault();
    try{
      if(await JoblyApi.login({password: formData.password, username: currentUser.username})) {
        delete formData.password;
        const user = await JoblyApi.updateUser(formData, currentUser.username);
        setCurrentUser(user);
        history.push('/')
      }
    } catch(e) {
      alert(e)
    }
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e, formData)}>
        <div className="mb-3">
          <label className="form-label fw-bold" htmlFor="username">Username</label>
          <p id="username" className="">{currentUser.username}</p>
        </div>
        <Input id="firstName" label="First Name" type="text" value={formData.firstName} handleChange={handleChange} />
        <Input id="lastName" label="Last Name" type="text" value={formData.lastName} handleChange={handleChange} />
        <Input id="email" label="Email" type="email" value={formData.email} handleChange={handleChange} />
        <Input id="password" label="Confirm password to make changes" type="password" value={formData.password} handleChange={handleChange} />
        <Button type="submit">Update Profile</Button>
      </Form>
    </Container>
  )
}

export default EditProfileForm;