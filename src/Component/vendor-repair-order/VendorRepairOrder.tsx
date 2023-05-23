import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import { Box, Button } from '@mui/material';
import { HighPriorityBanner } from '@components/common/vendor-repair-order';
import JobSections from '@components/estimate/job-section/JobSections';
import useJobSections from '@hooks/job-sections';
import { vendorRepairOrder as vendorRepairOrderFetch } from 'src/services/search';
import { HIGH_PRIORITY_VALUE, CONTENT_MAX_WIDTH } from 'src/constants';
import JobSectionsProvider from './job-sections-provider';
import MessagingProvider from '@components/messaging/provider';
import TaxesProvider from './taxes-provider';
import Details from './Details';
import Header from './Header';

const VendorRepairOrder = () => {
  const router = useRouter();

  const { jobSections, handleAddSection } = useJobSections();

  const { vendorRepairOrderId } = router.query;

  const { data: vendorRepairOrder } = useQuery(
    ['vendorRepairOrder', vendorRepairOrderId],
    () => vendorRepairOrderFetch(vendorRepairOrderId as string),
    { enabled: !!vendorRepairOrderId }
  );

  if (!vendorRepairOrder) return null;

  const { priority } = vendorRepairOrder;

  return (
    <JobSectionsProvider>
      <MessagingProvider>
        <TaxesProvider>
          <Box>
            {priority === HIGH_PRIORITY_VALUE && <HighPriorityBanner />}
            <Box sx={{ maxWidth: CONTENT_MAX_WIDTH, margin: '0 auto' }}>
              <Header vendorRepairOrder={vendorRepairOrder} />
              <Details vendorRepairOrder={vendorRepairOrder} />
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
            </Box>
          </Box>
        </TaxesProvider>
      </MessagingProvider>
    </JobSectionsProvider>
  );
};

export default VendorRepairOrder;
