import { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles';

export default function JobAccordion({ heading, detail, panelCount }: any) {
  const theme = useTheme();
  const [isSelected, setIsSelected] = useState(false);
  const mainSecondaryColor = theme.palette.secondary.main;
  const lightGoldColor = theme.palette.gold[200];

  return (
    <Accordion
      onClick={() => setIsSelected(!isSelected)}
      sx={{
        border: `3px solid ${mainSecondaryColor}`,
        borderRadius: '4px',
        boxShadow: 'none',
      }}
    >
      <AccordionSummary
        sx={{
          backgroundColor: isSelected ? mainSecondaryColor : lightGoldColor,
          height: '36px',
        }}
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`${panelCount}a-content`}
        id={`${panelCount}a-header`}
      >
        {heading}
      </AccordionSummary>
      <AccordionDetails>{detail}</AccordionDetails>
    </Accordion>
  );
}
