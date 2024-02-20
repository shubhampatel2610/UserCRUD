import styled from "@emotion/styled";
import { Avatar, Box } from "@mui/material";
import { MuiButton } from "../../components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

const MainContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  gap: "20px",
  padding: "10px 75px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 40px",
  },
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "15px",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    gap: 15
  },
}));

const InnerHeaderContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    justifyContent: "space-between"
  },
}));

const CustomSearchField = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
  [theme.breakpoints.down("sm")]: {
    width: "100%"
  },
}));

const CustomSearchButton = styled(MuiButton)(() => ({
  padding: "2.5px",
}));

const CustomAvatar = styled(Avatar)(() => ({
  height: 40,
  width: 40,
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

export {
  MainContainer,
  HeaderContainer,
  InnerHeaderContainer,
  CustomSearchField,
  CustomSearchButton,
  CustomAvatar,
  CustomViewIcon,
  CustomEditIcon,
  CustomDeleteIcon,
};
