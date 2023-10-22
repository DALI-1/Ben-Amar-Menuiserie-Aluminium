import type { AppProps } from "next/app";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importing Components
import GlobalCssPriority from "@/app/Components/GlobalCssPriority";

import "../styles/globals.css";

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../Theme';

const App = ({ Component, pageProps }: AppProps) => {
  return (
  <GlobalCssPriority>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
    </GlobalCssPriority>
  );
};
export default App;
