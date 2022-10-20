import React from 'react'

const Skeleton = () => {
  return (
    <div className="p-4 max-w-sm w-full h-screen mx-auto">
      <div className="animate-pulse grid grid-cols-2 space-y-10">
        <div className="w-[600px] h-[300px] bg-gray-300 rounded space-x-10"></div>
        <div className="w-full h-4 bg-gray-300 rounded "></div>
        <div className="w-full h-4 bg-gray-300 rounded col-span-2"></div>
        <div className="w-full h-4 bg-gray-300 rounded col-span-2"></div>
      </div>
    </div>
  )
}

export default Skeleton
