import { Bell, Search, User } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const UserManager = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
      })
  }, [])

  return (
    <>
      <div className="p-4">
        <div className="w-full flex justify-between items-center px-4">
          <div className="relative">
            <Search className='absolute top-2.5  left-2 text-gray-400 size-5' />
            <input type="text" placeholder='Search...' className='border border-gray-100 shadow-sm rounded-full text-sm px-8 py-2 w-100' />
          </div>
          <div className=" flex gap-5 items-center">
            <Bell className='text-gray-500 size-4' />
            <div className="bg-blue-500 w-8 h-8 flex items-center justify-center text-white text-sm rounded-full">
              A
            </div>
          </div>
        </div>
        <div className=" mx-auto w-full max-w-240  mt-8 ">

          <span className='text-sm text-blue-950'>Dashboard / Users</span>
          <h1 className='text-3xl  font-semibold'>Users Manager</h1>
          <span className='text-gray-500 text-sm'>Короче тут менеджер пользоваелей, для управления ИМИ.</span>

          <div className="grid grid-cols-4 gap-4 mt-2">
            <div className="col-span-1">
              <div className="card shadow-sm rounded-4xl">
                <div className="flex justify-between items-center p-4">
                  <div className="bg-blue-500 w-8 h-8 flex items-center justify-center text-white text-sm rounded-full">
                    <User className='size-4' />
                  </div>
                  <span className='text-gray-500'>Всего: <span className='text-black'>999</span></span>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="card shadow-sm rounded-4xl">
                <div className="flex justify-between items-center p-4">
                  <div className="bg-blue-500 w-8 h-8 flex items-center justify-center text-white text-sm rounded-full">
                    <User className='size-4' />
                  </div>
                  <span className='text-gray-500'>Всего: <span className='text-black'>999</span></span>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="card shadow-sm rounded-4xl">
                <div className="flex justify-between items-center p-4">
                  <div className="bg-blue-500 w-8 h-8 flex items-center justify-center text-white text-sm rounded-full">
                    <User className='size-4' />
                  </div>
                  <span className='text-gray-500'>Всего: <span className='text-black'>999</span></span>
                </div>
              </div>
            </div>
            <div className="col-span-1">
              <div className="card shadow-sm rounded-4xl">
                <div className="flex justify-between items-center p-4">
                  <div className="bg-blue-500 w-8 h-8 flex items-center justify-center text-white text-sm rounded-full">
                    <User className='size-4' />
                  </div>
                  <span className='text-gray-500'>Всего: <span className='text-black'>999</span></span>
                </div>
              </div>
            </div>
          </div>


          <div className="card shadow-sm rounded-4xl p-4 mt-4">
            <div className="flex justify-between items-center ">
              <div className="flex gap-2 items-center">
                <div className="bg-blue-500 w-8 h-8 flex items-center justify-center text-white text-sm rounded-full">
                  <User className='size-4' />
                </div>
                Пользователи
              </div>

              <div className="flex gap-2">
                <div className="flex gap-2 ">
                  <div className="relative  w-50 me-2">
                    <Search className='absolute top-2  left-2 text-gray-400 size-4' />
                    <input type="text" placeholder='Search...' className='border border-gray-100 shadow-sm rounded-full text-sm px-4 ps-7 py-1 ' />
                  </div>

                </div>
                <div className="card bg-gray-50 rounded-full border border-gray-100 flex gap-2 p-0.5">
                  <span className='px-3 py-1 bg-blue-600 rounded-full text-white text-[13px]'>All</span>
                  <span className='px-3 py-1 cursor-pointer  hover:bg-blue-600 rounded-full text-gray-500 hover:text-white text-[13px]'>Active</span>
                  <span className='px-3 py-1 cursor-pointer  hover:bg-blue-600 rounded-full text-gray-500 hover:text-white text-[13px]'>Invited</span>
                  <span className='px-3 py-1 cursor-pointer  hover:bg-blue-600 rounded-full text-gray-500 hover:text-white text-[13px]'>Suspended</span>
                </div>

                <button className='px-4 py-2 bg-blue-600 rounded-full text-white text-[13px] flex items-center font-semibold'>+ Invite</button>

              </div>
            </div>




          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm mt-4">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr className="text-left text-xs uppercase tracking-wider text-gray-500">
                  <th className="px-6 py-4 font-medium">User</th>
                  <th className="px-6 py-4 font-medium">Role</th>
                  <th className="px-6 py-4 font-medium">Department</th>
                  <th className="px-6 py-4 font-medium">Phone</th>
                  <th className="px-6 py-4 font-medium">Country</th>
                  <th className="px-6 py-4"></th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="border-t border-gray-100 transition hover:bg-gray-50"
                  >
                    {/* User */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={user.image}
                          alt={user.firstName}
                          className="h-10 w-10 rounded-full object-cover"
                        />

                        <div>
                          <h4 className="font-medium text-gray-900">
                            {user.firstName} {user.lastName}
                          </h4>

                          <p className="text-xs text-gray-500">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="px-6 py-4">
                      <span
                        className={`rounded-md px-2 py-1 text-xs font-medium ${user.role === "admin"
                          ? "bg-red-100 text-red-700"
                          : "bg-gray-100 text-gray-700"
                          }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    {/* Company / Department */}
                    <td className="px-6 py-4 text-gray-600">
                      <div>
                        <p className="font-medium">
                          {user.company.department}
                        </p>

                        <p className="text-xs text-gray-400">
                          {user.company.title}
                        </p>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                        <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        Active
                      </span>
                    </td>

                    {/* Location */}
                    <td className="px-6 py-4 text-gray-500">
                      {user.address.city}, {user.address.state}
                    </td>

                    {/* Actions */}
                    <td className="relative px-6 py-4 text-right">
                      <details className="group inline-block">
                        <summary className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg hover:bg-gray-100">
                          ⋮
                        </summary>

                        <div className="absolute right-6 z-10 mt-2 w-40 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
                          <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                            Посмотреть
                          </button>

                          <button className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50">
                            Редактировать
                          </button>

                          <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50">
                            Удалить
                          </button>
                        </div>
                      </details>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>
    </>
  )
}

export default UserManager