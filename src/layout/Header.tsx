import { useState } from "react";
import { Link } from "react-router-dom";
import NavItem from "./NavItem";

const navItems = [
    { label: "ABOUT", href: "/about" },
    { label: "WORK", href: "/work" },
    { label: "SIDE PROJECT", href: "/side-projects" },
    { label: "CONTACT", href: "/contact" },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-primary/10">
            <div className="max-w-7xl mx-auto 3xl:max-w-[1600px] grid grid-cols-[auto_1fr_auto] lg:grid-cols-[1fr_auto_1fr] items-center h-16 px-4 gap-4">
                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
                        aria-label="메뉴 열기"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="block w-5 h-0.5 bg-primary" />
                        <span className="block w-5 h-0.5 bg-primary" />
                        <span className="block w-5 h-0.5 bg-primary" />
                    </button>

                    <Link to="/" className="text-lg font-semibold text-primary">
                        2eo
                    </Link>
                </div>

                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.href}
                            label={item.label}
                            href={item.href}
                            className="text-sm font-medium text-primary hover:opacity-70 transition-opacity"
                        />
                    ))}
                </nav>

                <div />
            </div>

            {isMenuOpen && (
                <nav className="lg:hidden flex flex-col gap-4 px-4 pb-4">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.href}
                            label={item.label}
                            href={item.href}
                            className="text-sm font-medium text-primary"
                            onClick={() => setIsMenuOpen(false)}
                        />
                    ))}
                </nav>
            )}
        </header>
    );
}
