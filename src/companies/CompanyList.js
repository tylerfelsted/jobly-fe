import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import CompanyCard from "./CompanyCard";
import JoblyApi from '../api';
import { Container } from 'react-bootstrap';

function CompanyList() {
  const initialValues = {
    search: ""
  }
  const [companies, setCompanies] = useState();
  const [formData, setFormData] = useState(initialValues);
  const history = useHistory();

  useEffect(() => {
    async function apiCall() {
      try {
        let companies = await JoblyApi.getCompanies();
        setCompanies(companies);
      } catch(e) {
        alert("Please log in to view this page")
        history.push('/login');
      } 
    }
    apiCall()
  }, [history]);

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const companies = await JoblyApi.searchCompanies(formData.search);
    setCompanies(companies);
  }

  if(!companies) {
    return <div>loading...</div>
  }

  return (
    <Container>
      <h1>Companies</h1>
      <form className="mb-3" onSubmit={async (e) => await handleSubmit(e)}>
        <input type="text" name="search" value={formData.serach} onChange={handleChange}/>
        <button>Search</button>
      </form>
      {companies.map(c => {
        return <CompanyCard key={c.handle} details={c}/>
      })}
    </Container>
  ) 
}

export default CompanyList;