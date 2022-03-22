import React from 'react';
import "./Footer.css";
import {MdPlayCircleOutline} from "react-icons/md";
import {MdSkipPrevious} from "react-icons/md";
import {MdSkipNext} from "react-icons/md";
import {IoShuffleOutline} from "react-icons/io5";
import {IoRepeat} from "react-icons/io5";
import {RiPlayListFill} from "react-icons/ri";
import {FaVolumeDown} from "react-icons/fa";
import Slider from '@mui/material/Slider';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Zayn_Wiki_%28cropped%29.jpg/330px-Zayn_Wiki_%28cropped%29.jpg" alt="" />
        <div  className="footer__songInfo">
          <h4>Tightrope</h4>
          <p>Zayn</p>
        </div>
      </div>

      <div className="footer__center">
        <IoShuffleOutline className="footer__play_icons__green" />
        <MdSkipPrevious className="footer__play_icons"/> 
        <MdPlayCircleOutline className="footer__play_icons_play"/> 
        <MdSkipNext className="footer__play_icons"/>
        <IoRepeat className="footer__play_icons__green"/>
      </div>

      <div className="footer__right">
        <RiPlayListFill className="footer__right_icons"/>
        <FaVolumeDown className="footer__right_icons"/>
        <Slider
            color="success"
            size="small"
          />
      </div>
    </div>
  )
}

export default Footer