import Footer from "../Footer/Footer"
import { educationInfo, workExpInfo } from "../../utils/content"

export default function About() {
    return (
        <>
            <main>
                <section>
                    <h1>Luis Bermudez</h1>
                    <p>Hi there! I am a MERN, and ASP.NET web developer. Currently part of the web dev team at <a href='https://www.weber.edu/' target="_blank">Weber State University.</a></p>
                </section>

                <br></br>

                <h2>Write something about yourself</h2>

                <br></br>

                {/* <div>
                    <h2>Work Experience</h2>
                    {
                        workExpInfo.map(workItem => (
                            <h3 key={workItem.id}>{workItem.title}</h3>
                        ))
                    }
                </div>

                <br></br>

                <div>
                    <h2>Education</h2>
                    {
                        educationInfo.map(educationItem => (
                            <h3 key={educationItem.id}>{educationItem.title}</h3>
                        ))
                    }
                </div> */}
            </main>
            
            <Footer />
        </>
    )
}