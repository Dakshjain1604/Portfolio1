import './App.css'
import { AboutMe } from './pages/AboutPage'
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import { HomePage } from './pages/HomePage'
import { Contact } from './pages/Contact'

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutMe/>} />
        <Route path="/contacts" element={<Contact/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App
