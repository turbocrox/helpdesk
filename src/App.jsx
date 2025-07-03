import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './components/Login'
import Signin from './components/Signin'
import Email from './components/Email'
import Dashboard from './components/User/Dashboard'
import Newticket from './components/User/Newticket'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/email" element={<Email />} />
         <Route path="/dashboard" element={<Dashboard/>} />
         <Route path="/newticket" element={<Newticket/>} />
      </Routes>
    </Router>
  )
}

export default App
