import MenuOptions from '@/components/sidebar'
import React from 'react'

type Props = {
    children: React.ReactNode
}
const Layout = ( {children}:Props) => {
  return (
    <div className='flex overflow-hidden h-screen'>
      <MenuOptions/>
          <div className='w-full h-screen'>
              {children}
          </div>
    </div>
  )
}

export default Layout