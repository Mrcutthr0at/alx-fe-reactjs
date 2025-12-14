import { Routes, Route, Link } from 'react-router-dom'
import ProfileDetails from '../pages/ProfileDetails'
import ProfileSettings from '../pages/ProfileSettings'

export default function Profile() {
  return (
    <div>
      <h1>Profile</h1>

      <nav>
        <Link to="">Details</Link> |{' '}
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  )
}
