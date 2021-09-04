import React from 'react';
import './misc_act2.css';
import { notification, notificationEn, teamInfo, teamInfoEn, partnerInfo, partnerInfoEn } from '../../contents';

interface MiscAct2Props {
  lang: string;
}

function MiscAct2(props: MiscAct2Props) {
	const noti = props.lang === "ko" ? notification : notificationEn;
	const teamInfoContent = props.lang === "ko" ? teamInfo : teamInfoEn;
	return (
		<section className="section-misc-act2">
			<div className="wrapper">
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
				<div className="notification">
					<div className="title">{noti.title}</div>
					<a target="_blank" href={noti.formlink} className="text">{noti.text}</a>
				</div>
				<div className="line">-</div>
				{/* <div className="partner-info">
					<div className="title">
					  {props.lang === "ko" ? "파트너" : "Partner"}
					</div>
					<div className="name">
					  {props.lang === "ko" ? partnerInfo.name : partnerInfoEn.name}
					</div>
				</div> */}
			</div>
		</section>
	);
}
export default MiscAct2;