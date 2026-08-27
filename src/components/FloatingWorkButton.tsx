import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CHAR_STEP = 0.06;
const CHAR_DURATION = 0.35;
const CYCLE_GAP = 1.2;

function WaveText({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
    return (
        <span className="inline-flex">
            {Array.from(text).map((char, i) => (
                <span key={i} className="relative inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        transition={{
                            duration: CHAR_DURATION,
                            ease: "easeOut",
                            delay: startDelay + i * CHAR_STEP,
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: CYCLE_GAP,
                        }}
                    >
                        {char === " " ? " " : char}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

export default function FloatingWorkButton() {
    return (
        <Link to="/work" className="floating-work-btn font-silkscreen" aria-label="View work">
            <span className="flex flex-col items-center leading-tight">
                <WaveText text="VIEW" />
                <WaveText text="WORK" startDelay={0.3} />
            </span>
        </Link>
    );
}
