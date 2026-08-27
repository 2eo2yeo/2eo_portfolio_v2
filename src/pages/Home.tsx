import { motion, type Variants } from "framer-motion";
import CursorHintLink from "../components/CursorHintLink";
import FloatingWorkButton from "../components/FloatingWorkButton";

import { IoMdMail } from "react-icons/io";
import { SiVelog } from "react-icons/si";
import { FaGithub } from "react-icons/fa";


/* contact list*/
const contact_list = [
    { icon: IoMdMail, label: "WORK WITH ME", copy: "2eo2yeo@gmail.com" },
    { icon: FaGithub, label: "GITHUB", href: "https://github.com/2eo2yeo" },
    { icon: SiVelog, label: "VELOG", size: "0.95em", href: "https://velog.io/@2eo" },
];


const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert("메일주소가 복사되었습니다");
};

/* reveal */
const revealVariants = {
    placeholder: {
        idle: { y: 0, opacity: 1 },
        active: { y: "-100%", opacity: 0 },
    } satisfies Variants,
    text: {
        idle: { y: "100%", opacity: 0 },
        active: { y: 0, opacity: 1 },
    } satisfies Variants,
};

function RevealText({ text }: { text: string }) {
    const chars = Array.from(text);

    return (
        <motion.span
            className="inline-flex select-none font-silkscreen"
            initial="idle"
            whileHover="active"
            whileTap="active"
        >
            {chars.map((char, i) =>
                char === " " ? (
                    <span key={i} className="inline-block w-[0.6em]" />
                ) : (
                    <span key={i} className="relative inline-grid place-items-center overflow-hidden">
                        <motion.span
                            className="[grid-area:1/1]"
                            variants={revealVariants.placeholder}
                            transition={{ duration: 0.25, delay: i * 0.03, ease: "easeOut" }}
                        >
                            X
                        </motion.span>
                        <motion.span
                            className="[grid-area:1/1]"
                            variants={revealVariants.text}
                            transition={{ duration: 0.25, delay: i * 0.03, ease: "easeOut" }}
                        >
                            {char}
                        </motion.span>
                    </span>
                )
            )}
        </motion.span>
    );
}

export default function Home() {
    return (
        <div className="home_wrap max-w-130 py-6 px-2 mx-auto " data-aos="fade-up">
            <div className="text-wrap leading-[1.8] text-sm md:text-base">
                <h1 className="text-xl font-bold lg:text-3xl font-silkscreen mb-1" >
                    I BUILD FOR THE WEB<span className="text-accent">.</span>
                </h1>
                <p className="text-xs mb-6 text-[#AAA]">텍스트를 누르면 이동합니다</p>

                <p className="mb-3">
                    쇼핑몰 솔루션 전문 웹 에이전시에서<br />
                    <CursorHintLink to="/work">
                        <strong className="text-accent">카페24 23건 · 쇼피파이 2건 · 자체 구축 1건</strong>
                    </CursorHintLink> <br />을 제작하며 UI/UX와 솔루션 관리자 연동을 고려해<br /> 편리한 사용자 경험을 구현했습니다.
                </p>
                <p className="mb-3">
                    Claude Code · Shopify CLI 또한 실무에 적극 활용하고 있습니다.
                </p>

                <p className="mb-3">
                    새로운 기술을 배우고 직접 적용하는 걸 좋아합니다.<br />
                </p>
                <p className="mb-3">
                    React · TypeScript · Node.js · MySQL · Redux 를<br /> 활용한 <CursorHintLink to="/side-projects"><strong className="text-accent">팀 프로젝트</strong></CursorHintLink> 와 AWS 배포를 경험했으며,<br />
                    Framer Motion · Tailwind CSS · Swiper · AOS · Bootstrap · jQuery 등 <br className="hidden sm:block" /> 다양한 라이브러리를 다뤄봤습니다.
                </p>

                <p className="mb-3">
                    또한 GitHub · Notion을 협업에 활용했습니다.
                </p>
            </div>

            {/* contact link */}
            <ul>
                {contact_list.map(({ icon: Icon, label, size, href, copy }) => (
                    <li key={label}>
                        {copy ? (
                            <button
                                type="button"
                                onClick={() => handleCopy(copy)}
                                className="flex items-center gap-2 font-silkscreen text-accent cursor-pointer"
                            >
                                <Icon size={size} />
                                <RevealText text={label} />
                            </button>
                        ) : (
                            <a
                                href={href}
                                target={href?.startsWith("http") ? "_blank" : undefined}
                                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                                className="flex items-center gap-2 font-silkscreen text-accent cursor-pointer"
                            >
                                <Icon size={size} />
                                <RevealText text={label} />
                            </a>
                        )}
                    </li>
                ))}
            </ul>

            <FloatingWorkButton />
        </div>
    );
}
