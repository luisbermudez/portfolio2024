import { useParams } from "react-router"
import DynamicFooter from "../DynamicFooter/DynamicFooter"
import { useState, useEffect } from "react";
import { projectsInfo } from "../../utils/content";
import Footer from "../Footer/Footer";

export default function ProjectInfo() {
    const { projectName } = useParams();
    const [project, setProject] = useState(null);
    const [nextProject, setNextProject] = useState(null);

    useEffect(() => {
        // Find index of current project
        const currentProjectIndex = projectsInfo.findIndex(projectItem => projectItem.nameLink === projectName);

        // If index found
        if (currentProjectIndex !== -1) {
            setProject(projectsInfo[currentProjectIndex]);

            // Make sure to only assign an existing array item
            if (currentProjectIndex + 1 < projectsInfo.length) {
                setNextProject(projectsInfo[currentProjectIndex + 1]);
            } else {
                setNextProject(null)
            }
        }

    }, [projectName]);

    return (
        <>
            <main>
                {project ? (
                    <h1>{project.name}</h1>
                ) : (
                    <h1>Project not found</h1>
                )
                }
            </main>
            {nextProject ? (
                <DynamicFooter nextProjec={nextProject} />
            ) : (
                <Footer />
            )
            }
        </>
    )
}