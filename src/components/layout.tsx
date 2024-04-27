import React from 'react';


type Props = {
  children: React.ReactNode;

}
const Layout = ({children}:Props) => {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mt-5">Welcome to Our Application</h1>
      <main className='mt-10'>{children}</main>
    </>
  )
}

export default Layout
