import ProjectList from "../components/ProjectList";

export default function Work() {
    return <ProjectList dataUrl={`${import.meta.env.BASE_URL}data/work.json`} />;
}
