import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type NavigationItem = {
  id: string;
  text: string;
  path: string;
  icon?: IconProp;
};
