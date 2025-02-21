import { useEffect, useState } from 'react';
import Job from './Job';
import Spinner from './Spinner';


function JobListings({ isHome = false }: { isHome?: boolean }) {

  const [jobs, setJobs] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const fecthJobs = async() => {
      const ApiUrl = isHome ? '/api/jobs?_limit=3' : 'api/jobs'
      try{
      const res = await fetch(ApiUrl)
      console.log("oi", ApiUrl)
      const data = await res.json();
      setJobs(data)
      }
      catch (error)
      {
        console.log("Qual erro ", error)
      }finally{
        setLoading(false)
      }
    }
    fecthJobs();
  }, []);

  return (
    <>
    <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            Browse Jobs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {loading ? (<Spinner loading={loading}/>) :  (
              <>
              {jobs.map((job) =>(
                <Job key={job.id} job={job}/>
                

            ))}
            </>
          )}
            

          </div>

          
        </div>
      </section>
    </>
  )
}

export default JobListings