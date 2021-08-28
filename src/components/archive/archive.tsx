import React from 'react';
import './archive.css';
import { archiveContent, archiveContentEn } from '../../contents';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import SeqContainer from '../seq_container/seq_container';

interface ArchiveProps {
  lang: string;
}

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

  return (
    <section className="section-archive">
      <div className="wrapper">
        <div className="title">
          {content.title}
        </div>
        <div className="info">
          {content.info}
        </div>
        <SeqContainer imagePaths={imagePaths} />
        <div className="line">-</div>
        <div className="para">
          {content.para1}
        </div>
      </div>
    </section>
  );
}
export default Archive;