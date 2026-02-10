import React from 'react'

function HeaderMain() {
  return (
    <header className="w-full bg-black shadow-md">
      <div className="max-auto max-w-7xl flex items-center gap-2 px-6 py-4">
        
        <img
          src="https://tse1.mm.bing.net/th/id/OIP.y9lzfBNRTvwlsubLBDQRKgHaHa?w=512&h=512&rs=1&pid=ImgDetMain&o=7&rm=3"
          className="h-12 rounded-full object-cover"
        />

        <h1 className="text-2xl font-bold tracking-wide">
          Menu
        </h1>

      </div>
    </header>
  )
}

export default HeaderMain
