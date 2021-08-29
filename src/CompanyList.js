import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import JoblyApi from './api';
import { Container } from 'react-bootstrap';

function CompanyList() {

  const [companies, setCompanies] = useState();

  useEffect(() => {
    async function apiCall() {
      let companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    } 
    apiCall()
  }, []);

  if(!companies) {
    return <div>loading...</div>
  }

  return (
    <Container>
      {companies.map(c => {
        return <CompanyCard key={c.handle} details={c}/>
      })}
    </Container>
  ) 
}

export default CompanyList;