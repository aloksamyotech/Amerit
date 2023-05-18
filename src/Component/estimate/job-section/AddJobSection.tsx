import { JobSection } from './types';
import { Box } from '@mui/material';
import JobAccordion from './JobAccordion';
import JobSectionHeading from './JobSectionHeading';
import AddJobSectionItem from './AddJobSectionItem';

const AddJobSection = ({
  sectionNumber,
  removeElement,
  defaultExpanded
}: JobSection) => {
  return (
    <Box mt={2} mb={2}>
      <JobAccordion
        defaultExpanded={defaultExpanded}
        heading={<JobSectionHeading sectionNumber={sectionNumber} />}
        detail={
          <AddJobSectionItem
            removeElement={removeElement}
            sectionNumber={sectionNumber}
          />
        }
        panelCountText={sectionNumber?.toString()}
      />
    </Box>
  );
};

export default AddJobSection;
