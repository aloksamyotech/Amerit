import * as React from 'react';
import { useRouter } from 'next/router';
import { Box, Card, Tab, Tabs, useTheme } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheckCircle,
  faCircleChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Profile from '../profile';
import TabPanel from '../TabPanel';
import Contacts from '../contact';
import Documents from '../documents';
import Shop from '../shop';
import Terms from '../terms';
import AddShop from '../shop/AddShop';
import UploadShop from '../shop/UploadShop';
import { useProfile } from '../context/ProfileContext';
import { VerticalTabsProps } from './types/VerticalTabsProps';

const Path = '/shop-admin/admin-profile/';

const VerticalTabs = (props: { path: string }) => {
  const router = useRouter();
  const { values, handleTabChange } = useProfile();
  const theme = useTheme();

  const handleClick = (tab: string, index: number) => {
    router.push(`${Path + tab}`);
    handleTabChange(index);
  };

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
                  onClick={() => handleClick(item.url, index)}
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

      {props.path === 'profile' ? (
        <TabPanel value={0} index={0}>
          <Profile />
        </TabPanel>
      ) : null}

      {props.path === 'contacts' ? (
        <TabPanel value={1} index={1}>
          <Contacts />
        </TabPanel>
      ) : null}

      {props.path === 'documents' ? (
        <TabPanel value={2} index={2}>
          <Documents />
        </TabPanel>
      ) : null}
      {props.path === 'shops' ? (
        <TabPanel value={3} index={3}>
          <Shop />
        </TabPanel>
      ) : null}
      {props.path === 'terms' ? (
        <TabPanel value={4} index={4}>
          <Terms />
        </TabPanel>
      ) : null}
    </Box>
  );
};
export default VerticalTabs;
