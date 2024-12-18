'use client'
import React, { useContext, useEffect, useState } from 'react'
import { 
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon
} from '@heroicons/react/24/solid'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { AdminContext } from '../context/AdminContext'


// const mockAppointments = [
//   { id: 1, patient: 'John Doe', doctor: 'Dr. Smith', time: '09:00 AM', status: 'Confirmed' },
//   { id: 2, patient: 'Jane Smith', doctor: 'Dr. Johnson', time: '10:30 AM', status: 'Pending' },
//   { id: 3, patient: 'Bob Brown', doctor: 'Dr. Williams', time: '02:00 PM', status: 'Completed' },
// ]

const Page = () => {
  
  const navigate = useNavigate()
  const { admin_token, setadmin_token, stats, setstats, getStats } = useContext(AdminContext)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  console.log(stats)
  //  const Stats = [
  //   { name: 'Total Patients', value: 1 },
  //   { name: 'Total Doctors', value: 2},
  //   { name: 'Appointments', value: 3}
  // ] 

  const Stats = [
    { name: 'Total Patients', value: stats.usersData.length },
    { name: 'Total Doctors', value: stats.doctorsData.length},
    { name: 'Appointments', value: stats.reverseData.length}
  ] 
    useEffect(() => {
        setstats
    }, [stats])

  if(admin_token) {return  (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'block' : 'hidden'} fixed inset-y-0 left-0 z-50 w-64 bg-white  text-black transition-all duration-300 lg:relative lg:block`}>
        <div className="flex items-center justify-between p-4">
          <h2 className="text-2xl font-semibold">Admin Dashboard</h2>
          <button onClick={() => setSidebarOpen(false)} className="lg:hidden">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="mt-8">
          <Link to="/admin/dashboard" className="block py-2 px-4 text-black hover:bg-indigo-500 hover:text-white">Dashboard</Link>
          <Link to="/admin/doctors" className="block py-2 px-4 text-black hover:bg-indigo-500 hover:text-white">Doctors</Link>
          <Link to="#" className="block py-2 px-4 text-black hover:bg-indigo-500 hover:text-white">Patients</Link>
          <Link to="#" className="block py-2 px-4 text-black hover:bg-indigo-500 hover:text-white">Appointments</Link>
          <Link to="#" className="block py-2 px-4 text-black hover:bg-indigo-500 hover:text-white">Settings</Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Top bar */}
        {/* <header className="bg-white shadow-sm"> */}
          <div className="flex items-center justify-between px-4 py-3">
            <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none focus:text-gray-700 lg:hidden">
              <MenuIcon className="h-6 w-6" />
            </button>
         
          </div>

        {/* Dashboard content */}
        <main className="p-6">
          <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard Overview</h1>
          
         {/*  Stats */}
          <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
            {Stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-indigo-500 bg-opacity-75">
                    <MenuIcon className="h-8 w-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <p className="mb-2 text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-lg font-semibold text-gray-700">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent Appointments */}
          <div className="bg-white rounded-lg shadow-sm mb-6">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Appointments</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500 border-b">
                      <th className="pb-3 font-medium">Patient</th>
                      <th className="pb-3 font-medium">Doctor</th>
                      <th className="pb-3 font-medium">Time</th>
                      <th className="pb-3 font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.reverseData.map((appointment) => (
                      <tr key={appointment._id} className="border-b last:border-b-0">
                        <td className="py-3">{appointment.userData.name}</td>
                        <td className="py-3">{appointment.docData.name}</td>
                        <td className="py-3">{appointment.slotTime}</td>
                        <td className="py-3">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            appointment.Status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                            appointment.Status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {appointment.Status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4  sm:grid-cols-2 lg:grid-cols-4">
              <Link to="/admin/add-doctor">
              <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
               text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Add New Doctor
              </button>
              </Link>
              <Link to="/admin/add-doctor">
              <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
               text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                Total Patients
              </button>
              </Link>
              
              <Link>
              <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
               text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                View Appointments 
              </button>
              </Link>
              <Link>
              <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md
               text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                All Doctors
              </button>
                 </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )}
}

export default Page
