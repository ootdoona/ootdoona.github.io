import React from 'react';
import './intro.css';
import { introContent, introContentEn, personalInfo, teamInfo, teamInfoEn, } from '../../contents';
// import posterLandscape from "../../assets/landscape/landscape_final_web.gif";
import posterPortrait from "../../assets/portrait/poster_portrait_loop.gif";
// import posterLandscapeV2 from "../../assets/landscape/landscape_act2.gif";
import posterLandscapeV3 from "../../assets/landscape/landscape_act3.gif";

interface IntroProps {
  lang: string;
  version: number;
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
	const poster = isMobile.any() ? posterPortrait : posterLandscapeV3;
	const content = props.lang === "ko" ? introContent : introContentEn;

  let team;
	const teamInfoContent = props.lang === "ko" ? teamInfo : teamInfoEn;
  if (props.version === -1) {

  } else if (props.version === 3) {
    team = 
      <div className="advice-info">
        <div className="line" style={{fontSize: '14px'}}>+</div>
        <div className="title">
          {props.lang === "ko" ? "팀원" : "Team"}
        </div>
        <div className="section-team-member">
          <div className="team-member">
            <b>{teamInfoContent.design.role}</b> {teamInfoContent.design.name}
          </div>
          <div className="team-member">
            <b>{teamInfoContent.development.role}</b> {teamInfoContent.development.name}
          </div>
          <div className="team-member">
            <b>{teamInfoContent.transmission.role}</b> {teamInfoContent.transmission.name}
          </div>
          <div className="team-member">
            <b>{teamInfoContent.translation.role}</b> {teamInfoContent.translation.name}
          </div>
        </div>
      </div>
  }
  let mainContent;
  if (props.version === -1) {
    mainContent = 
      <div>
				<div className="line"></div>
				<div className="para">
					{content.para1}
				</div>
				<div className="line"></div>
				<div className="para">
					{content.para2}
				</div>
      </div>
  } else {
    mainContent = 
      <div>
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
      </div>
  }
  let artistInfo;
  if (props.version != -1) {
    artistInfo =
			<div className="artist-info">
				<div className="bold">{personalInfo.nameKo}  {personalInfo.nameEn}</div>
				<div>{personalInfo.email}</div>
				<div>{personalInfo.phone}</div>
				<div onClick={()=> window.open(personalInfo.insta, "_blank")} style={{cursor: 'pointer'}}>{personalInfo.instaId}</div>
			</div>
  }
  return (
		<section className="section-intro">
				<div className="wrapper">
					<div className="poster">
						<img src={poster} alt="poster" className="poster-image"/>
					</div>
          {mainContent}
          {artistInfo}
          {team}
				</div>
		</section>
	);
}
export default Intro;