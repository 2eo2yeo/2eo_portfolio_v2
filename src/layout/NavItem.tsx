import { Link } from "react-router-dom";

interface NavItemProps {
    label: string;
    href: string;
    className?: string;
    onClick?: () => void;
}

export default function NavItem({ label, href, className, onClick }: NavItemProps) {
    return (
        <Link to={href} className={className} onClick={onClick}>
            {label}
        </Link>
    );
}
