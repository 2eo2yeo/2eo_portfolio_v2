import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import NavItem from "./NavItem";

interface LayoutProps {
    children: ReactNode;
}

const navItems = [
    { label: "WORK", href: "/work", dataUrl: "/data/work.json" },
    { label: "SIDE PROJECT", href: "/side-projects", dataUrl: "/data/side-projects.json" },
];

export default function Layout({ children }: LayoutProps) {
    const { pathname } = useLocation();
    const isHome = pathname === "/";
    const [counts, setCounts] = useState<Record<string, number>>({});

    useEffect(() => {
        navItems.forEach((item) => {
            fetch(item.dataUrl)
                .then((res) => res.json())
                .then((data: unknown[]) => {
                    setCounts((prev) => ({ ...prev, [item.href]: data.length }));
                });
        });
    }, []);

    return (
        <>
            <Header />
            <main className="max-w-7xl mx-auto 3xl:max-w-[1600px]">
                <div className="mx-2 border-x border-primary/10">

                {!isHome && (
                    <nav className="sticky top-14 z-40 flex border-b border-primary/10 bg-white">
                        {navItems.map((item) => (
                            <NavItem
                                key={item.href}
                                label={item.label}
                                href={item.href}
                                count={counts[item.href]}
                                className="flex-1 text-center py-1 text-xs font-medium"
                            />
                        ))}
                    </nav>
                )}

                {children}

                </div>
            </main>
            <Footer />
        </>
    );
}