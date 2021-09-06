import { useHistory } from 'react-router-dom';

import { Card } from 'react-bootstrap';

function CompanyCard({details}) {
  const history = useHistory();
  function handleClick() {
    history.push(`/companies/${details.handle}`)
  }
  return (
    <Card onClick={handleClick} className="mb-3">
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text>{details.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CompanyCard;