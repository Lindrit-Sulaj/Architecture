import { Routes, Route } from "react-router-dom";
import { Navbar, Missing } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<p>/</p>}></Route>
        <Route exact path="*" element={<Missing />}></Route>
      </Routes>
    </>
  )
}

export default App
