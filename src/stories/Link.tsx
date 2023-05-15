import React from 'react';
import { LinkProps } from 'next/link';
import LinkComponent from '@components/link';

export interface LinkComponentProps extends LinkProps {
  label: string;
}

export const Link = ({ label, ...rest }: LinkComponentProps) => (
  <LinkComponent {...rest}>{label}</LinkComponent>
);
