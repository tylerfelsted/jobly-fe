import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from './Input';
import { Container, Form, Button } from 'react-bootstrap';

function SignupForm({ signup }) {
  const initialValues = {
    username: "tfelsted",
    password: "password",
    firstName: "Tyler",
    lastName: "Felsted",
    email: "tyler.felsted@yahoo.com"
  }
  const [ formData, setFormData ] = useState(initialValues);

  const history = useHistory();

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e, formData) {
    await signup(e, formData)
    history.push('/')
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e, formData)}>
        <Input id="username" label="Username" type="text" value={formData.username} handleChange={handleChange}/>
        <Input id="password" label="Password" type="password" value={formData.password} handleChange={handleChange}/>
        <Input id="firstName" label="First Name" type="text" value={formData.firstName} handleChange={handleChange}/>
        <Input id="lastName" label="Last Name" type="text" value={formData.lastName} handleChange={handleChange}/>
        <Input id="email" label="Email" type="email" value={formData.email} handleChange={handleChange}/>
        <Button type="submit">Sign Up!</Button>
      </Form>
    </Container>
  )
}

export default SignupForm;


// username, password, firstName, lastName, email