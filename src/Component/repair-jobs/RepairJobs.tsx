import { useState, SyntheticEvent } from 'react';
import { Box } from '@mui/material';
import RepairJob from '@components/repair-job';
import { repairJobs } from '../../mocks/repair-job';

const RepairJobs = () => {
  // Maintain state for which accordions are expanded
  const [expandedAccordions, setExpandedAccordions] = useState<Set<number>>(
    new Set()
  );

  const addExpanded = (newId: number) => {
    setExpandedAccordions((previous) => new Set(previous.add(newId)));
  };

  const removeExpanded = (removeId: number) => {
    setExpandedAccordions(
      (previous) => new Set(Array.from(previous).filter((x) => x !== removeId))
    );
  };

  const handleExpandedChange = (event: SyntheticEvent<Element, Event>) => {
    const id = Number(event?.currentTarget?.id?.replace(/^repair-job-/, ''));
    if (!id) return;

    if (expandedAccordions.has(id)) {
      removeExpanded(id);
    } else {
      addExpanded(id);
    }
  };

  return (
    <Box
      sx={{
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px'
      }}
      data-testid='repair-jobs'
    >
      {repairJobs.map((repairJob, index) => (
        <RepairJob
          key={repairJob.id}
          count={index + 1}
          repairJob={repairJob}
          expanded={expandedAccordions}
          handleExpandedChange={handleExpandedChange}
        />
      ))}
    </Box>
  );
};

export default RepairJobs;
