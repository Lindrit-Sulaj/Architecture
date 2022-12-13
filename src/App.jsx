import { Routes, Route } from "react-router-dom";
import { Navbar, Missing, Footer } from './components'
import { Landing } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Landing />}></Route>
        <Route exact path="*" element={<Missing />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
