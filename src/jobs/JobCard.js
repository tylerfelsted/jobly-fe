import { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import UserContext from '../hooks/userContext';

function JobCard({jobDetails}) {
  const { id, title, salary, equity } = jobDetails;
  const { applyToJob, jobsAppliedTo } = useContext(UserContext);

  const button = jobsAppliedTo.includes(id) 
    ? 
    <Button className="col-2 m-3" disabled={true} >Applied</Button> 
    : 
    <Button className="col-2 m-3" onClick={() => applyToJob(id)}>Apply</Button>;

  return (
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Salary: {salary}</Card.Text>
          {equity ? <Card.Text>Equity: {equity}</Card.Text> : null}
        </Card.Body>
        {button}
      </Card>
  ) 
}

export default JobCard;