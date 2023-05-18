import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import JobAccordion from './JobAccordion';
import JobSectionHeader from './JobSectionHeader';
import EditJobSectionItem from './EditJobSectionItem';
import { Estimate } from './types';

const JobSection = ({
  jobType,
  vmrs,
  estimateAmount,
  actualAmount,
  complaint,
  correction,
  cause,
  notes,
  sectionNumber,
  id,
  tmsRepairOrderSectionId,
}: Estimate) => {
  const [totalEstimateAmount, setTotalEstmateAmount] = useState(estimateAmount);
  const [totalActualAmount, setTotalActualAmount] = useState(actualAmount);

  useEffect(() => {
    setTotalEstmateAmount(estimateAmount);
  }, [estimateAmount]);

  return (
    <Box mt={2} mb={2}>
      <JobAccordion
        heading={
          <JobSectionHeader
            id={tmsRepairOrderSectionId}
            type={jobType}
            vmrs={vmrs}
            estimateAmount={totalEstimateAmount}
            actualAmount={totalActualAmount}
          />
        }
        detail={
          <EditJobSectionItem
            type={jobType}
            vmrs={vmrs}
            estimateAmount={totalEstimateAmount}
            actualAmount={actualAmount}
            complaint={complaint}
            cause={cause}
            correction={correction}
            notes={notes}
            setTotalEstmateAmount={setTotalEstmateAmount}
            setTotalActualAmount={setTotalActualAmount}
            id={id}
            tmsRepairOrderSectionId={tmsRepairOrderSectionId}
          />
        }
        panelCountText={sectionNumber?.toString()}
      />
    </Box>
  );
};

export default JobSection;
