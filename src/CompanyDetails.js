import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import { Container, Card } from 'react-bootstrap';

function CompanyDetails() {
  const {handle} = useParams();
  
  const [details, setDetails] = useState();

  useEffect(() => {
    async function callApi() {
      let details = await JoblyApi.getCompany(handle);
      setDetails(details);
    }
    callApi();
  }, [])


  if(!details) {
    return <div>loading...</div>
  }

  return (
    <Container>
      <h1>{details.name}</h1>
    </Container>
  )
}

export default CompanyDetails;