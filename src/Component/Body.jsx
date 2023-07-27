

import { useState, useEffect, useCallback } from "react";

import ApartmentIcon from '@mui/icons-material/Apartment';
import Filter from "./Filter";

const Body = () => {
  const [jobs, setJobs] = useState([]); 
  const url = "https://entryleveljobs.me/api/jobs";

  const getJobs = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data.data);
      });
  };

  useEffect(() => {
    getJobs();
  }, );
// iam trying to filter the jobs by their jodId
  const filterJobs = useCallback((jobCatergory) => {
    const filtered = jobs.filter((jobDataCate) => jobDataCate.jobId == jobCatergory)
    setJobs(filtered);
  }, [jobs]);

  return (
    <section className="job-section">
      <div className="filter-section">
        <h2>Filter jobs by types</h2>
        <Filter filterFuctionJ={filterJobs}/>
      </div>
      <div className="job-listing-section">
        <h2>Job Listing section</h2>
        <div className="job-list-grid-con">
          {jobs.map((jobInfo) => {
            return (
              <div className="job-con" key={jobInfo.id}>
                <p><ApartmentIcon className="job-icon" /></p>
                <p><span>Company name:</span> {jobInfo.companyName} </p>
                <p><span>Position:</span> {jobInfo.position}</p>
                <p><span>Job description:</span> <br /> {jobInfo.description}</p>
                <button> <a href={jobInfo.link}>Apply now</a></button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Body;









  