import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const login = () => {
    localStorage.setItem('auth', 'true')
    navigate('/profile')
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={login}>Login</button>
    </div>
  )
}
