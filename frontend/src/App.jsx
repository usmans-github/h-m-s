import {  Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Spinner from "./components/Spinner";
import AdminLogin from "./pages/AdminLogin";
import DoctorLogin from "./pages/DoctorLogin";
import Page from "./admin/Page";
import AddDoctor from "./admin/AddDoctor";
import BookAppointment from "./patient/BookAppointment";
import AllDoctors from "./pages/AllDoctors";
import Profile from "./patient/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import Doctors from "./admin/Doctors";
import AllAppointments from "./admin/AllAppointments";
import Specialties from "./components/Specialities";

function App() {
  return (
    <>
      
      
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/specialities" element={<Specialties />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/patient/profile" element={<ProtectedRoute element={<Profile />} />} />
            <Route path="/patient/book-appointment" element={<ProtectedRoute element={<BookAppointment />} />} />
            <Route path="/all-doctors" element={<AllDoctors />} />
            <Route path="/doctor-login" element={<DoctorLogin />} />
            <Route path="/admin-login" element={<AdminLogin />} />
            <Route path="/admin/appointments" element={<AllAppointments />} />
            <Route path="/admin/add-doctor" element={<AddDoctor />} />
            <Route path="/admin/doctors" element={<Doctors />} />
            <Route path="/admin/dashboard" element={<Page />} />

          </Routes>
       
      
    </>
  );
}

export default App;