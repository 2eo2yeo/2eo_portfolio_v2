import ProjectList from "../components/ProjectList";
import FloatingNavButton from "../components/FloatingNavButton";

export default function SideProjects() {
    return (
        <>
            <ProjectList dataUrl={`${import.meta.env.BASE_URL}data/side-projects.json`} />
            <FloatingNavButton to="/" topLine="VIEW" bottomLine="HOME" />
        </>
    );
}
