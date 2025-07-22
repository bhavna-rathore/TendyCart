import React, { useState, useContext } from "react";

import { Box, Typography, Badge, Button, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { Link } from "react-router-dom";
import { LoginContext } from "../../context/ContextProvider";
import { useSelector } from "react-redux";

import Profile from "./Profile";
import LoginDialog from "../login/LoginDialog";

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: 5,
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  margin: "0 3% 0 3%",
  display: "flex",
  paddingLeft: "20px",
  "& > *": {
    marginRight: "40px !important",
    textDecoration: "none",
    color: "#FFFFFF",
    fontSize: 12,
    alignItems: "center",
    [theme.breakpoints.down("sm")]: {
      color: "#20b2aa",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      marginTop: 10,
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#20b2aa",
  background: "#FFFFFF",
  textTransform: "none",
  fontWeight: 600,
  borderRadius: 2,
  padding: "5px 40px",
  height: 32,
  boxShadow: "none",
  marginTop: "10px",
  [theme.breakpoints.down("sm")]: {
    background: "#20b2aa",
    color: "#FFFFFF",
  },
}));

const Text = styled(Typography)(({ theme }) => ({
  marginTop: 3,
  width: 135,
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
  },
}));

const Text2 = styled(Typography)(({ theme }) => ({
  marginTop: 3,
  display: "block",
  marginLeft: "8px",
  marginTop: "14px",
  [theme.breakpoints.down("sm")]: {
    marginTop: "10px",
  },
}));
const Text3 = styled(Typography)(({ theme }) => ({
  marginLeft: 5,
  [theme.breakpoints.down("sm")]: {
    marginLeft: 0,
  },
}));

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(LoginContext);

  const cartDetails = useSelector((state) => state.cart);
  const { cartItems } = cartDetails;

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile  account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialog()}>
          Login
        </LoginButton>
      )}
      <Text>Become a Seller</Text>
      <Text2>More</Text2>

      <Container
        to="/cart"
        style={{ display: "flex", flexDirection: "row", marginLeft: 5 }}
      >
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Text3>Cart</Text3>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} setAccount={setAccount} />
    </Wrapper>
  );
};

export default CustomButtons;
