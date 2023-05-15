import { Card, CardContent } from '@mui/material';
import { VendorRepairOrder } from '@components/common/vendor-repair-order/types';
import Content from './Content';
import { CONTAINER_BORDER_RADIUS } from 'src/constants';

const Details = ({
  vendorRepairOrder
}: {
  vendorRepairOrder: VendorRepairOrder;
}) => {
  return (
    <section aria-labelledby='details-header'>
      <Card
        sx={(theme) => ({
          border: `1px solid ${theme.palette.coolGrey.main}`,
          borderRadius: `${CONTAINER_BORDER_RADIUS}px`
        })}
      >
        <CardContent>
          <Content vendorRepairOrder={vendorRepairOrder} />
        </CardContent>
      </Card>
    </section>
  );
};

export default Details;
