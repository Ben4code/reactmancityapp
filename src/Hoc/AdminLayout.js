import React from 'react'
import AdminNav from '../components/Dashboard/Nav/AdminNav'

export default function AdminLayout(props) {
  return (
    <div className="admin_container">
        <div className="admin_left_nav">
          <AdminNav></AdminNav>
        </div>
        <div className="admin_right_nav">
            {props.children}
        </div>
    </div>
  )
}
