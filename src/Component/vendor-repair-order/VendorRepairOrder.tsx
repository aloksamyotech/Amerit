import { useState } from 'react';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import RepairJobs from '@components/repair-jobs';
import { HighPriorityBanner } from '@components/common/vendor-repair-order';
import AddJobSection from '@components/estimate/job-section/AddJobSection';
import JobSections from '@components/estimate/job-section/JobSections';
import { vendorRepairOrder as vendorRepairOrderFetch } from 'src/services/search';
import { HIGH_PRIORITY_VALUE, CONTENT_MAX_WIDTH } from 'src/constants';
import JobSectionsProvider from './providers';
import Details from './Details';
import Header from './Header';

const VendorRepairOrder = () => {
  const router = useRouter();

  const { vendorRepairOrderId } = router.query;

  const { data: vendorRepairOrder } = useQuery(
    ['vendorRepairOrder', vendorRepairOrderId],
    () => vendorRepairOrderFetch(vendorRepairOrderId as string),
    { enabled: !!vendorRepairOrderId }
  );

  const [jobSections, setJobSections] = useState<JSX.Element[]>([]);

  const handleAddSection = () => {
    const nextJobSectionId = jobSections?.length + 1;

    setJobSections([
      ...(jobSections as JSX.Element[]),
      <AddJobSection
        key={nextJobSectionId}
        sectionNumber={nextJobSectionId}
        removeElement={removeJobSection}
        defaultExpanded={true}
      />
    ]);
  };

  const removeJobSection = (index: number) => {
    const elements = jobSections;
    elements.splice(index, 1);
    setJobSections(elements);
  };

  if (!vendorRepairOrder) return null;

  // TODO: This determines whether the additional UI elements
  // and editable fields should be available.
  // Should be either a prop or derived through some other means
  const estimateCreate = true;

  const { priority } = vendorRepairOrder;

  return (
    <JobSectionsProvider>
      <Box>
        {priority === HIGH_PRIORITY_VALUE && <HighPriorityBanner />}
        <Box sx={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto' }}>
          <Header vendorRepairOrder={vendorRepairOrder} />
          <Details
            vendorRepairOrder={vendorRepairOrder}
            estimateCreate={estimateCreate}
          />
          <Box
            sx={{
              marginTop: '30px',
              marginBottom: '30px',
              display: 'flex',
              justifyContent: 'right',
              gap: '30px'
            }}
          >
            <Button
              color='secondary'
              variant='contained'
              onClick={handleAddSection}
              data-testid='add-section-button'
            >
              Add Section
            </Button>
          </Box>
          {jobSections}
          <JobSections />
          <RepairJobs />
        </Box>
      </Box>
    </JobSectionsProvider>
  );
};

export default VendorRepairOrder;
