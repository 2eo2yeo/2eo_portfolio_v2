import { useEffect, useRef, useState } from "react";
import { FaGithub, FaYoutube, FaLink } from "react-icons/fa";
import NavDots from "./NavDots";

interface ProjectItem {
    id: string;
    image: string;
    subject: string;
    period: string;
    stack: string[];
    links: {
        link?: string;
        github?: string;
        youtube?: string;
    };
    desc: string[];
}

interface ProjectListProps {
    dataUrl: string;
}

const NAV_WINDOW_SIZE = 5;

function handleUnavailableLink() {
    alert("쇼핑몰 운영상의 이유로 호스팅이 중단되었습니다");
}

function getNavWindow(items: ProjectItem[], activeIndex: number) {
    const half = Math.floor(NAV_WINDOW_SIZE / 2);
    const maxStart = Math.max(items.length - NAV_WINDOW_SIZE, 0);
    const start = Math.min(Math.max(activeIndex - half, 0), maxStart);
    const end = Math.min(start + NAV_WINDOW_SIZE, items.length);

    return {
        visibleItems: items.slice(start, end),
        showTopDots: start > 0,
        showBottomDots: end < items.length,
    };
}

export default function ProjectList({ dataUrl }: ProjectListProps) {
    const [items, setItems] = useState<ProjectItem[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef(new Map<string, HTMLElement>());

    useEffect(() => {
        fetch(dataUrl)
            .then((res) => res.json())
            .then(setItems);
    }, [dataUrl]);

    useEffect(() => {
        if (items.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = items.findIndex((item) => item.id === entry.target.id);
                        if (index !== -1) setActiveIndex(index);
                    }
                });
            },
            { rootMargin: "-40% 0px -40% 0px" }
        );

        sectionRefs.current.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [items]);

    const { visibleItems, showTopDots, showBottomDots } = getNavWindow(items, activeIndex);

    return (
        <div className="flex w-full">
            <div className="w-9 md:w-12 shrink-0">
                <nav className="sticky top-1/2 z-40 flex w-full -translate-y-1/2 flex-col items-center gap-3 text-center">
                    <span className={showTopDots ? "" : "invisible"}>
                        <NavDots />
                    </span>
                    {visibleItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`text-xs transition-colors hover:text-accent ${
                                item.id === items[activeIndex]?.id ? "text-accent font-bold" : "text-[#a6a6a6]"
                            }`}
                        >
                            {item.id}
                        </a>
                    ))}
                    <span className={showBottomDots ? "" : "invisible"}>
                        <NavDots />
                    </span>
                </nav>
            </div>

            <div className="flex flex-1 flex-col gap-16 py-10">
                {items.map((item) => (
                    <section
                        key={item.id}
                        id={item.id}
                        ref={(el) => {
                            if (el) sectionRefs.current.set(item.id, el);
                            else sectionRefs.current.delete(item.id);
                        }}
                        className="flex w-full max-w-300 flex-col gap-6 scroll-mt-20 pl-1 pr-2 mx-auto sm:pr-5 lg:flex-row"
                    >
                        <div className="w-full rounded shadow-lg lg:w-1/2">
                            <div className="overflow-hidden rounded">
                                <img
                                    src={`${import.meta.env.BASE_URL}${item.image.replace(/^\//, "")}`}
                                    alt={item.subject}
                                    className="aspect-4/3 w-full scale-100 object-cover transition-transform duration-300 hover:scale-110"
                                />
                            </div>
                        </div>

                        <div className="w-full rounded bg-gray-50 p-4 lg:w-1/2">
                            <h2 className="text-lg font-bold">{item.subject}</h2>
                            <p className="text-sm text-primary/60">{item.period}</p>
                            <div className="mt-2 flex flex-wrap gap-1.5">
                                {item.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <ul className="mt-2 list-disc pl-5 text-sm">
                                {item.desc.map((line, i) => (
                                    <li key={i}>{line}</li>
                                ))}
                            </ul>

                            <div className="mt-3 flex gap-3 text-lg text-primary/60">
                                {Object.keys(item.links).length === 0 ? (
                                    <button type="button" onClick={handleUnavailableLink}>
                                        <FaLink />
                                    </button>
                                ) : (
                                    <>
                                        {item.links.link && (
                                            <a href={item.links.link} target="_blank" rel="noopener noreferrer">
                                                <FaLink />
                                            </a>
                                        )}
                                        {item.links.github && (
                                            <a href={item.links.github} target="_blank" rel="noopener noreferrer">
                                                <FaGithub />
                                            </a>
                                        )}
                                        {item.links.youtube && (
                                            <a href={item.links.youtube} target="_blank" rel="noopener noreferrer">
                                                <FaYoutube />
                                            </a>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}
