import React from "react";
import { ToastProvider } from "react-toast-notifications";
// import SubscribeToProduct from "./Components/SubscribeToProduct";

import SubscribeToProduct from './components/SubscribeToProduct'

// import { AppWrapper } from "./Components/Mystyles.js";
import {AppWrapper} from './components/Mystyles'
const App  = () => {
  return (
    <AppWrapper>
      <ToastProvider placement="bottom-center">
        <SubscribeToProduct />
      </ToastProvider>
    </AppWrapper>
  );
};
export default App;