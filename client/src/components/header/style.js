import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

const HeaderContainer = styled(Box)(({ theme }) => ({
  height: "65px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: theme.primary.headerBgColor,
}));

const HeaderTypo = styled(Typography)(({ theme }) => ({
  color: theme.primary.headerFontColor,
  fontSize: "1.2rem",
  letterSpacing: "1px",
  alignSelf: "center",
  textAlign: "center",
  margin: "auto 15px",
  "@media (max-width: 768px)": {
    fontSize: "1rem",
  },
  "@media (max-width: 480px)": {
    fontSize: "0.9rem",
  },
  "@media (max-width: 320px)": {
    fontSize: "0.8rem",
  },
}));

export { HeaderContainer, HeaderTypo };
