import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';
import { JobAccordionSection } from './types';

export default function JobAccordion({
  heading,
  detail,
  panelCountText,
  defaultExpanded
}: JobAccordionSection) {
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState(defaultExpanded);
  const mainSecondaryColor = theme.palette.secondary.main;
  const lightGoldColor = theme.palette.gold[200];

  useEffect(() => {
    setIsSelected(defaultExpanded);
  }, [defaultExpanded]);

  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      onChange={(event: React.SyntheticEvent, expanded: boolean) => {
        setIsSelected(expanded);
      }}
      sx={{
        border: `3px solid ${mainSecondaryColor}`,
        borderRadius: '4px',
        boxShadow: 'none'
      }}
    >
      <AccordionSummary
        sx={{
          backgroundColor: isSelected ? mainSecondaryColor : lightGoldColor,
          height: '36px'
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${panelCountText}a-content`}
        id={`${panelCountText}a-header`}
      >
        {heading}
      </AccordionSummary>
      <AccordionDetails>{detail}</AccordionDetails>
    </Accordion>
  );
}
