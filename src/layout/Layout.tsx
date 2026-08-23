import type { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto px-4 3xl:max-w-[1600px]">
                {children}
            </main>
            <Footer />
        </>
    );
}