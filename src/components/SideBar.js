import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SideBar() {
    return (
        <div style={{
            background: '#000080', height: '110vh'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center'
            }}>
                <NavLink to="/" activeClassName="selected">
                    Home
                </NavLink>
                <NavLink to="/hoc" activeClassName="selected">
                    HOC
                </NavLink><NavLink to="/about" activeClassName="selected">
                    About
                </NavLink>
            </div>


        </div>
    )
}
