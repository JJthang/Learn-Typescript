import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

type AppProviderProps = {
  children: React.ReactNode;
};
const AppProvider = (children: AppProviderProps) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default AppProvider;
