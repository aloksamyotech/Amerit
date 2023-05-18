import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  List,
  ListItem,
  Paper,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import { TERMS_MOCK } from 'src/mocks/admin-profile';
import { useProfile } from '../context/ProfileContext';
import { saveAdminTermsDetails } from 'src/services/admin';

const Terms = () => {
  const { updateTab, handleProgress, values } = useProfile();
  const [isAgree, setIsAgree] = useState<boolean>(false);
  const handlechange = (event: any) => {
    console.log(event.target.checked);
    setIsAgree(event.target.checked);
  };
  const handleSubmit = () => {
    saveAdminTermsDetails({
      id: Number(values?.userid),
      agreed: isAgree
    });
    handleProgress('terms');
    updateTab(4);
  };

  return (
    <Box width={'100%'} sx={{ marginLeft: '1.0rem' }}>
      <Paper
        elevation={2}
        sx={{
          padding: '1.5rem',
          '& .mail-color': {
            color: (theme) => theme.palette.linkBlue.main
          }
        }}
      >
        <FormControl fullWidth>
          <Typography variant='h4'>Terms and Conditions</Typography>
          <Box py={3}>
            {TERMS_MOCK.map((list, i) => (
              <Box py={1} key={`${i}`}>
                <Typography variant='h6'>{list.title}</Typography>
                <List
                  sx={{
                    listStyleType: 'disc',
                    pl: 5,
                    '& .MuiListItem-root': {
                      color: (theme) => theme.palette.charcoal.main,
                      display: 'list-item'
                    }
                  }}
                >
                  {list.listItem.map((item, i) => (
                    <ListItem key={`${i}`}>
                      <p dangerouslySetInnerHTML={{ __html: item }} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          <Typography>
            Please email your invoices to{' '}
            <a className='mail-color' href='mailto:ap@ameritfleet.com'>
              ap@ameritfleet.com
            </a>{' '}
            or they can be mailed to our Corporate Office.
            <br /> Amerit Fleet Solutions <br />
            Attn: Accounts Payable <br />
            1331 N California Blvd <br />
            Suite 150 <br />
            Walnut Creek, CA 94596
          </Typography>
          <Grid xs={6} pt={2}>
            <FormControlLabel
              control={<Checkbox onChange={handlechange} />}
              label='I agree to the above terms'
            />
            <Grid xs={3}>
              <Button
                color='secondary'
                variant='contained'
                size='large'
                onClick={handleSubmit}
              >
                Save Changes
              </Button>
            </Grid>
          </Grid>
        </FormControl>
      </Paper>
    </Box>
  );
};

export default Terms;
