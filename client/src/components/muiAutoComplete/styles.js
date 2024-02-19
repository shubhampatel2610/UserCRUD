import styled from "@emotion/styled";
import { Autocomplete, Box, Paper, TextField, Typography } from "@mui/material";

const SelectBox = styled(Box)(() => ({
  width: "100%",
}));

const LableText = styled(Typography)(({ theme }) => ({
  color: theme.primary.placeholderColor,
  paddingBottom: 8,
}));

const MuiDropdown = styled(Autocomplete)(({ theme, ...props }) => ({
  overflow: "block",
  padding: "0px",
  borderRadius: "5px",
  border: `1px solid ${theme.primary.borderColor}`,
  backgroundColor: props.disabled
    ? `${theme.primary.disabledColor}`
    : `${theme.primary.whiteColor} !important`,
  color: theme.primary.placeholderColor,
  "&.MuiAutocomplete-listbox": {
    backgroundColor: theme.primary.whiteColor,
    border: `1px solid ${theme.primary.borderColor}`,
  },
  fieldset: {
    border: "none !important",
  },
  "&.Mui-expanded": {
    border: `1px solid ${theme.primary.buttonColor} !important`,
  },
  "& .MuiOutlinedInput-root.MuiInputBase-sizeSmall": {
    padding: "3px",
  },
  "& .MuiAutocomplete-endAdornment": {
    paddingLeft: "3px",
    borderLeft: `1px solid ${theme.primary.borderColor}`,
  },
}));

const MuiInput = styled(TextField)(({ theme }) => ({
  "& .MuiAutocomplete-input": {
    color: theme.primary.blackColor,
    padding: "0px",
    border: "none !important",
  },
  "&:focus": {
    border: `1px solid ${theme.primary.buttonColor} !important`,
  },
  "& input": {
    padding: "0px",
  },
  "& .Mui-disabled": {
    color: theme.primary.placeholderColor,
  },
  borderRadius: "5px",
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  background: theme.primary.whiteColor,
  color: theme.primary.blackColor,
  border: `1px solid ${theme.primary.borderColor}`,
}));

export { MuiDropdown, MuiInput, LableText, SelectBox, CustomPaper };
