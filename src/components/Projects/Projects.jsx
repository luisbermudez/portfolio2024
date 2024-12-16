import { projectsInfo } from "../../utils/content"
import { Link } from "react-router"

export default function Projects() {
    return (
        <>
            <ul>
                {
                    projectsInfo.map((each) => (
                        <li key={each.id}><Link to={`/project/${each.nameLink}`}><h2>{each.name}</h2></Link></li>
                    ))
                }
            </ul>
        </>
    )
}