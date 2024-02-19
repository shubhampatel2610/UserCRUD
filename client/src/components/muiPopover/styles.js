import styled from "@emotion/styled";
import { Popover, IconButton } from "@mui/material";

const CustomPopover = styled(Popover)(({ theme }) => ({
  pointerEvents: "none",
  "& .MuiPopover-paper": {
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    zIndex: "-1",
    border: `1px solid ${theme.primary.boxShadowColor}`,
    boxShadow: `0px 8px 18px ${theme.primary.boxShadowColor}`,
    color: theme.primary.blackColor,
    marginTop: "5px",
  },
  "& a": {
    textDecoration: "none",
    color: theme.primary.placeholderColor,
  },
}));

const MainIconButton = styled(IconButton)(({ isShadow }) => ({
  "&:hover": {
    backgroundColor: !isShadow && "transparent",
  },
}));

export { CustomPopover, MainIconButton };
