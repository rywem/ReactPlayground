import { Routes, Route } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import "./styles.css";

 function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />     
      <Route path="/register" element={<SignUpPage />} />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
