import React from "react";
import "./Nav.css";

import letsGo from "./images/lets_go.svg";
import dropdownArrow from "./images/dropdown-arrow.svg";
import saly1 from "./images/Saly-1.png";
import indexTaiwan from "./images/index_taiwan.svg";
import magnifyingGlassSolid from "./images/magnifying-glass-solid.svg";

function Nav() {
  return (
    <div>
      <div className="index-container">
        <div className="title-and-saly">
          {/* Image Saly1 */}
          <div className="index-saly">
            <img src={saly1} alt="Saly" />
          </div>
          <div className="index-circle-bg"></div>
          <div className="index-title-card">
            <img
              className="index-title-words-top"
              src={letsGo}
              alt="Let's Go"
            />
            <br />
            <img
              className="index-title-words-bottom"
              src={indexTaiwan}
              alt="Taiwan"
            />
          </div>
        </div>
        <div className="menu-block">
          <div className="menu-list">
            <div className="menu-title">訂製你的專屬旅程</div>

            {/* TODO: 要寫成一個選單的 Component */}
            <div className="menu-items">
              <div className="menu-item-text">縣市</div>
              <div className="icon-arrow">
                <img className="" src={dropdownArrow} alt="arrow icon" />
              </div>
            </div>

            {/* TODO: 可能可以跟「縣市」用同一個 Component */}
            <div className="menu-items">
              類別
              <div className="icon-arrow">
                <img className="" src={dropdownArrow} alt="arrow icon" />
              </div>
            </div>

            {/* TODO: 要研究「搜尋」怎麼做，做成一個 Component */}
            <div className="menu-items menu-input-keyword">
              <span>輸入關鍵字...</span>
            </div>
            <div className="menu-items menu-search-button">
              <img
                className="icon-search"
                src={magnifyingGlassSolid}
                alt="Search icon"
              />
              搜尋
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
