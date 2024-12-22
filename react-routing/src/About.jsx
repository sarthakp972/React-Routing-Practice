// import React from 'react'

import { Outlet } from "react-router-dom"

function About() {
  return (
    <div>
      About Page
      <Outlet/> {/*Use to achive Nested Routes */}
    </div>
  )
}

export default About
