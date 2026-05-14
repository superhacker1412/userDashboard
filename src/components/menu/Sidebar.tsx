import { ChartNoAxesCombined, Info, LayoutDashboard, Mail, Menu, Settings, Shield, User } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className=" h-screen  ps-2 mt-4">
      <div className='h-full'>
      <div className="flex gap-2 items-center mb-5 bg-gray-50 p-4 rounded-full shadow-sm ">
        <div className="bg-blue-600 w-10 h-10 flex items-center justify-center text-white text-2xl rounded-full">
          A
        </div>
        <div className="flex flex-col leading-5">
          <h4 className='font-semibold'>Amir Site</h4>
          <span className='text-gray-700 text-sm'>Dashboard</span>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-3xl shadow-sm">
        <span className='uppercase text-[10px] px-2 text-gray-500'>Main</span>

        <ul className='pt-1'>
          <li>
            <Link to="/" className='gap-2 p-2 hover:bg-blue-100 rounded-full flex items-center mb-2 hover:font-semibold '>
              <LayoutDashboard className='text-blue-950 size-5' />  <span className='text-blue-950 text-sm'>Overview</span> 
            </Link>
            <Link to="/" className='gap-2 p-2 bg-blue-100 rounded-full flex items-center mb-2 font-semibold '>
              <User className='text-blue-950 size-5' />  <span className='text-blue-950 text-sm'>Users</span> 
            </Link>
            <Link to="/" className='gap-2 p-2 hover:bg-blue-100 rounded-full flex items-center mb-2 hover:font-semibold '>
              <ChartNoAxesCombined className='text-blue-950 size-5' />  <span className='text-blue-950  text-sm'>Analytics</span> 
            </Link>
            <Link to="/" className='gap-2 p-2 hover:bg-blue-100 rounded-full flex items-center mb-2 hover:font-semibold '>
              <Mail className='text-blue-950 size-5' />  <span className='text-blue-950 text-sm'>Messages</span> 
              
            </Link>
          </li>
        </ul>
      </div>
       <div className="bg-gray-50 p-4 rounded-3xl shadow-sm mt-4">
        <span className='uppercase text-[10px] px-2 text-gray-500'>System</span>

        <ul className=''>
          <li>
            <Link to="/" className='gap-2 p-2 hover:bg-blue-100 rounded-full flex items-center mb-2 hover:font-semibold '>
              <Shield className='text-blue-950 size-5' />  <span className='text-blue-950 text-sm'>Permissions</span> 
            </Link>
            <Link to="/" className='gap-2 p-2 hover:bg-blue-100 rounded-full flex items-center mb-2 hover:font-semibold '>
              <Settings className='text-blue-950 size-5' />  <span className='text-blue-950  text-sm'>Settings</span> 
            </Link>
            <Link to="/" className='gap-2 p-2 hover:bg-blue-100 rounded-full flex items-center mb-2 hover:font-semibold '>
              <Info className='text-blue-950 size-5' />  <span className='text-blue-950  text-sm'>Support</span> 
            </Link>

          </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Sidebar