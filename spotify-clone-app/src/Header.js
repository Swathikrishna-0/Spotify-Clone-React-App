import React from 'react';
import "./Header.css";
import {MdSearch} from "react-icons/md";
import {Avatar} from "@material-ui/core";
import {useDataLayerValue} from './DataLayer';

function Header() {
  const [{user}, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="header__left">
        <MdSearch className="search_icon"/>
        <input placeholder="Search for Arists, Songs or Podcasts..." type="text"/>
      </div>
      <div className="header__right">
        <Avatar src={user?.images[0]?.url} alt="RQ"/>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header