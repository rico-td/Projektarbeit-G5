import React from 'react'
import { UilSearch } from '@iconscout/react-unicons';
import style from "./SearchBar.module.css"

function SearchBar() {
  return (
    <div className={style.containerLayout}>
        <input className={style.searchBar} type="search" placeholder="city..." />
        <div className={style.containerSearchIcon}>
            <UilSearch style={{ gridArea: "icon"}} size="30" color="#000000" />
        </div>
    </div> 
  )
}

export default SearchBar