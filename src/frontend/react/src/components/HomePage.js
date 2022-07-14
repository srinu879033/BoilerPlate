import Feed from "./Feed";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./Navbar";
import { useState } from "react";

function HomePage() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Feed />
        </Stack>
      </Box>
    </ThemeProvider>
  );
}

export default HomePage;
