import styled from "@emotion/styled";
import { Box, TextField } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  width: "96%",
  backgroundColor: theme.primary.whiteColor,
  borderRadius: "5px",
  border: `1px solid ${theme.primary.borderColor}`,
  outline: "none !important",
  padding: "5px 10px",
  "&:focus-within": {
    border: `1px solid ${theme.primary.buttonColor}`,
  },
  "& .MuiInputBase-input.Mui-disabled": {
    backgroundColor: "transparent",
    WebkitTextFillColor: theme.primary.placeholderColor,
  },
  "& input": {
    border: "none !important",
    color: theme.primary.placeholderColor,
    fontWeight: "400",
    lineHeight: "22px",
    padding: "0px",
    background: theme.primary.whiteColor,
    borderRadius: "unset",
  },
  "& input[type=number]::-webkit-outer-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  "& input[type=number]::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  fieldset: {
    border: "none",
  },
  "&input :-webkit-autofill": {
    outline: "none",
    border: "none",
    borderRadius: "unset",
  },
  "& :-webkit-autofill": {
    boxShadow: "0 0 0 30px white inset !important",
    outline: "none",
    border: "none",
    borderRadius: "unset",
  },
  "& :-webkit-autofill:hover": {
    outline: "none",
    border: "none",
    borderRadius: "unset",
  },
  "& :-webkit-autofill:focus": {
    WebkitTextFillColor: theme.primary.placeholderColor,
    outline: "none",
    border: "none",
    borderRadius: "unset",
  },
}));

const TextFieldContainer = styled(Box)(({ theme }) => ({
  marginBottom: "0px",
  width: "auto",
  label: {
    color: theme.primary.placeholderColor,
    paddingBottom: 8,
  },
}));

export { CustomTextField, TextFieldContainer };
