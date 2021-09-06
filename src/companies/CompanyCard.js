import { useHistory } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './CompanyCard.css';

function CompanyCard({details}) {
  const history = useHistory();
  function handleClick() {
    history.push(`/companies/${details.handle}`)
  }
  return (
    <Card onClick={handleClick} className="CompanyCard mb-3">
      <Card.Body>
        <Card.Title>{details.name}</Card.Title>
        <Card.Text>{details.description}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CompanyCard;