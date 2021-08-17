import React from 'react'

function Layout({children}) {
  return (
    <div className="relative flex flex-col justify-center container mx-auto bg-gradient-to-br from-gray-900 to-gray-800 font-poppin h-screen pb-6">
      {children}
    </div>
  )
}

export default Layout
