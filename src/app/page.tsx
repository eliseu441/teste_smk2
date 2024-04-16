"use client";
import React from "react";
import HomePage from "./home/HomePage";
import '../../sass/style.scss';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <HomePage />
    </QueryClientProvider>
  );
}
