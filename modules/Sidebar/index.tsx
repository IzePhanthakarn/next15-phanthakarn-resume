import React from 'react'
import Profile from './Profile'
import Skills from './Skills'

const Sidebar = () => {
  return (
    <aside className='md:col-span-1 space-y-6'>
      <Profile />
      <Skills />
    </aside>
  )
}

export default Sidebar