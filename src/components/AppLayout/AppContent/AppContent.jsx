import React from 'react'
import '../../../styles/main.css'
import GamePage from '../../pages/GamePage/GamePage'
import RulePage from '../../pages/RulePage/RulePage'
import WelcomePage from '../../pages/WelcomePage/WelcomePage'

export default function AppContent( { contentType } ) {
  if (contentType === 'game') {
    return (
      <div className='content'>
        <GamePage />
      </div>
    )
  }
  if (contentType === 'rules') {
    return (
      <div className='content'>
        <RulePage />
      </div>
    )
  }
  if (contentType === 'welcome') {
    return (
      <div className='content'>
        <WelcomePage />
      </div>
    )
  }
}
