import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { CareersPage } from './pages/CareersPage';
import './App.css';
import { AboutPage } from './pages/AboutPage';
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop';
import { SecurityPage } from './pages/SecurityPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/careers' element={<CareersPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/security' element={<SecurityPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
