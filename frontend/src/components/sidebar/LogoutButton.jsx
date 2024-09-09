import React from 'react'
import { CiLogout } from "react-icons/ci";
import useLogout from "../../hooks/useLogout";


const LogoutButton = () => {
  const { logout } = useLogout();
  return (
    <div className='mt-auto'><CiLogout style={{ fontSize: '2rem' }} onClick={logout} /></div>
  )
}

export default LogoutButton