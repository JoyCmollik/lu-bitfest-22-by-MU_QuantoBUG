import React from 'react'

const DashboardHome = () => {
  return (
    <div className="grid grid-cols-12">
        <div className="col-span-2 bg-primary">
            sidebar
        </div>
        <div className="col-span-10 bg-dark">content</div>
    </div>
  )
}

export default DashboardHome