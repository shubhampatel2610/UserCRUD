import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";
import { MuiButton } from "../../components";

const MainContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "20px",
  padding: "10px 75px",
}));

const HeaderContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 30px",
}));

const HeaderTypo = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "bold",
  color: theme.primary.blackColor,
}));

const FormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 10,
  padding: "30px",
  margin: "30px",
  marginTop: 0,
  borderRadius: "10px",
  overflowY: "auto",
  boxShadow: `0px 0px 10px ${theme.primary.boxShadowColor}`,
  "& a": {
    textDecoration: "none",
    alignContent: "center",
  },
}));

const FormRow = styled(Box)(({ isLogo }) => ({
  width: "100%",
  display: "flex",
  gap: 5,
  justifyContent: isLogo ? "center" : "space-between",
}));

const InputBox = styled(Box)(() => ({
  minWidth: "49%",
  marginBottom: "20px",
}));

const CustomMuiButton = styled(MuiButton)(() => ({
  width: "100%",
}));

const CustomAvatar = styled(Avatar)(() => ({
  width: "60px",
  height: "60px",
}));

export {
  MainContainer,
  HeaderContainer,
  HeaderTypo,
  FormContainer,
  FormRow,
  InputBox,
  CustomMuiButton,
  CustomAvatar,
};
