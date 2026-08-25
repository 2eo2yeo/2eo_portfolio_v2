import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface CursorHintLinkProps {
    to: string;
    hint?: string;
    children: ReactNode;
}

export default function CursorHintLink({ to, hint = "CLICK", children }: CursorHintLinkProps) {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const [hovered, setHovered] = useState(false);

    return (
        <span
            className="group relative inline-flex items-center gap-1 align-middle"
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <span className="relative h-px w-2 bg-white">
                <span className="absolute inset-0 origin-left bg-accent animate-[arrow-line-fill_1s_ease-out_infinite]" />
            </span>

            <Link to={to}>{children}</Link>

            <span className="relative h-px w-2 bg-white">
                <span className="absolute inset-0 origin-right bg-accent animate-[arrow-line-fill_1s_ease-out_infinite]" />
            </span>
            <AnimatePresence>
                {hovered && (
                    <motion.span
                        className="pointer-events-none absolute z-50 font-silkscreen text-xs text-accent"
                        style={{ left: pos.x, top: pos.y + 16 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                    >
                        {hint}
                    </motion.span>
                )}
            </AnimatePresence>
        </span>
    );
}
