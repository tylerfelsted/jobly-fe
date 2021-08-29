import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import JoblyApi from './api'
import { Container } from 'react-bootstrap';

function JobList() {
  const [jobs, setJobs] = useState();

  useEffect(() => {
    async function apiCall() {
      let jobs = await JoblyApi.getJobs();
      setJobs(jobs);
    } 
    apiCall()
  }, []);
  
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