"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/header/Header";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            {children}
        </QueryClientProvider>
    );
}