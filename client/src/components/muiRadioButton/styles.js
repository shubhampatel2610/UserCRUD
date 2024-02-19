import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const CheckboxContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  "& .MuiButtonBase-root": {
    padding: "2px 10px",
  },
  "& .Mui-checked": {
    color: `${theme.primary.buttonColor} !important`,
  },
}));

const SelectBox = styled(Box)(() => ({
  width: "100%",
}));

const LableText = styled(Typography)(({ theme }) => ({
  color: theme.primary.placeholderColor,
  paddingBottom: 8,
}));

export { CheckboxContainer, LableText, SelectBox };
