import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Repository from './pages/Repository'
import ResultPage from './pages/ResultPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/repo/:author/:repo" element={<Repository />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
