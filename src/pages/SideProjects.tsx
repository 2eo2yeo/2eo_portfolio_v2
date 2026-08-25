import ProjectList from "../components/ProjectList";

export default function SideProjects() {
    return <ProjectList dataUrl={`${import.meta.env.BASE_URL}data/side-projects.json`} />;
}
