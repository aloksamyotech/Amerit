import { VerticalTabsProps } from '../VerticalTabs/types/VerticalTabsProps';

export type profileContext = {
  values: Values | null;
  setUserid: (id: number) => void;
  addNewShop: (state: boolean) => void;
  uploadShop: (state: boolean) => void;
  updateTab: (index: number) => void;
  handleProgress: (value: string) => void;
  handleTabChange: (newValue: number) => void;
};

export type Values = {
  userid: number;
  currentTab: number;
  isAddNewShop: boolean;
  isUploadShop: boolean;
  verticalTabs: VerticalTabsProps[];
  completed: number;
  isComplete: {
    [key: string]: boolean;
  };
};
