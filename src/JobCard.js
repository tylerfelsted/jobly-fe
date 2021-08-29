import { Card } from 'react-bootstrap';

function JobCard({jobDetails}) {
  const { title, salary, equity } = jobDetails;
  return (
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Salary: {salary}</Card.Text>
          {equity ? <Card.Text>Equity: {equity}</Card.Text> : null}
        </Card.Body>
      </Card>
  ) 
}

export default JobCard;