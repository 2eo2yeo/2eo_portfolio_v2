import ProjectList from "../components/ProjectList";
import FloatingNavButton from "../components/FloatingNavButton";

export default function Work() {
    return (
        <>
            <ProjectList dataUrl={`${import.meta.env.BASE_URL}data/work.json`} />
            <FloatingNavButton to="/" topLine="VIEW" bottomLine="HOME" />
        </>
    );
}
