import { useRouter } from 'next/router';
import { useQuery } from 'react-query';
import { Box } from '@mui/material';
import RepairJobs from '@components/repair-jobs';
import { HighPriorityBanner } from '@components/common/vendor-repair-order';
import { vendorRepairOrder as vendorRepairOrderFetch } from 'src/services/search';
import { HIGH_PRIORITY_VALUE, CONTENT_MAX_WIDTH } from 'src/constants';
import Header from './Header';
import Details from './Details';

const EstimateAccept = () => {
  const router = useRouter();
  const vendorRepairOrderId = router.query.vendorRepairOrderId as string;

  const { data: vendorRepairOrder } = useQuery(
    ['vendorRepairOrder', vendorRepairOrderId],
    () => vendorRepairOrderFetch(vendorRepairOrderId),
    { enabled: !!vendorRepairOrderId }
  );
  if (!vendorRepairOrder) return null;
  console.log(vendorRepairOrder);

  const { priority } = vendorRepairOrder;

  return (
    <Box>
      {priority === HIGH_PRIORITY_VALUE && <HighPriorityBanner />}
      <Box sx={{ maxWidth: CONTENT_MAX_WIDTH, margin: '30px auto' }}>
        <Header vendorRepairOrder={vendorRepairOrder} />
        <Details vendorRepairOrder={vendorRepairOrder} />
        <RepairJobs />
      </Box>
    </Box>
  );
};

export default EstimateAccept;
