import { useNavigate } from "react-router-dom";
import { MuiButton } from "../../components";
import {
  BodyContainer,
  BodyLeftContainer,
  BodyRightContainer,
  CustomAvatar,
  CustomEmailIcon,
  CustomPhoneIcon,
  CustomTypoGraphy,
  DetailContainer,
  HeaderContainer,
  HeaderTypo,
  MainContainer,
} from "./style";
import { Typography } from "@mui/material";

const UserDetail = () => {
  const navigate = useNavigate();

  return (
    <MainContainer>
      <HeaderContainer>
        <HeaderTypo>{"User's Details"}</HeaderTypo>
        <MuiButton label={"Back"} onClick={() => navigate("/")} />
      </HeaderContainer>
      <BodyContainer>
        <BodyLeftContainer>
          <CustomAvatar alt="logo" src={""} />
        </BodyLeftContainer>
        <BodyRightContainer>
          <DetailContainer>
            <CustomTypoGraphy>{"Name:"}</CustomTypoGraphy>
            <Typography></Typography>
          </DetailContainer>
          <DetailContainer>
            <CustomTypoGraphy>{"Status:"}</CustomTypoGraphy>
            <Typography></Typography>
          </DetailContainer>
          <DetailContainer>
            <CustomTypoGraphy>{"Location:"}</CustomTypoGraphy>
            <Typography></Typography>
          </DetailContainer>
          <DetailContainer>
            <CustomPhoneIcon />
            <Typography></Typography>
          </DetailContainer>
          <DetailContainer>
            <CustomEmailIcon />
            <Typography></Typography>
          </DetailContainer>
        </BodyRightContainer>
      </BodyContainer>
    </MainContainer>
  );
};

export default UserDetail;
