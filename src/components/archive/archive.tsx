import React from 'react';
import './archive.css';
import { archiveContent, archiveContentEn } from '../../contents';
import SeqContainer from '../seq_container/seq_container';

interface ArchiveProps {
  lang: string;
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
  const content = props.lang === "ko" ? archiveContent : archiveContentEn;
  const imagePaths = [
    "perform_space.jpg",
  ];
  for (let i = 1; i < 25; i++) {
    imagePaths.push(`first/${i}.jpg`);
  }
  for (let i = 1; i < 25; i++) {
    imagePaths.push(`second/${i}.jpg`);
  }

  let title;
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

  return (
    <section className="section-archive">
      <div className="wrapper">
        {title}
        <SeqContainer imagePaths={imagePaths} />
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