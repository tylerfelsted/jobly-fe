import { Form } from 'react-bootstrap';

function TextInput({ id, label, type, value, handleChange }) {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} name={id} value={value} onChange={handleChange}/>
    </Form.Group>
  )
}

export default TextInput;