import {
  Accordion,
  Grid,
  styled,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails,
  AccordionSummaryProps
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RepairJobProps } from '@components/common/vendor-repair-order/types';
import RepairJobHeading from './RepairJobHeading';

const PADDING = '20px';

const StyledRepairJobSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<FontAwesomeIcon icon='chevron-down' />}
    {...props}
  />
))(({ theme }) => ({
  padding: PADDING,
  '&.Mui-expanded': {
    borderBottom: `1px solid ${theme.palette.charcoal[100]}`
  }
}));

const StyledCellLabel = styled(Grid)(({ theme }) => ({
  color: theme.palette.charcoal.main,
  width: '40%',
  fontWeight: 600
}));

const StyledCellValue = styled(Grid)(({ theme }) => ({
  color: theme.palette.charcoal.main
}));

const RepairJob = ({
  repairJob,
  count,
  expanded,
  handleExpandedChange
}: RepairJobProps) => {
  return (
    <Accordion
      sx={{
        border: '1px solid charcoal[200]',
        borderRadius: '8px',
        backgroundColor: 'charcoal[50]',
        boxShadow: 'none',
        '&:before': {
          display: 'none'
        }
      }}
      expanded={expanded.has(repairJob.id)}
      onChange={handleExpandedChange}
      data-testid='repairjob'
    >
      <StyledRepairJobSummary id={`repair-job-${repairJob.id}`}>
        <RepairJobHeading
          count={count}
          repairJob={repairJob}
        ></RepairJobHeading>
      </StyledRepairJobSummary>
      <AccordionDetails sx={{ padding: PADDING }}>
        <Grid container columnSpacing={'50px'} rowSpacing={'20px'}>
          <Grid item sm={12} lg={6}>
            <StyledCellLabel item>Repair Reason:</StyledCellLabel>
            <StyledCellValue item>{repairJob.repairReason}</StyledCellValue>
          </Grid>
          <Grid item sm={12} lg={6}>
            <StyledCellLabel item>Complaint:</StyledCellLabel>
            <StyledCellValue item>{repairJob.complaint}</StyledCellValue>
          </Grid>
          <Grid item sm={12} lg={6}>
            <StyledCellLabel item>Description:</StyledCellLabel>
            <StyledCellValue item>{repairJob.description}</StyledCellValue>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  );
};

export default RepairJob;
