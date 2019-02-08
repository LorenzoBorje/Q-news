import React from 'react';
import Spotify from './spotify';

import './masthead.css';

export default function Masthead(props) {
  return (
    <header className="masthead">
      <div className="masthead-logo">Q!</div>
      <div className="masthead-info">
        <div className="masthead-date">5 February 2019</div>
        <div className="masthead-tagline">
          <span className="masthead-holiday">First day of the Lunar New Year </span>
          <span className="masthead-motto">// It's already tomorrow in Hong Kong</span>
        </div>
        <Spotify />
        {/* <div className="masthead-spotify">
          <span className="masthead-spotify-track">King of the Hill — Thundercat, BADBADNOTGOOD, Flying Lotus</span>
        </div> */}
      </div>

    </header>
  )
}