import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import LoginScreen from './pages/LoginScreen';
import ForgotPasswordScreen from './pages/ForgotPasswordScreen';
import RegisterScreen from './pages/RegisterScreen';
import SignOutScreen from './pages/SignOutScreen';
import MyAccountScreen from './pages/MyAccountScreen';
import GenerateTokenScreen from './pages/GenerateTokenScreen';
// import refreshTokenScreen from './screens/myaccount/refreshToken';

import './firebase';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen/>} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen/>} />
        <Route path="/signout" element={<SignOutScreen/>} />
        <Route path="/token" element={<GenerateTokenScreen/>} />
        {/* <Route path="/refreshToken" element={<refreshTokenScreen/>} /> */}
        <Route path="/" element={<MyAccountScreen/>} />
        <Route path="*" element={
          <Navigate to='/login' />
        } />
      </Routes>
    </BrowserRouter>
  );
}