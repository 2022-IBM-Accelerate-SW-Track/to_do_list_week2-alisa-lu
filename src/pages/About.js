import React, { Component } from 'react';
import './About.css';
import profile_pic from "../assets/profile_pic.png";
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img src={profile_pic} className="profile_image" alt="Profile Pic"></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Alisa Lu</div>
            <div className="brief_description">
              I am a first year Computer Science major at UC Irvine. As a creative writer and programmer, I'm interested in creating enjoyable user experiences and incorporating storytelling in code, especially through design and interactive experiences!
            </div>
          </div>
        </div>
      </div>
    )
  }
}