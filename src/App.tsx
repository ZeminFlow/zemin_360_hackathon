import { Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { ChallengePage } from './pages/ChallengePage'
import { DiscoverPage } from './pages/DiscoverPage'
import { HomePage } from './pages/HomePage'
import { MatchesPage } from './pages/MatchesPage'
import { NetworkPage } from './pages/NetworkPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PocPage } from './pages/PocPage'
import { ProfilePage } from './pages/ProfilePage'

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="discover" element={<DiscoverPage />} />
        <Route path="challenge" element={<ChallengePage />} />
        <Route path="matches" element={<MatchesPage />} />
        <Route path="profile/:id" element={<ProfilePage />} />
        <Route path="poc/:id" element={<PocPage />} />
        <Route path="network" element={<NetworkPage />} />
        <Route path="ai" element={<Navigate to="/challenge" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
