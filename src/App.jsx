import React from "react";
import DigitalBusinessCard from "./DigitalBusinessCard";
import { createTheme, ThemeProvider, CssBaseline, Box } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin, prefixer],
});

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: { main: "#1193d4" },
    background: { default: "#f6f7f8" },
  },
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100dvh", // ✅ usa altura dinámica (mejor que 100vh en móvil)
            width: "100vw",
            backgroundColor: "background.default",
            boxSizing: "border-box",
            px: 2, // padding horizontal para evitar que toque bordes
            py: 1, // padding vertical para que haya espacio arriba/abajo
          }}
        >
          <DigitalBusinessCard />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
