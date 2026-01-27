import { useState } from 'react';
import { useAuth } from '../auth/AuthContext'
import { useNavigate } from 'react-router-dom';

export default function Login() {

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    try {
      await login(email, password)
      navigate('/vocabulari')
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleRegister(e) {
    e.preventDefault();
    try {
      await register(email, password)
      navigate('/vocabulari')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Contrasenya" value={password} onChange={(e) => setPassword(e.target.value)} />
        
        { error && <p style={{color: 'red'}}>{error}</p> }
        <button onClick={handleLogin}>Entrar</button>
        <button onClick={handleRegister}>Registrar</button>
      </form>
    </div>
  )
}
