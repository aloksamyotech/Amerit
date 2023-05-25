import { useContext } from 'react';
import { Control } from 'react-hook-form';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import LineItemsSummary from '@components/common/line-items-summary/LineItemsSummary';
import useSummaries from '@hooks/summaries';
import { EstimateMetadata } from './types';
import { TaxesContext } from './taxes-provider';

const Summaries = ({
  control
}: {
  control?: Control<EstimateMetadata, any>;
}) => {
  const theme = useTheme();
  const { summary, summaryInit } = useSummaries();

  const { estimateTaxes, setEstimateTaxes, actualTaxes, setActualTaxes } =
    useContext(TaxesContext);

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
          taxes={estimateTaxes}
          setTaxes={setEstimateTaxes}
          control={control}
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
          taxes={actualTaxes}
          setTaxes={setActualTaxes}
          control={control}
        />
      </Grid>
    </Box>
  );
};

export default Summaries;
