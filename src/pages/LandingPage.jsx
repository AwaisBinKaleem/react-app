import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div>
      <p>landing page content</p>
      <Link to='contacts'>Click to Login</Link>
      
    </div>
  )
}

export default LandingPage
