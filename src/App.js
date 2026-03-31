import { BrowserRouter, Routes,  Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import CourseCatalog from './pages/CourseCatalog';
import CourseDetail from './pages/CourseDetail';
import LessonPage from './pages/LessonPage';
import QuizPage from './pages/QuizPage';
import Analytics from './pages/Analytics';
import EmotionDashboard from './pages/EmotionDashboard';
import SmartHints from './pages/SmartHints';
import ProfilePage from './pages/ProfilePage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/"         element={<LandingPage />} />
        <Route path="/login"    element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path= "/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CourseCatalog/>} />
        <Route path="/courses/:id" element={<CourseDetail/>} />
        <Route path="/lesson/:id" element={<LessonPage/>} />
        <Route path="/quiz/:id" element={<QuizPage/>} />
        <Route path="/analytics" element={<Analytics/>} />
        <Route path="/emotion" element={<EmotionDashboard/>} />
        <Route path="/hints" element={<SmartHints/>} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;