"use client";

import { Provider } from "react-redux";
import store from "../services/redux/store/store";
import { PrimeReactProvider } from "primereact/api";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <PrimeReactProvider value={{ ripple: true, inputStyle: "outlined"}}>
        {children}
      </PrimeReactProvider>
    </Provider>
  );
}
