import styled from "@emotion/styled";
import { Avatar, Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { ACTIVE_STATUS } from "../../constant";

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
  padding: "0px 30px",
}));

const HeaderTypo = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "bold",
  color: theme.primary.blackColor,
}));

const BodyContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: 20,
  padding: "30px",
  margin: "30px",
  marginTop: 0,
  borderRadius: "10px",
  overflowY: "auto",
  boxShadow: `0px 0px 10px ${theme.primary.boxShadowColor}`,
  minHeight: "200px",
}));

const BodyLeftContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  width: "20%",
  borderRadius: "50%",
}));

const BodyRightContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
}));

const CustomAvatar = styled(Avatar)(() => ({
  height: "100%",
  width: "100%",
}));

const DetailContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: 10,
  alignItems: "center",
}));

const CustomTypoGraphy = styled(Typography)(() => ({
  fontWeight: "bold",
}));

const StatusTypography = styled(Typography)(({status, theme}) => ({
    color: status === ACTIVE_STATUS ? theme.primary.greenColor : theme.primary.redColor,
}));

const CustomPhoneIcon = styled(PhoneIcon)(() => ({
  fontSize: "20px",
}));

const CustomEmailIcon = styled(EmailIcon)(() => ({
  fontSize: "20px",
}));

export {
  MainContainer,
  HeaderContainer,
  HeaderTypo,
  BodyContainer,
  BodyLeftContainer,
  BodyRightContainer,
  CustomAvatar,
  CustomTypoGraphy,
  DetailContainer,
  CustomPhoneIcon,
  CustomEmailIcon,
  StatusTypography,
};
