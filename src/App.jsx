import { useState } from 'react'
import { projectsInfo } from "./utils/content"
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/Abount'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className='main-container'>
        <About />
        <div>
          {
            projectsInfo.map((each) => (
              <h2 key={each.id}>{each.name}</h2>
            ))
          }
        </div>
      </main>
      <footer>Footer</footer>
    </>
  )
}

export default App
