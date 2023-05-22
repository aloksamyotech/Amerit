import { Box, Grid, Typography, useTheme } from '@mui/material';
import LineItemsSummary from '@components/common/line-items-summary/LineItemsSummary';
import useSummaries from '@hooks/summaries';

const Summaries = () => {
  const theme = useTheme();

  const { summary, summaryInit } = useSummaries();

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
          vendorEstimateItem={summary}
          taxes={summary.taxes}
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
          taxes={summaryInit.taxes}
        />
      </Grid>
    </Box>
  );
};

export default Summaries;
