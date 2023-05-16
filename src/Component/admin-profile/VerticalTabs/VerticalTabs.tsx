import * as React from 'react';
import { Box, Card, Tab, Tabs, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons';
import AdminProfile from '../profile';
import TabPanel from '../TabPanel';
import AdminContacts from '../contact';
import Documents from '../documents';
import Shop from '../shop';
import Terms from '../terms';
import AddShop from '../shop/AddShop';
import UploadShop from '../shop/UploadShop';
import { useProfile } from '../context/ProfileContext';
import { VerticalTabsProps } from './types/VerticalTabsProps';

const VerticalTabs = () => {
  const { values, handleTabChange } = useProfile();
  const theme = useTheme();

  return values?.isAddNewShop ? (
    <AddShop />
  ) : values?.isUploadShop ? (
    <UploadShop />
  ) : (
    <Box
      sx={{
        display: 'flex',
        width: '100%'
      }}
    >
      <Card sx={{ width: '30%', minHeight: 0, height: '50%' }}>
        <Tabs
          value={values?.currentTab}
          onChange={handleTabChange}
          aria-label='ant example'
          orientation='vertical'
          variant='fullWidth'
          sx={{
            width: '100%',
            '& .MuiTabs-indicator': {
              backgroundColor: 'transparent'
            }
          }}
        >
          {values?.verticalTabs?.map(
            (item: VerticalTabsProps, index: number) => {
              return (
                <Tab
                  key={`admin-tab-${index}`}
                  value={index}
                  sx={{
                    textTransform: 'none',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontWeight: theme.typography.fontWeightRegular,
                    marginRight: 0,
                    color: theme.palette.tabColor.main,

                    '&:hover': {
                      color: theme.palette.common.white,
                      background: theme.palette.secondary.main,
                      opacity: 1
                    },
                    '&.Mui-selected': {
                      background: theme.palette.secondary.main,
                      color: theme.palette.common.white,
                      fontWeight: theme.typography.fontWeightMedium
                    },
                    '&.Mui-selected .MuiTab-iconWrapper': {
                      color: theme.palette.common.white
                    },
                    '&.Mui-focusVisible': {
                      backgroundColor: theme.palette.secondary.main
                    }
                  }}
                  label={item.text}
                  icon={
                    item.status ? (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        width='20px'
                        color='green'
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCircleChevronRight}
                        width='20px'
                        color='gray'
                      />
                    )
                  }
                  iconPosition='end'
                />
              );
            }
          )}
        </Tabs>
      </Card>

      <TabPanel value={Number(values?.currentTab)} index={0}>
        <AdminProfile />
      </TabPanel>
      <TabPanel value={Number(values?.currentTab)} index={1}>
        <AdminContacts />
      </TabPanel>
      <TabPanel value={Number(values?.currentTab)} index={2}>
        <Documents />
      </TabPanel>
      <TabPanel value={Number(values?.currentTab)} index={3}>
        <Shop />
      </TabPanel>
      <TabPanel value={Number(values?.currentTab)} index={4}>
        <Terms />
      </TabPanel>
    </Box>
  );
};
export default VerticalTabs;
