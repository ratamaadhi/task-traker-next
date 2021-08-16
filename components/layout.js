import React from 'react'

function Layout({children}) {
  return (
    <div className="container mx-auto bg-gradient-to-br from-gray-900 to-gray-800 font-poppin h-screen">
      {children}
    </div>
  )
}

export default Layout
