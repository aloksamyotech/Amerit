import NextLink, { LinkProps } from 'next/link';
import { styled } from '@mui/material';

// We should be composing Next's Link and MUI's Link components here
// so we get MUI's Link's use of Typography. However, after banging my
// head against it for far too long and referring to numerous resources
// detailing the process, I was unable to achieve it without either causing
// TS errors in my IDE or console errors. So I've taken the coward's
// way out.

const Link = styled(NextLink)<LinkProps>(({ theme }) => ({
  color: theme.palette.linkBlue.main,
  textDecoration: 'underline'
}));

// Cast as NextLink to avoid Storybook having a meltdown
export default Link as unknown as typeof NextLink;
