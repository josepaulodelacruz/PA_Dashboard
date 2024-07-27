
import { Link, Outlet } from 'react-router-dom'


const UsersPage = () => {
  return (
    <>
      <Link to='/dashboard/users/add'>Add USer</Link>

    <Outlet />
    </>
  )
}


export default UsersPage
