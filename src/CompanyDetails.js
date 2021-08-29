import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import JoblyApi from './api';
import JobCard from './JobCard';
import { Container } from 'react-bootstrap';

function CompanyDetails() {
  const {handle} = useParams();
  
  const [details, setDetails] = useState();

  useEffect(() => {
    async function callApi() {
      let details = await JoblyApi.getCompany(handle);
      setDetails(details);
    }
    callApi();
  }, [handle])


  if(!details) {
    return <div>loading...</div>
  }

  return (
    <Container>
      <h1>{details.name}</h1>
      {details.jobs.map(j => {
        return <JobCard key={j.id} jobDetails={j}/>
      })}
    </Container>
  )
}

export default CompanyDetails;