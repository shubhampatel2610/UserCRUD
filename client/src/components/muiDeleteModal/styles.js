import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import MuiButton from "../muiButton";

const DeleteModalContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "5px",
  boxShadow: 24,
  padding: "20px",
  background: theme.primary.whiteColor,
}));

const CustomTypo = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: theme.primary.blackColor,
  textAlign: "center",
}));

const DeleteButtonBoxContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  gap: 20,
  marginTop: "15px",
}));

const CancelButton = styled(MuiButton)(({ theme }) => ({
  padding: "8px 20px",
  color: theme.primary.blackColor,
  borderColor: theme.primary.buttonColor,
  background: theme.primary.whiteColor,
  fontSize: "14px",
  "&:hover":{
    color: theme.primary.whiteColor + " !important",
  }
}));

const DeleteButton = styled(MuiButton)(({ theme }) => ({
  padding: "8px 20px",
  color: theme.primary.whiteColor,
  background: theme.primary.buttonColor,
  fontSize: "14px",
}));

export {
  DeleteModalContainer,
  CustomTypo,
  DeleteButtonBoxContainer,
  CancelButton,
  DeleteButton,
};
