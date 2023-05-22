import { useState } from 'react';
import AddJobSection from '@components/estimate/job-section/AddJobSection';

const useJobSections = () => {
  const [jobSections, setJobSections] = useState<JSX.Element[]>([]);

  const handleAddSection = () => {
    const nextJobSectionId = jobSections?.length + 1;

    setJobSections([
      ...(jobSections as JSX.Element[]),
      <AddJobSection
        key={nextJobSectionId}
        sectionNumber={nextJobSectionId}
        removeElement={removeJobSection}
        defaultExpanded={true}
      />
    ]);
  };

  const removeJobSection = (index: number) => {
    const elements = jobSections;
    elements.splice(index, 1);
    setJobSections(elements);
  };

  return {
    jobSections,
    handleAddSection
  };
};

export default useJobSections;
