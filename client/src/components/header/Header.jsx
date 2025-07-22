import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  styled,
  ListItem,
} from "@mui/material";
import { Menu } from "@mui/icons-material";

import { Link } from "react-router-dom";

//components
import CustomButtons from "./CustomButtons";
import Search from "./Search";

const StyledHeader = styled(AppBar)`
  background: #20b2aa;
  height: 65px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  color: #ffffff;
  text-decoration: none;
  font-family:italian;
  font-size: 20px
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginLeft: 4,
});

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const CustomButtonWrapper = styled("span")(({ theme }) => ({
  margin: "0 5% 0 auto",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };



const list = () => (
  <Box sx={{ width: 200 }} onClick={handleClose}>
    <List>
      <ListItem disablePadding sx={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '11px' }}>
        {/* <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}> */}
          <CustomButtons />
        {/* </Box> */}
      </ListItem>
    </List>
  </Box>
);

  return (
    <StyledHeader position="fixed">
      <Toolbar style={{ minHeight: '65px' }}>
        <MenuButton color="inherit" onClick={handleOpen}>
          <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>
        <Component to="/">
          <Box component="span" style={{ display: "flex" }}>
         TendyCart
          </Box>
        </Component>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
