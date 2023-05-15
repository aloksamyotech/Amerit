import { Typography, styled } from '@mui/material';
import { TypographyFormattedDateTime } from './types';

const FormattedDateTime = ({
  date,
  direction,
  color,
  ...typographyProps
}: TypographyFormattedDateTime) => {
  if (date == null || date.length === 0) return <span>--</span>;

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour12: true,
    hour: '2-digit',
    minute: '2-digit'
  };

  const parsed = Date.parse(date);
  const formattedDate = new Intl.DateTimeFormat('en-US').format(parsed);
  const formattedTime = new Intl.DateTimeFormat('en-US', timeOptions).format(
    parsed
  );

  const StyledTime = styled('time')({
    display: 'flex',
    flexDirection: direction,
    gap: direction === 'row' ? '1em' : '0'
  });

  return (
    <StyledTime dateTime={date} data-testid='datetime'>
      <Typography component='span' color={color} {...typographyProps}>
        {formattedDate}
      </Typography>
      <Typography component='span' color={color} {...typographyProps}>
        {formattedTime}
      </Typography>
    </StyledTime>
  );
};

export default FormattedDateTime;
