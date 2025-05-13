import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Warung from './pages/Warung'
import WarungDetail from './pages/WarungDetail'
// import Events from './pages/Events'
// import Dao from './pages/Dao'
// import Profile from './pages/Profile'
// import NotFound from './pages/NotFound'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/warung" element={<Warung />} />
        <Route path="/warung/:id" element={<WarungDetail />} />
        {/* <Route path="/events" element={<Events />} />
        <Route path="/dao" element={<Dao />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Layout>
  )
}

export default App
