import { Routes, Route } from 'react-router-dom'
import './App.css';
import Inici from './pages/Inici';
import Vocabulari from './pages/vocabulari/Vocabulari';
import Preguntes from './pages/preguntes/Preguntes';
import Menu from './components/Menu';
import Animals from './pages/vocabulari/Animals';
import AnimalDetall from './pages/vocabulari/AnimalDetall';
import Menjars from './pages/vocabulari/Menjars';
import PreguntesPrincipals from './pages/preguntes/PreguntesPrincipals';
import RutaProtegida from './auth/RutaProtegida';
import Login from './pages/Login';
import PanelAdminstracio from './pages/PanelAdminstracio';
import Progress from './pages/Progress';

function App() {

  return (
    <div>
      <h1>Aprèn català jugant</h1>

      <Menu />

      <Routes>
        <Route path="/admin" element={
          <RutaProtegida role="admin">
            <PanelAdminstracio />
          </RutaProtegida>
          } />
        <Route path="/login" element={<Login /> } />
        <Route path="/" element={<Inici />} />
          <Route path="/vocabulari" element={
            <RutaProtegida >
              <Vocabulari />
            </RutaProtegida>
            } >
          <Route path="animals" element={<Animals />} />
          <Route path="animals/:id" element={<AnimalDetall />} />
          <Route path="menjars" element={<Menjars />} />
        </Route>
        <Route path="/preguntes" element={<Preguntes />} >
          <Route path="preguntes-principals" element={<PreguntesPrincipals />} />
        </Route>
        <Route path='/progress' element={
          <RutaProtegida >
              <Progress />
            </RutaProtegida>
        } >
            
        </Route>
      </Routes>
    </div>
  )
}

export default App
