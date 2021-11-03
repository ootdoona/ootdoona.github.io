import React from 'react';
import './misc.css';
import { notification, notificationEn, teamInfo, teamInfoEn, partnerInfo, partnerInfoEn } from '../../contents';

interface MiscProps {
  lang: string;
  act: number;
  whiteBg: boolean;
}

function Misc(props: MiscProps) {
	const noti = props.lang === "ko" ? notification : notificationEn;
	const teamInfoContent = props.lang === "ko" ? teamInfo : teamInfoEn;

  if (props.act === 1) { // v2 act 1 (archive)
    let bgColor, fontColor;
    if (props.whiteBg) {
      bgColor = 'white';
      fontColor = 'black';
    } else {
      bgColor = '#242526';
      fontColor = 'white';
    }
    return (
      <section className="section-misc" style={{backgroundColor: bgColor, color: fontColor}}>
        <div className="wrapper">
          <div className="line">-</div>
          <div className="team-info">
            <div className="title">
              {props.lang === "ko" ? "팀원" : "Team"}
            </div>
            <div className="section-team-member">
              <div className="team-member">
                <b>{teamInfoContent.sound.role}</b>  {teamInfoContent.sound.name} <a style={{cursor: 'pointer'}} onClick={() => window.open(teamInfoContent.sound.instaLink, "_blank")}>{teamInfoContent.sound.instaId}</a>
              </div>
              <div className="team-member">
                <b>{teamInfoContent.space.role}</b>  {teamInfoContent.space.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.design.role}</b>  {teamInfoContent.design.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.development.role}</b>  {teamInfoContent.development.name}
              </div>
            </div>
          </div>
          <div className="line">-</div>
          <div className="advice-info">
            <div className="title">
              {props.lang === "ko" ? "자문" : "Advice"}
            </div>
            <div className="section-team-member">
              <div className="team-member">
                <b>{teamInfoContent.transmission.role}</b>  {teamInfoContent.transmission.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.translation.role}</b>  {teamInfoContent.translation.name}
              </div>
            </div>
          </div>
				  <div className="line">-</div>
				  <div className="partner-info">
				  	<div className="title">
				  	  {props.lang === "ko" ? "파트너" : "Partner"}
				  	</div>
				  	<div className="name">
				  	  {props.lang === "ko" ? partnerInfo.name : partnerInfoEn.name}
				  	</div>
				  </div>
        </div>
      </section>
    );
  } else if (props.act === 2) { // v2 act 2
    const bgColor = '#242526';
    const fontColor = 'white';
    return (
      <section className="section-misc" style={{backgroundColor: bgColor, color: fontColor}}>
        <div className="wrapper">
          <div className="line">-</div>
          <div className="team-info">
            <div className="title">
              {props.lang === "ko" ? "팀원" : "Team"}
            </div>
            <div className="section-team-member">
              <div className="team-member">
                <b>{teamInfoContent.costume.role}</b>  {teamInfoContent.costume.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.design.role}</b>  {teamInfoContent.design.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.development.role}</b>  {teamInfoContent.development.name}
              </div>
            </div>
          </div>
          <div className="line">-</div>
          <div className="advice-info">
            <div className="title">
              {props.lang === "ko" ? "자문" : "Advice"}
            </div>
            <div className="section-team-member">
              <div className="team-member">
                <b>{teamInfoContent.transmission.role}</b>  {teamInfoContent.transmission.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.translation.role}</b>  {teamInfoContent.translation.name}
              </div>
            </div>
          </div>
				  <div className="line">-</div>
				  <div className="notification">
				  	<div className="title">{noti.title}</div>
				  	<div className="title-extra">{props.lang === "ko" ? "2021년 11월 광주" : "November 2021, Gwangju"}</div>
				  	<a target="_blank" href={noti.formlink} className="text">{noti.text}</a>
				  </div>
        </div>
      </section>
    );
  } else if (props.act === 3) { // v3 act 1 (archive)
    const bgColor = '#242526';
    const fontColor = 'white';
    return (
      <section className="section-misc" style={{backgroundColor: bgColor, color: fontColor}}>
        <div className="wrapper">
          <div className="line">-</div>
          <div className="team-info">
            <div className="title">
              {props.lang === "ko" ? "도움" : "도움eng"}
            </div>
            <div className="section-team-member">
              <div className="team-member">
                <b>{teamInfoContent.sound.role}</b>  {teamInfoContent.sound.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.space.role}</b>  {teamInfoContent.space.name}
              </div>
            </div>
          </div>
          <div className="line">-</div>
				  <div className="partner-info">
				  	<div className="title">
				  	  {props.lang === "ko" ? "파트너" : "Partner"}
				  	</div>
				  	<div className="name">
				  	  {props.lang === "ko" ? partnerInfo.name : partnerInfoEn.name}
				  	</div>
				  </div>
        </div>
      </section>
    );
  } else if (props.act === 4) { // v3 act 2 (archive)
    const bgColor = '#242526';
    const fontColor = 'white';
    return (
      <section className="section-misc" style={{backgroundColor: bgColor, color: fontColor}}>
        <div className="wrapper">
          <div className="line">-</div>
          <div className="team-info">
            <div className="title">
              {props.lang === "ko" ? "도움" : "도움eng"}
            </div>
            <div className="section-team-member">
              <div className="team-member">
                <b>{teamInfoContent.costume.role}</b>  {teamInfoContent.costume.name}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (props.act === 5) { // v3 act 3
    const bgColor = '#242526';
    const fontColor = 'white';
    return (
      <section className="section-misc" style={{backgroundColor: bgColor, color: fontColor}}>
        <div className="wrapper">
          <div className="line">-</div>
          <div className="team-info">
            <div className="title">
              {props.lang === "ko" ? "도움" : "도움eng"}
            </div>
            <div className="section-team-member">
              <div className="team-member">
                <b>{teamInfoContent.video.role}</b>  {teamInfoContent.video.name}
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  } else { // original act 1 misc
    const bgColor = '#242526';
    const fontColor = 'white';
    return (
      <section className="section-misc" style={{backgroundColor: bgColor, color: fontColor}}>
        <div className="wrapper">
          <div className="line">-</div>
				  <div className="notification">
				  	<div className="title">{noti.title}</div>
				  	<a target="_blank" href={noti.formlink} className="text">{noti.text}</a>
				  </div>
				  <div className="line">-</div>
          <div className="team-info">
            <div className="title">
              {props.lang === "ko" ? "팀원" : "Team"}
            </div>
            <div className="section-team-member">
              <div className="team-member">
                <b>{teamInfoContent.sound.role}</b>  {teamInfoContent.sound.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.space.role}</b>  {teamInfoContent.space.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.design.role}</b>  {teamInfoContent.design.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.development.role}</b>  {teamInfoContent.development.name}
              </div>
            </div>
          </div>
          <div className="line">-</div>
          <div className="advice-info">
            <div className="title">
              {props.lang === "ko" ? "자문" : "Advice"}
            </div>
            <div className="section-team-member">
              <div className="team-member">
                <b>{teamInfoContent.transmission.role}</b>  {teamInfoContent.transmission.name}
              </div>
              <div className="team-member">
                <b>{teamInfoContent.translation.role}</b>  {teamInfoContent.translation.name}
              </div>
            </div>
          </div>
				  <div className="line">-</div>
				  <div className="partner-info">
				  	<div className="title">
				  	  {props.lang === "ko" ? "파트너" : "Partner"}
				  	</div>
				  	<div className="name">
				  	  {props.lang === "ko" ? partnerInfo.name : partnerInfoEn.name}
				  	</div>
				  </div>
        </div>
      </section>
    );
  }
}
export default Misc;