import React from 'react';
import { Button } from 'react-bootstrap';
import MapIcon from "../../assets/icon/map.png";
import './archive.css';
import { archiveContent, archiveContentEn, archive2Content, archive2ContentEn, personalInfo } from '../../contents';
import SeqContainer from '../seq_container/seq_container';

interface ArchiveProps {
  lang: string;
  act: number;
  version: number;
  whiteBg: boolean;
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function Archive(props: ArchiveProps) {
  let content;
  const imagePaths = [];
  if (props.act === 1) {
    content = props.lang === "ko" ? archiveContent : archiveContentEn;
    imagePaths.push("act1/perform_space.jpg")
    for (let i = 1; i < 25; i++) {
      imagePaths.push(`act1/first/${i}.jpg`);
    }
    for (let i = 1; i < 25; i++) {
      imagePaths.push(`act1/second/${i}.jpg`);
    }
  } else { // act2
    content = props.lang === "ko" ? archive2Content : archive2ContentEn;
    for (let i = 0; i < 35; i++) {
      imagePaths.push(`act2/${i}.jpg`);
    }
  }

  let para2 = 
    <div className="small">
      {content.para2}
    </div>

  let title;
  if (props.version === 2) {
    if (props.lang === "en" && isMobile.any()) {
      title =
        <div>
          <div className="title-en-mobile">
            {content.title}
          </div>
          <div className="info-en-mobile">
            {content.info}
          </div>
        </div>
    } else {
      title =
        <div>
          <div className="title">
            {content.title}
          </div>
          <div className="info">
            {content.info}
          </div>
        </div>
    }
  } else { // version 3, demo
    if (isMobile.any()) {
      const locationLink = props.act === 1 ? personalInfo.locationV1 : personalInfo.locationV2;
      title =
        <div>
          <div className="before-title-en-mobile">
            Previous / 
          </div>
          <div className="title-en-mobile">
            {content.title}
          </div>
          <Button className="btn">
		        {/* <img src={MapIcon} className="btn-map-image"/> */}
		        <img src={MapIcon} className="btn-map-image" onClick={() => window.open(locationLink, "_blank")}/>
          </Button>
        </div>
      para2 = 
          <div>
            <div className="info-en-mobile">
              <div>{content.mobDate}</div>
              <div>{content.mobInfo}</div>
            </div>
            <div className="info-en-mobile">
              {content.mobtime}
            </div>
          </div>
    } else {
      let rightLineTransform;
      if (props.act === 2) {
        rightLineTransform = props.lang === "ko" ? "translate3d(360px, 26px, 0)" : "translate3d(395px, 26px, 0)";
      } else { // act 1
        rightLineTransform = props.lang === "ko" ? "translate3d(410px, 26px, 0)" : "translate3d(550px, 26px, 0)";
      }
      title =
        <div>
          <div className="left-line"></div>
          <div className="before-title">
            Previous / 
          </div>
          <div className="title">
            {content.title}
          </div>
          <div className="info">
            {content.info}
          </div>
          <div className="right-line" style={{transform: rightLineTransform}}></div>
        </div>
    }
  }
  let bgColor;
  let fontColor;
  if (props.whiteBg == true) {
    bgColor = 'white';
    fontColor = 'black';
  } else {
    bgColor = '#242526';
    fontColor = 'white';
  }

  return (
    <section className="section-archive" style={{backgroundColor: bgColor, color: fontColor}}>
      <div className="wrapper">
        {title}
        <SeqContainer imagePaths={imagePaths} lang={props.lang} act={props.act} whiteBg={props.whiteBg}/>
        <div className="line">-</div>
        <div className="para">
          {content.para1}
        </div>
        {para2}
      </div>
    </section>
  );
}
export default Archive;