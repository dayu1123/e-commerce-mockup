import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import { useHistory } from "react-router-dom";
// import Typography from "@mui/material/Typography";

const ContainerImage = styled("div")(() => ({
  flexGrow: 1,
}));
const Header = () => {
  const history = useHistory();
  return (
    <Box>
      <AppBar position="fixed" sx={{ background: "#FFFFFF" }} elevation={0}>
        <Toolbar>
          <ContainerImage sx={{ flexGrow: 0.4 }}>
            <img
              src="https://www.pasarwarga.com/images/logo/logo-pw.png"
              alt="Pasar-warga"
              onClick={() => history.push("/home")}
              style={{ cursor: "pointer" }}
            />
          </ContainerImage>
          {/* <Typography sx={{ color: "black", ml: 2, mt: 1 }}>News</Typography>
          <Typography component="div" sx={{ color: "black", ml: 2, mt: 1 }}>
            News
          </Typography> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
