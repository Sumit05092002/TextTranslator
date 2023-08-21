import React, {useState} from 'react'

export default function NavigationBar(props) {
  return (
    <div>
      <div className="navigation">
        <nav>
            <ul>
                <li>{props.home}</li>
                <li>{props.file}</li>
                <li>{props.contact}</li>
                <li>{props.about}</li>
                <li>{props.profile}</li>
                <li><input type="search" name="" id="searchbar" placeholder={props.placeholder} /></li>
            </ul>
        </nav>
      </div>
    </div>
  )
}
