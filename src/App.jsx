import { Routes, Route } from "react-router-dom";
import { Navbar, Missing, Footer } from './components'
import { Landing } from './pages'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-[70px]">
        <Routes>
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="*" element={<Missing />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
