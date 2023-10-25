"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const queryClient = new QueryClient();

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Header />
            {children}
            <Footer />
        </QueryClientProvider>
    );
}