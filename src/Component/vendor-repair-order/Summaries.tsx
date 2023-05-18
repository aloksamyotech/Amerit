import { useEffect, useContext } from 'react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import LineItemsSummary from '@components/common/line-items-summary/LineItemsSummary';
import { JobSectionsContext } from '@components/vendor-repair-order/providers';
import { JobSectionsContextProvider } from '@components/estimate/job-section/types';
import { MAP_LINE_ITEM_TYPES_TO_PROP } from 'src/constants';
import { Summary } from './types';

const Summaries = () => {
  const theme = useTheme();
  const jobSectionsData: JobSectionsContextProvider = useContext(JobSectionsContext);

  const summaryInit: Summary = {
    labor: 0,
    parts: 0,
    shopSupplies: 0,
    fees: 0,
    sublet: 0,
    freight: 0,
    towing: 0,
    travel: 0,
    sectionTotal: 0
  };

  const summariseLineItems = (summary: Summary) => {
    jobSectionsData?.jobSections?.map((jobSection) => {
      if (jobSection?.lines) {
        // TODO: Add correct type on lineItem, currently one doesn't exist
        jobSection.lines.forEach((lineItem: any) => {
          const lineItemType = lineItem.vroLineTypeCode;
          const propName = MAP_LINE_ITEM_TYPES_TO_PROP[
            lineItemType
          ] as keyof Summary;
          if (propName) {
            summary[propName] += lineItem.vendEstQty * lineItem.vendEstUnitAmt;
          }
        });
      }
    });
  };

  const estimateSummary = { ...summaryInit };
  useEffect(() => {
    summariseLineItems(estimateSummary);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [jobSectionsData]);

  // TODO: Add same logic for actuals

  return (
    <Box>
      <Grid
        item
        xs={12}
        sx={{
          borderBottom: `1px solid ${theme.palette.charcoal[200]}`,
          paddingBottom: '10px'
        }}
      >
        <Typography
          color='charcoal.main'
          sx={{ fontWeight: 600, fontSize: '14px' }}
        >
          Vendor Estimate Total
        </Typography>
        <LineItemsSummary
          availableLineItemTypes={[]}
          vendorEstimateItem={estimateSummary}
        />
      </Grid>
      <Grid item xs={12} sx={{ padding: '20px 0 0 0' }}>
        <Typography
          color='charcoal.main'
          sx={{ fontWeight: 600, fontSize: '14px' }}
        >
          Completion Actual
        </Typography>
        <LineItemsSummary
          availableLineItemTypes={[]}
          vendorEstimateItem={summaryInit}
        />
      </Grid>
    </Box>
  );
};

export default Summaries;
