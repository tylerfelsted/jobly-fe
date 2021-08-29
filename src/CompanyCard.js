import { useHistory } from 'react-router-dom';

import { Card } from 'react-bootstrap';

function CompanyCard({details}) {
  const history = useHistory();
  function handleClick() {
    history.push(`/companies/${details.handle}`)
  }
  console.log("CompanyCard", details);
  return (
    <Card onClick={handleClick} className="m-3">
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text>{details.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CompanyCard;