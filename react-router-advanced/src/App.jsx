import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import ProfileDetails from './pages/ProfileDetails'
import ProfileSettings from './pages/ProfileSettings'
import BlogPost from './pages/BlogPost'
import ProtectedRoute from './routes/ProtectedRoute'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      >
        <Route index element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Route>

      <Route path="/blog/:id" element={<BlogPost />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
