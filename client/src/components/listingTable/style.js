import styled from "@emotion/styled";
import {
  Box,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import MuiPopover from "../muiPopover";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

const CustomTable = styled(Table)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.primary.whiteBgColor,
  padding: "0",
  minWidth: 650,
  maxHeight: "80vh",
  overflowY: "auto",
  marginTop: "15px",
  border: `1px solid ${theme.primary.borderColor}`,
  boxShadow: `0px 0px 20px ${theme.primary.boxShadowColor}`,
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",
}));

const CustomHeader = styled(TableHead)(({ theme }) => ({
  fontWeight: 700,
  backgroundColor: theme.primary.headerBgColor,
}));

const CustomHeadLabel = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  borderBottom: `1px solid ${theme.primary.borderBottomColor}`,
}));

const CustomTableCell = styled(TableCell)(({ theme, isBody }) => ({
  border: "none !important",
  wordWrap: "break-word",
  color: isBody ? theme.primary.blackColor : theme.primary.whiteColor,
  padding: "15px 20px",
  maxWidth: "250px",
  whiteSpace: "nowrap",
}));

const CustomBody = styled(TableBody)(({ theme }) => ({
  backgroundColor: theme.primary.whiteBgColor,
  border: "none",
  margin: "0",
  padding: 0,
}));

const CustomTableRow = styled(TableRow)(({ theme }) => ({
  borderBottom: `1px solid ${theme.primary.borderColor}`,
}));

const MenuIcon = styled(MoreVertOutlinedIcon)(({ theme }) => ({
  color: `${theme.primary.blackColor} !important`,
}));

const StyledPopover = styled(MuiPopover)(() => ({
  "& .MuiPopover-paper": {
    marginTop: "35px ",
    marginLeft: "100px",
  },
}));

const PopoverBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: "2px",
  "& a": {
    width: "100%",
    borderRadius: "5px",
    ":hover": {
      background: theme.primary.borderColor,
    },
  },
}));

const PopoverItem = styled(Box)(() => ({
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  gap: "12px",
  padding: "2px 10px",
}));

const MenuLabels = styled(Typography)(() => ({
  fontSize: "16px",
}));

const CustomViewIcon = styled(VisibilityIcon)(({ theme }) => ({
  color: theme.primary.greenColor,
}));

const CustomEditIcon = styled(EditNoteIcon)(({ theme }) => ({
  color: theme.primary.blueColor,
}));

const CustomDeleteIcon = styled(DeleteIcon)(({ theme }) => ({
  color: theme.primary.redColor,
}));

const StyledFooter = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  color: theme.primary.borderColor,
  width: "100%",
}));

const StyledPagination = styled(Pagination)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  color: theme.primary.borderColor + "!important",
  borderRadius: "5px",
  height: "40px",

  "& button": {
    border: `1px solid ${theme.primary.borderColor}`,
    color: theme.primary.blackColor,
    "& svg": {
      color: theme.primary.blackColor,
    },
    "&.Mui-selected": {
      backgroundColor: theme.primary.buttonColor,
      color: theme.primary.whiteColor,
    },
  },
}));

export {
  CustomTable,
  CustomHeader,
  CustomTableCell,
  CustomHeadLabel,
  CustomBody,
  CustomTableRow,
  MenuIcon,
  StyledPopover,
  PopoverBox,
  PopoverItem,
  MenuLabels,
  CustomViewIcon,
  CustomEditIcon,
  CustomDeleteIcon,
  StyledFooter,
  StyledPagination,
};
