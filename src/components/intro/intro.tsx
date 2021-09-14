import React from 'react';
import './intro.css';
import { introContent, introContentEn, personalInfo } from '../../contents';
import posterLandscape from "../../assets/landscape/landscape_final_web.gif";
import posterPortrait from "../../assets/portrait/poster_portrait_loop.gif";
import posterLandscapeV2 from "../../assets/landscape/landscape_act2.gif";

interface IntroProps {
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

function Intro(props: IntroProps) {
	// const poster = isMobile.any() ? posterPortrait : posterLandscape;
	const poster = isMobile.any() ? posterPortrait : posterLandscapeV2;
	const content = props.lang === "ko" ? introContent : introContentEn;
	return (
		<section className="section-intro">
				<div className="wrapper">
					<div className="poster">
						<img src={poster} alt="poster" className="poster-image"/>
					</div>
					<div className="title">
						{content.title}
					</div>
					<div className="line">-</div>
					<div className="para">
						{content.para1}
					</div>
					<div className="line">-</div>
					<div className="para">
						{content.para2}
					</div>
					<div className="line">-</div>

					<div className="artist-info">
						<div className="bold">{personalInfo.nameKo}  {personalInfo.nameEn}</div>
						<div>{personalInfo.email}</div>
						<div>{personalInfo.phone}</div>
						<div onClick={()=> window.open(personalInfo.insta, "_blank")} style={{cursor: 'pointer'}}>{personalInfo.instaId}</div>
					</div>
				</div>
		</section>
	);
}
export default Intro;