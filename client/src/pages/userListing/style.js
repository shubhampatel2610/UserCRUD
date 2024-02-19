import styled from "@emotion/styled";
import { Avatar, Box } from "@mui/material";
import { MuiButton } from "../../components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditNoteIcon from "@mui/icons-material/EditNote";
import DeleteIcon from "@mui/icons-material/Delete";

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
  marginTop: "15px",
}));

const InnerHeaderContainer = styled(Box)(() => ({
  display: "flex",
  gap: 10,
}));

const CustomSearchField = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 20,
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
