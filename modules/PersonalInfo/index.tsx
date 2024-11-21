import React from 'react'
import PersonalInfomation from './PersonalInfomation'
import Language from './Language'

const PersonalInfo = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-4'>
      <PersonalInfomation />
      <Language />
    </div>
  )
}

export default PersonalInfo