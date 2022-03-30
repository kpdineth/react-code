import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
    // window+v clipborad
    return (
        <div>
            <ul style={{ listStyle: 'none', flexDirection: 'row', display: 'flex' }}>
                <li><Link to={'/'} >Login</Link></li>
                <li><Link to={'/Home'}>Home</Link></li>
                <li><Link to={'/About'}>About</Link></li>
                <li><Link to={'/Dashboard'}>Dashboard</Link></li>
                <li><Link to={'/ContactUs'}>ContactUs</Link></li>
            
            </ul>
        </div>
    )
}

export default Header