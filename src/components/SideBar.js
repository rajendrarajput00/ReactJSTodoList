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
                </NavLink>
                <NavLink to="/about" activeClassName="selected">
                    About
                </NavLink>
                <NavLink to='/context' activeClassName="selected">ConText</NavLink>
                <NavLink to='/uesReducer' activeClassName="selected">useReducer</NavLink>
                <NavLink to='/uesRef' activeClassName="selected">useRef</NavLink>
                <NavLink to='/ownHook' activeClassName="selected">ownHook</NavLink>
                <NavLink to='/calculator' activeClassName="selected">calculator</NavLink>
                <NavLink to='/weather' activeClassName="selected">weather</NavLink>
                <NavLink to='/class-life-cycle' activeClassName="selected">ClassLifeCycle</NavLink>
                <NavLink to='/lazy-loading' activeClassName="selected">Lazy Loading</NavLink>


            {/*     <NavLink to='/class-life-cycle' activeClassName="selected">classLifeCyle</NavLink> */}
            </div>


        </div>
    )
}
