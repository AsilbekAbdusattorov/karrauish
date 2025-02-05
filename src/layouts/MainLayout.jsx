import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Header/>
      <main className='grow'>
        <div className="">
          <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default MainLayout