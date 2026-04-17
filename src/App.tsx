import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { ThankYouPage } from './pages/ThankYouPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
    </Routes>
  )
}
