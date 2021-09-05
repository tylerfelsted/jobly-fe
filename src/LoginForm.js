import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Input from './Input';
import { Container, Form, Button } from 'react-bootstrap';

function LoginForm({ login }) {
  const initialValues = {
    username: "tfelsted",
    password: "password"
  }
  const [ formData, setFormData ] = useState(initialValues);

  const history = useHistory();

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  async function handleSubmit(e, formData) {
    await login(e, formData)
    history.push('/')
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e, formData)}>
        <Input id="username" label="Username" type="text" value={formData.username} handleChange={handleChange}/>
        <Input id="password" label="Password" type="password" value={formData.password} handleChange={handleChange}/>
        <Button type="submit">Log In!</Button>
      </Form>
    </Container>
  )
}

export default LoginForm;