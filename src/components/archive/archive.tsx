import React from 'react';
import './archive.css';
import { archiveContent, archiveContentEn, archive2Content, archive2ContentEn } from '../../contents';
import SeqContainer from '../seq_container/seq_container';

interface ArchiveProps {
  lang: string;
  act: number;
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

  let title;
  if (props.lang === "en" && isMobile.any()) {
    title =
      <div>
        <div className="before-title-en-mobile">
          Previous / 
        </div>
        <div className="title-en-mobile">
          {content.title}
        </div>
        <div className="info-en-mobile">
          {content.info}
        </div>
      </div>
  } else {
    let rightLineTransform;
    if (props.act === 2) {
      rightLineTransform = "translate3d(360px, 26px, 0)";
    } else { // act 1
      rightLineTransform = "translate3d(410px, 26px, 0)";
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

  return (
    <section className="section-archive" style={{backgroundColor: '#242526'}}>
      <div className="wrapper">
        {title}
        <SeqContainer imagePaths={imagePaths} lang={props.lang} act={props.act}/>
        <div className="line">-</div>
        <div className="para">
          {content.para1}
        </div>
        <div className="small">
          {content.para2}
        </div>
      </div>
    </section>
  );
}
export default Archive;