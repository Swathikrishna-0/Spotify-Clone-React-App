import React from 'react';
import "./Body.css";
import Header from './Header';
import {useDataLayerValue} from "./DataLayer";
import {MdOutlinePlayCircleFilled} from "react-icons/md";
import {MdFavorite} from "react-icons/md";
import {MdMoreHoriz} from "react-icons/md";
import SongRow from "./SongRow";

function Body({spotify}) {
  const [{discover_weekly}, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify}/>

      <div className="body__info">

        <img src={discover_weekly?.images[0].url} alt=""/>

        <div className="body__infoText">
          <strong> PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <MdOutlinePlayCircleFilled className="body__shuffle"/>
          <MdFavorite className="body__favIcon"/>
          <MdMoreHoriz className="body__moreIcon"/>
        </div>

        {discover_weekly?.tracks.items.map(item => (
          <SongRow track={item.track}/>
        ))}
      </div>
    </div>
  )
}

export default Body