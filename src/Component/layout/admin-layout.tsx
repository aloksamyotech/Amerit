import React from "react";
import AdminHeader from "../header/AdminHeader";


import { Box, BoxProps, styled } from '@mui/material';
import { LayoutProps } from './types';

const LayoutContainer = styled(Box)<BoxProps>({
  height: '100%',
  display: 'flex',
  background:'#fff'
});

const MainContentContainer = styled(Box)<BoxProps>({
  flexGrow: 1,
  minWidth: 0,
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  background:'#fff'

  
});

const ContentContainer = styled('main')(() => ({
  width: '100%',
  display:'flex',
  flexDirection:'column',
  justifyContent: "center",
  alignItems: "center",
 background:'#fff'

}));


export const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
    <MainContentContainer>
        <AdminHeader/>
      <ContentContainer>{children}</ContentContainer>
    </MainContentContainer>
  </LayoutContainer>
  );
};

export default AdminLayout;
