import React from 'react';
import './archive.css';
import { archiveContent, archiveContentEn } from '../../contents';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

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
        <AliceCarousel disableButtonsControls autoPlay animationType={"fadeout"}>
          {
            imagePaths.map((path: any) => (
              <img src={require(`../../assets/archive/${path}`).default} className="sliderimg"/>
            ))
          }
        </AliceCarousel>
      </div>
    </section>
  );
}
export default Archive;