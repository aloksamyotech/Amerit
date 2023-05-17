import { ReactNode, createContext, useContext, useState } from 'react';
import { AdminVerticalMenu } from '../__mocks__/utils';
import { Values, profileContext } from './types';

const profileContextDefaultValues: profileContext = {
  values: null,
  addNewShop: () => {
    return undefined;
  },
  uploadShop: () => {
    return undefined;
  },
  updateTab: () => {
    return undefined;
  },
  handleTabChange: () => {
    return undefined;
  },
  handleProgress: () => {
    return undefined;
  },
  setUserid: () => {
    return undefined;
  }
};

const ProfileContext = createContext<profileContext>(
  profileContextDefaultValues
);

export function useProfile() {
  return useContext(ProfileContext);
}

type Props = {
  children: ReactNode;
};

export function ProfileProvider({ children }: Props) {
  const [values, setValues] = useState<Values>({
    userid: 0,
    currentTab: 0,
    isAddNewShop: false,
    isUploadShop: false,
    verticalTabs: AdminVerticalMenu,
    completed: 0,
    isComplete: {
      profile: false,
      contact: false,
      document: false,
      shop: false,
      terms: false
    }
  });
  const addNewShop = (state: boolean) =>
    setValues((prev) => ({ ...prev, isAddNewShop: state }));
  const setUserid = (id: number) =>
    setValues((prev) => ({ ...prev, userid: id }));
  const uploadShop = (state: boolean) =>
    setValues((prev) => ({ ...prev, isUploadShop: state }));

  const updateTab = (index: number) => {
    setValues((prev) => ({ ...prev, currentTab: index + 1 }));
    const newArray = [...values.verticalTabs];
    newArray[index].status = true;
    setValues((prev) => ({ ...prev, verticalTabs: newArray }));
  };

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setValues((prev) => ({ ...prev, currentTab: newValue }));
  };

  const handleProgress = (tab: string) => {
    if (!values.isComplete[tab]) {
      setValues((prev) => ({
        ...prev,
        completed: prev.completed + 20,
        isComplete: {
          ...prev.isComplete,
          [tab]: true
        }
      }));
    }
  };

  const value = {
    values,
    addNewShop,
    uploadShop,
    updateTab,
    setUserid,
    handleTabChange,
    handleProgress
  };

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
}
