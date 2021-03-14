import React from 'react';
import './misc.css';
import { notification, notificationEn, teamInfo, teamInfoEn, partnerInfo, partnerInfoEn } from '../../contents';

interface MiscProps {
  lang: string;
}

function Misc(props: MiscProps) {
	const noti = props.lang === "ko" ? notification : notificationEn;
	const teamInfoContent = props.lang === "ko" ? teamInfo : teamInfoEn;
	return (
		<section className="section-misc">
			<div className="wrapper">
				<div className="line">-</div>
				<div className="notification">
					<div className="title">{noti.title}</div>
					<div className="consent">{noti.statement}</div>
				</div>
				<div className="line">-</div>
				<div className="team-info">
					<div className="title">
					  {props.lang === "ko" ? "팀원" : "Team"}
					</div>
					<div className="section-team-member">
					  <div className="team-member">
					  	{teamInfoContent.sound.role}  {teamInfoContent.sound.name}
					  </div>
					  <div className="team-member">
					  	{teamInfoContent.transmission.role}  {teamInfoContent.transmission.name}
					  </div>
					  <div className="team-member">
					  	{teamInfoContent.design.role}  {teamInfoContent.design.name}
					  </div>
					  <div className="team-member">
					  	{teamInfoContent.development.role}  {teamInfoContent.development.name}
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
export default Misc;