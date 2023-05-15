const Accordion = () => {
  return {
    MuiAccordion: {
      styleOverrides: {
        root: {
        },
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          minHeight: 36,
          '&.Mui-expanded': {
            minHeight: 36,
          },
        },
      }
    }
  };
};

export default Accordion;
