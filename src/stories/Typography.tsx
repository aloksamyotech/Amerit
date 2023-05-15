import React from 'react';
import {
  Typography as MuiTypography,
  TypographyProps as MuiTypographyProps
} from '@mui/material';

export interface TypographyProps extends MuiTypographyProps {
  label: string;
}

export const Typography = ({ label, ...rest }: TypographyProps) => (
  <MuiTypography {...rest}>{label}</MuiTypography>
);
