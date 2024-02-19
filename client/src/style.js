import styled from "@emotion/styled";
import { Box } from "@mui/material";

const MainContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  width: "100%",
  backgroundColor: theme.backgroundColor,
  flexDirection: "column",
}));

export { MainContainer };
