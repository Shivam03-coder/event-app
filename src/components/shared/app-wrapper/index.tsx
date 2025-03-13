import { View, Text } from "react-native";
import React, { ReactNode } from "react";
import { ToastProvider } from "react-native-toast-notifications";
import { Provider } from "react-redux";
import { store } from "@/store";

const AppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ToastProvider placement="top">{children}</ToastProvider>;
    </Provider>
  );
};

export default AppWrapper;
