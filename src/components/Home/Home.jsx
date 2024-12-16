import { projectsInfo } from "../../utils/content"
import Footer from "../Footer/Footer"
import Projects from "../Projects/Projects"

export default function Home() {
    return (
        <>
            <main>
                <Projects />
            </main>
            <Footer />
        </>
    )
}