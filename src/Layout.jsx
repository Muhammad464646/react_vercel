import { Link, Outlet } from 'react-router-dom'
const Layout = () => {
    return (
        <div>
            <ul>
                {/* <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/about'}>about</Link>
                </li>
                <li>
                    <Link to={'/Users'}>Users</Link>
                </li>
             */}
            </ul>
            <div>
            <Outlet />
            </div>
        </div>
    )
}
export default Layout