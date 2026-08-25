import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-primary/10 bg-white">
            <div className="max-w-7xl mx-auto 3xl:max-w-[1600px] flex items-center justify-center h-14 px-4">
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="2eo" className="w-12 h-auto" />
                </Link>
            </div>
        </header>
    );
}
