import styled from "@emotion/styled";
import { Button, CircularProgress } from "@mui/material";

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.primary.buttonColor,
  color: theme.primary.whiteColor,
  padding: "5px 10px",
  border: `1px solid ${theme.primary.buttonColor}`,
  textTransform: "capitalize",
  borderRadius: "5px",
  whiteSpace: "nowrap",
  boxShadow: "none",
  "&:hover": {
    backgroundColor: theme.primary.buttonHoverColor,
    boxShadow: `0px 8px 10px ${theme.primary.boxShadowColor}`,
  },
}));

const StyledLoader = styled(CircularProgress)(({ theme }) => ({
  maxHeight: "20px",
  maxWidth: "20px",
  color: theme.primary.whiteColor,
  marginLeft: "5px",
}));

export { CustomButton, StyledLoader };
