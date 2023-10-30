import React from 'react'

export default function Footer() {
  return (
    
<footer className="bg-white rounded-lg  m-4 dark:bg-gray-800 container mx-auto md:px-0 px-5">
    <div className="w-full mx-auto  py-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© {new Date().getFullYear()} <a href="https://rinoarreaza.com/" className="hover:underline">Rino Arreaza</a>. All Rights Reserved.
    </span>
   
    </div>
</footer>

  )
}
