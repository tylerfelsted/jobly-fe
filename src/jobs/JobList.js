import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import JobCard from "./JobCard";
import JoblyApi from '../api'
import { Container } from 'react-bootstrap';

function JobList() {
  const [jobs, setJobs] = useState();

  const history = useHistory();

  useEffect(() => {
    async function apiCall() {
      try{
        let jobs = await JoblyApi.getJobs();
        setJobs(jobs);
      } catch(e) {
        alert("Please log in to view this page")
        history.push('/login')
      }
    } 
    apiCall()
  }, [history]);
  
  if(!jobs) {
    return <div>loading...</div>
  }

  return (
    <Container>
      <h1>Jobs</h1>
      {jobs.map(j => (
        <JobCard key={j.id} jobDetails={j}/>
      ))}
    </Container>
  )
}

export default JobList;