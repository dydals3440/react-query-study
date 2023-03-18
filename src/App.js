import React from "react";
import "./App.css";
import MainProducts from "./components/MainProducts";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

// Create a Client
const queryClient = new QueryClient();

export default function App() {
  return (
    // provide the client to my app
    <QueryClientProvider client={queryClient}>
      <MainProducts />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}
