import { Link } from "react-router"

export default function DynamicFooter({ nextProjec }) {
    return (
        <>
            <footer>
                {nextProjec ? (
                    <Link to={`/project/${nextProjec.nameLink}`}><h3>{nextProjec.name}</h3></Link>
                ) : (
                    <h3>Project not found</h3>
                )}
            </footer>
        </>
    )
}