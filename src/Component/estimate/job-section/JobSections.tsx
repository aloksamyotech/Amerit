import { useContext } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';
import { JobSectionsContext } from '@components/vendor-repair-order/providers';
import JobSection from './JobSection';
import { Estimate } from './types';
import { VroLinesProvider } from './VroLinesProvider';

const JobSections = () => {
  const jobSectionsData = useContext(JobSectionsContext);
  const router = useRouter();
  const { vendorRepairOrderId } = router.query;

  return (
    <Box>
      {jobSectionsData?.jobSections?.map((job: Estimate) => {
        const {
          id,
          sectionTypeCode,
          vmrs,
          complaint,
          correction,
          cause,
          sectionSqNbr,
          lines,
          estimateAmount,
          actualAmount,
          notes,
          jobType,
        } = job;

        return (
          <VroLinesProvider key={sectionSqNbr} data={{ data: lines }}>
            <JobSection
              key={sectionSqNbr}
              type={sectionTypeCode}
              vmrs={vmrs}
              estimateAmount={estimateAmount}
              actualAmount={actualAmount}
              complaint={complaint}
              cause={cause}
              correction={correction}
              notes={notes}
              sectionNumber={sectionSqNbr}
              id={Number(vendorRepairOrderId || 0)}
              tmsRepairOrderSectionId={Number(id || 0)}
              jobType={jobType}
            />
          </VroLinesProvider>
        );
      })}
    </Box>
  );
};

export default JobSections;
