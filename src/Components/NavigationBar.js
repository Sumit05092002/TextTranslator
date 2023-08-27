import React, {useState} from 'react'
import { Link } from 'react-router-dom'
export default function NavigationBar(props) {
  return (
    <div>
      <div className="navigation">
        <nav>
            <ul>
                <Link to="/">{props.home}</Link>
                <li>{props.file}</li>
                <li>{props.contact}</li>
                <Link to="/about">{props.about}</Link>
                <li>{props.profile}</li>
                <li><input type="search" name="" id="searchbar" placeholder={props.placeholder} /></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}
