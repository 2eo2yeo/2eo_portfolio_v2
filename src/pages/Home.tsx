import { Link } from "react-router-dom";
import { motion, type Variants } from "framer-motion";
import { IoMdMail } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";

import { HiArrowLongRight } from "react-icons/hi2";

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
            className="inline-flex cursor-default select-none font-silkscreen"
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
        <div>
            <div className="text-wrap max-w-150 mx-auto leading-[1.8]" data-aos="fade-up">
                <h1 className="text-xl font-bold lg:text-3xl font-silkscreen " >
                    I BUILD FOR THE WEB<span className="text-accent">.</span>
                </h1>
                <p className="text-xs mb-8">텍스트를 누르면 이동합니다</p>

                <p className="mb-3">
                    쇼핑몰 솔루션 기반 웹 에이전시에서<br />
                    <Link to="/work">
                        <strong className="text-accent">카페24 25건 · 쇼피파이 2건 · 자체 구축 1건</strong>
                    </Link>을 제작하며<br />
                        CLIENT의 요구사항과 UI/UX, 솔루션의 관리자 기능 연동까지 고려해<br />
                        사용자가 편안하게 쓸 수 있는 웹을 만들어왔습니다.
                </p>

                <p className="mb-3">
                    <strong>새로운 기술을 배우고 직접 적용하는 걸 좋아합니다.</strong><br />
                    <span className="underline underline-offset-4">React · TypeScript · Node.js · MySQL · Redux </span>를<br/> 활용한 <strong className="text-accent">팀 프로젝트</strong>와 AWS 배포를 경험했으며,<br />
                    Framer Motion · Tailwind CSS · Swiper · AOS · Bootstrap · jQuery 등 <br/> 다양한 라이브러리를 다뤄봤습니다.
                </p>

                <p className="mb-3">
                    또한 GitHub · Notion을 협업에 활용했습니다.
                </p>
                <p><HiArrowLongRight /></p>
                <p className="flex items-center gap-2 font-silkscreen text-accent"><IoMdMail /><RevealText text="WORK WITH ME" /></p>
                <p className="flex items-center gap-2 font-silkscreen text-accent"><IoLogoGithub /><RevealText text="GITHUB" /></p>
                <p className="flex items-center gap-2 font-silkscreen text-accent"><IoLogoGithub /><RevealText text="GITHUB" /></p>
            </div>
        </div>
    );
}
