import styled from "@emotion/styled";
import { Box, CircularProgress } from "@mui/material";

const LoadingBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40vh",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50% , -50%)",
  margin: "70px 0",
});

const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.primary.buttonColor,
}));

export { LoadingBox, CustomCircularProgress };
