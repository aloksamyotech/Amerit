import { JobSection } from './types';
import { Box } from '@mui/material';
import JobAccordion from './JobAccordion';
import JobSectionHeading from './JobSectionHeading';
import AddJobSectionItem from './AddJobSectionItem';

const AddJobSection = ({ sectionNumber, removeElement }: JobSection) => {
  return (
    <Box mt={2} mb={2}>
      <JobAccordion
        heading={<JobSectionHeading sectionNumber={sectionNumber} />}
        detail={<AddJobSectionItem removeElement={removeElement} sectionNumber={sectionNumber}/>}
        panelCountText={sectionNumber?.toString()}
      />
    </Box>
  );
};

export default AddJobSection;
