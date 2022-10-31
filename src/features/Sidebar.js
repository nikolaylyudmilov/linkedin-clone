import React from 'react'
import "./Sidebar.css"
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice'

const Sidebar = () => {

    const user = useSelector(selectUser)

    const recentItem = (topic) => {
       return <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    }
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
        <img src="https://images.unsplash.com/photo-1666756254884-906387158643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60" alt="" />

            <Avatar src={user.photoUrl} className="sidebar__avatar">
                {user.email[0]}
            </Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className='sidebar__stats'>
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">1,337</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">8,008,135</p>
                </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('softwareengineering')}
            {recentItem('design')}
            {recentItem('developer')}
        </div>
    </div>
  )
}

export default Sidebar;