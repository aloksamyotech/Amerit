import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type VerticalTabsProps = {
  id: number;
  text: string;
  url: string;
  icon?: IconProp;
  status: boolean;
};
