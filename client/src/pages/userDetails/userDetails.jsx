import { useLocation, useNavigate } from "react-router-dom";
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
  StatusTypography,
} from "./style";
import { Typography } from "@mui/material";

const UserDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedUserData = location?.state?.userData ?? {};

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
            <Typography>
              {selectedUserData?.firstName +
                " " +
                selectedUserData?.lastName +
                " "}
              {`(${(selectedUserData?.gender[0])})`}
            </Typography>
          </DetailContainer>
          <DetailContainer>
            <CustomTypoGraphy>{"Status:"}</CustomTypoGraphy>
            <StatusTypography status={selectedUserData?.status}>{selectedUserData?.status}</StatusTypography>
          </DetailContainer>
          <DetailContainer>
            <CustomTypoGraphy>{"Location:"}</CustomTypoGraphy>
            <Typography>{selectedUserData?.location}</Typography>
          </DetailContainer>
          <DetailContainer>
            <CustomPhoneIcon />{":"}
            <Typography>{selectedUserData?.mobile}</Typography>
          </DetailContainer>
          <DetailContainer>
            <CustomEmailIcon />{":"}
            <Typography>{selectedUserData?.email}</Typography>
          </DetailContainer>
        </BodyRightContainer>
      </BodyContainer>
    </MainContainer>
  );
};

export default UserDetail;
