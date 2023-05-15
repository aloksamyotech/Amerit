import { VerticalTabsProps } from '../VerticalTabs/types/VerticalTabsProps';

export type profileContext = {
  values: Values | null;
  addNewShop: (state: boolean) => void;
  uploadShop: (state: boolean) => void;
  updateTab: (index: number) => void;
  handleProgress: (value: string) => void;
  handleTabChange: (_: React.SyntheticEvent, newValue: number) => void;
};

export type Values = {
  currentTab: number;
  isAddNewShop: boolean;
  isUploadShop: boolean;
  verticalTabs: VerticalTabsProps[];
  completed: number;
  isComplete: {
    [key: string]: boolean;
  };
};
