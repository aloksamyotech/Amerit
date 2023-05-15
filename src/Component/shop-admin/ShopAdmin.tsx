import { useRouter } from "next/router";
import { Box, Paper, Typography } from "@mui/material";
import { ContainedButton, OutlinedButton } from "@core/theme/component-overrides/admin-buttons";

const ShopAdmin = () => {
  const router = useRouter();

  return (
    <Paper>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2.0rem',
        alignContent: 'center',
        justifyContent: "center",
        alignItems: "center",
        justifyItems: "center",
        maxWidth: "40.5rem",
        borderColor: "#E9EAEB"
      }}>

        <Box>
          <img src="/images/logo_header.svg" width="165" height="70" alt="logo" />
        </Box>

        <Typography variant="h3" sx={{ fontWeight: 700, textAlign: "center" }}>
          Welcome to the Amerit Fleet Vendor Portal
        </Typography>

        <Box
          sx={{
            display:'flex',
            direction: "row",
            gap: "1.0rem",
            paddingTop: "1.0rem",
            justifyContent: "center",
            alignItems: "center",
            justifyItems: "center"
          }}
        >
         
          <ContainedButton onClick={() => {
            router.push('/shop-admin/login');
          }}>Login</ContainedButton>
          <OutlinedButton onClick={() => {
            router.push('/shop-admin/login');
          }}>Register</OutlinedButton>
        </Box>
      </Box>
    </Paper>
  );
};

export default ShopAdmin;
