import { createContext, useState, ReactNode, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import {
  Estimate,
  JobSectionsContextProvider
} from '@components/estimate/job-section/types';
import { jobs } from 'src/services/estimate';

const JobSectionsContext = createContext<JobSectionsContextProvider>(
  {} as JobSectionsContextProvider
);

const JobSectionsProvider = ({ children }: { children: ReactNode }) => {
  const [jobSections, setJobSections] = useState<Estimate[]>([]);
  const router = useRouter();

  const { vendorRepairOrderId } = router.query;
  const { data: jobSectionsResults, refetch } = useQuery(
    ['jobs', vendorRepairOrderId],
    () => vendorRepairOrderId && jobs(vendorRepairOrderId as string)
  );

  useEffect(() => {
    if (jobSectionsResults) {
      setJobSections(jobSectionsResults);
    }
  }, [jobSectionsResults]);

  return (
    <JobSectionsContext.Provider value={{ jobSections, refetch }}>
      {children}
    </JobSectionsContext.Provider>
  );
};

export default JobSectionsProvider;
export { JobSectionsContext };
