export default function Footer() {
    return (
        <footer className="border-t border-primary/10">
            <div className="max-w-7xl mx-auto 3xl:max-w-[1600px] p-4">
                <p className="text-center text-xs">© {new Date().getFullYear()} 2EO All rights reserved.</p>
            </div>
        </footer>
    );
};