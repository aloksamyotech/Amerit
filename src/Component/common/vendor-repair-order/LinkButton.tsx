import Link from 'next/link';
import { Button, SxProps, Theme } from '@mui/material';

const LinkButton = ({
  href,
  text,
  sx
}: {
  href: string;
  text: string;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Link href={href} passHref>
      <Button color='secondary' variant='contained' size='small' sx={sx}>
        {text}
      </Button>
    </Link>
  );
};

export default LinkButton;
