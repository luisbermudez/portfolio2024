import { projectsInfo } from "../../utils/content"
import Footer from "../Footer/Footer"

export default function Home() {
    return (
        <>
            <main>
                {
                    projectsInfo.map((each) => (
                        <h2 key={each.id}>{each.name}</h2>
                    ))
                }
            </main>
            <Footer />
        </>
    )
}