import React from "react";
import ContextProvider from "@/context/ContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "tiny-slider/dist/tiny-slider.css";
import "@/vendors/animate/animate.min.css";
import "@/vendors/animate/custom-animate.css";
import "@/vendors/fontawesome/css/all.min.css";
import "@/vendors/tevily-icons/style.css";
import "@/vendors/reey-font/stylesheet.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-rangeslider/lib/index.css";

// extra css
import "@/styles/globals.css";
import "@/styles/tevily.css";
import "@/styles/tevily-responsive.css";

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()

const MyApp = ({ Component, pageProps }) => {
  return (
    <React.StrictMode>
     {/* <ContextProvider> */}
        <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      </QueryClientProvider>
      </React.StrictMode>
    // </ContextProvider>
  );
};

export default MyApp;
