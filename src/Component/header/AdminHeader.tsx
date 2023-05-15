import { Box } from "@mui/material";


const AdminHeader  =  () => {

  return (
    <Box
      sx={{
        alignContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        justifyItems: 'center',
        background:'white'
      }}
    >
      {/* <Box >
        <img src='/images/logo_header.svg' width='165' height='70' alt="logo" onClick={()=>{
          router.push('/shop-admin');
        }} />
      </Box> */}
     
    </Box>
  );
};

export default AdminHeader ;
