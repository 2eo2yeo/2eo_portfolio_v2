import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
    label: string;
    href: string;
    className?: string;
    onClick?: () => void;
    count?: number;
}

export default function NavItem({ label, href, className, onClick, count }: NavItemProps) {
    const { pathname } = useLocation();
    const isActive = pathname === href;

    return (
        <Link
            to={href}
            onClick={onClick}
            className={`${className ?? ""} transition-colors duration-300 ${isActive ? "bg-accent text-white" : ""}`}
        >
            <span className="relative inline-block">
                {label}
                {count !== undefined && (
                    <span className="absolute top-0 -right-2.5 text-[9px] font-normal leading-none">
                        {count}
                    </span>
                )}
            </span>
        </Link>
    );
}
