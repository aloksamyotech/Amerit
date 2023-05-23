import { useState, useEffect, useContext } from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, IconButton, Typography } from '@mui/material';
import { JobSectionsContext } from '@components/vendor-repair-order/job-sections-provider';
import { deleteJobSection } from 'src/services/estimate';

const JobSectionHeading = ({ sectionNumber }: { sectionNumber: number }) => {
  const router = useRouter();
  const { vendorRepairOrderId } = router.query;

  const { refetch } = useContext(JobSectionsContext);

  const [sectionIdToDelete, setSectionIdToDelete] = useState(0);
  const { mutate: deleteJobSectionMutate, isSuccess } = useMutation<any, Error>(
    async () => {
      return (
        vendorRepairOrderId &&
        sectionIdToDelete &&
        (await deleteJobSection(
          Number(vendorRepairOrderId || 0),
          sectionIdToDelete
        ))
      );
    }
  );

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (sectionIdToDelete > 0) {
      deleteJobSectionMutate(); // TODO - BE needs to fix this and then call the refetch
    }
  }, [sectionIdToDelete]);

  const handleDeleteClick = (
    event: React.MouseEvent<HTMLElement>,
    sectionNumber: number
  ) => {
    setSectionIdToDelete(sectionNumber);
    event.stopPropagation();
  };

  return (
    <Box display='flex' sx={{ marginTop: '-3px' }}>
      <IconButton
        onClick={(event) => handleDeleteClick(event, sectionNumber)}
        data-testid={`job-section-${sectionNumber}-remove`}
        aria-label='trash'
        size='small'
      >
        <FontAwesomeIcon icon={faTrash} />
      </IconButton>
      <Typography
        fontSize={14}
        fontWeight={700}
        variant='h6'
        sx={{ marginTop: '3px' }}
      >
        Job Section: {sectionNumber}
      </Typography>
    </Box>
  );
};

export default JobSectionHeading;
